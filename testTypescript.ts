import { Ifarms,IManagers, IPType,IPaddocks } from "./testTypeS_exports";

// The readonly keyword can prevent arrays from being changed.
const Managers:IManagers[]  =[
    { id: 1, taxNumber: "132254524", name: "JUAN TAPIA BURGOS" },
    { id: 2, taxNumber: "143618668", name: "EFRAIN SOTO VERA" },
    { id: 3, taxNumber: "78903228", name: "CARLOS PEREZ GONZALEZ" },
    { id: 4, taxNumber: "176812737", name: "ANDRES VIÑALES CIENFUEGOS" },
    { id: 5, taxNumber: "216352696", name: "OSCAR PEREZ ZUÑIGA" },
    { id: 6, taxNumber: "78684747", name: "JOAQUIN ANDRADE SANDOVAL" },
  ];
  const PType:IPType[] = [
    { id: 1, name: "PALTOS" },
    { id: 2, name: "AVELLANOS" },
    { id: 3, name: "CEREZAS" },
    { id: 4, name: "NOGALES" },
  ];
  const Paddocks:IPaddocks[] = [
    { paddockManagerId: 6, farmId: 1, paddockTypeId: 1, harvestYear: 2019, area: 1200 },
    { paddockManagerId: 1, farmId: 3, paddockTypeId: 4, harvestYear: 2019, area: 500 },
    { paddockManagerId: 5, farmId: 3, paddockTypeId: 2, harvestYear: 2020, area: 20000 },
    { paddockManagerId: 2, farmId: 2, paddockTypeId: 3, harvestYear: 2021, area: 8401},
    { paddockManagerId: 3, farmId: 1, paddockTypeId: 1, harvestYear: 2020, area: 2877 },
    { paddockManagerId: 5, farmId: 2, paddockTypeId: 2, harvestYear: 2017, area: 15902 },
    { paddockManagerId: 3, farmId: 3, paddockTypeId: 2, harvestYear: 2018, area: 1736 },
    { paddockManagerId: 2, farmId: 3, paddockTypeId: 3, harvestYear: 2020, area: 2965 },
    { paddockManagerId: 4, farmId: 3, paddockTypeId: 4, harvestYear: 2018, area: 1651 },
    { paddockManagerId: 5, farmId: 1, paddockTypeId: 1, harvestYear: 2018, area: 700 },
    { paddockManagerId: 1, farmId: 2, paddockTypeId: 1, harvestYear: 2019, area: 7956 },
    { paddockManagerId: 5, farmId: 3, paddockTypeId: 2, harvestYear: 2020, area: 3745 },
    { paddockManagerId: 6, farmId: 1, paddockTypeId: 3, harvestYear: 2021, area: 11362 },
    { paddockManagerId: 2, farmId: 3, paddockTypeId: 3, harvestYear: 2021, area: 300 },
    { paddockManagerId: 3, farmId: 2, paddockTypeId: 2, harvestYear: 2020, area: 19188 },
    { paddockManagerId: 3, farmId: 1, paddockTypeId: 1, harvestYear: 2019, area: 17137 },
    { paddockManagerId: 4, farmId: 3, paddockTypeId: 2, harvestYear: 2020, area: 100 },
    { paddockManagerId: 2, farmId: 1, paddockTypeId: 3, harvestYear: 2019, area: 11845 },
    { paddockManagerId: 5, farmId: 2, paddockTypeId: 1, harvestYear: 2018, area: 15969 },
    { paddockManagerId: 1, farmId: 3, paddockTypeId: 1, harvestYear: 2029, area: 10420 },
    { paddockManagerId: 5, farmId: 2, paddockTypeId: 3, harvestYear: 2010, area: 3200 },
    { paddockManagerId: 6, farmId: 1, paddockTypeId: 2, harvestYear: 2012, area: 10587 },
    { paddockManagerId: 2, farmId: 2, paddockTypeId: 2, harvestYear: 2018, area: 16750 }
  ];
  const farms: Ifarms[] = [
    { id: 1, name: "AGRICOLA SANTA ANA" },
    { id: 2, name: "VINA SANTA PAULA" },
    { id: 3, name: "FORESTAL Y AGRICOLA LO ENCINA" },
  ];
  // 0 Arreglo con los ids de los responsables de cada cuartel
  function listPaddockManagerIds(): number[] {
    return Managers.map((e) =>e.id)
  };
 /*  console.log(listPaddockManagerIds()) */

  // 1 Arreglo con los ruts de los responsables de los cuarteles, ordenados por nombre
  function listPaddockManagersByName(): string[] {
    // CODE HERE
    const responsables: {name:string,taxNumber:string}[]= Managers.map(e=>{
      return{name: e.name, taxNumber:e.taxNumber}
    })
    responsables.sort((a: {name: string, taxNumber:string}, b:{name: string, taxNumber:string})=> {
      if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    return 0;
})
  return responsables.map((e:{name: string, taxNumber:string})=> e.name)
  };
  /* console.log(listPaddockManagersByName())
 */
  // 2 Arreglo con los nombres de cada tipo de cultivo, ordenados decrecientemente por la suma TOTAL de la cantidad de hectáreas plantadas de cada uno de ellos.
  function sortPaddockTypeByTotalArea(): string[] {

    // CODE HERE
    const auxArray: {name:string, area:number}[]= []

    for (let i = 0; i < PType.length; i++) {
      const areaCultivo: number= Paddocks.filter(element=> element.paddockTypeId=== PType[i].id)
      .reduce((counter,element) =>{return element.area + counter},0)
      
      let obj:{name:string, area:number} = {area: areaCultivo, name:PType[i].name}
      auxArray.push(obj)
    }
    return auxArray.sort((a,b)=>{
      if(a.area< b.area) return 1
      if(a.area> b.area) return -1
      return 0
    }).map(e=> e.name)
  }
 /*  console.log(sortPaddockTypeByTotalArea()) */

  // 3 Arreglo con los nombres de los administradores, ordenados decrecientemente por la suma TOTAL de hectáreas que administran.
  function sortFarmManagerByAdminArea(): string[] {
    // CODE HERE


    const auxArray:{name:string, area:number}[] =[]
    for (let i = 0; i < Managers.length; i++) {
      const hectareas: number = Paddocks.filter(element =>element.paddockManagerId === Managers[i].id )
      .reduce((counter, element)=>{return element.area + counter},0) 
      let obj:{name:string, area:number} = {name: Managers[i].name, area: hectareas}
      auxArray.push(obj)
    }
    
    return auxArray.sort((a,b)=>{
      if(a.area< b.area) return 1
      if(a.area> b.area) return -1
      return 0
    }).map(e=> e.name)
  }
/*  console.log(sortFarmManagerByAdminArea()) */
  
  // 4 Objeto en que las claves sean los nombres de los campos y los valores un arreglo con los ruts de sus administradores ordenados alfabéticamente por nombre.
  function farmManagerNames(): {} {
    // CODE HERE
    const objCampos: {} = {}
    for (let i = 0; i < farms.length; i++) {
      const idAdmin : number[] = Array.from(new Set(Paddocks.filter(element => element.farmId === farms[i].id)
      .map(e => e.paddockManagerId)))

      const namesAdmins: string[] = Managers.filter(admins => {
         for (let x = 0; x < idAdmin.length; x++) {
           if(admins.id === idAdmin[x]) return admins
         }}
      ).sort((t1, t2) => {
        const name1 = t1.name.toLowerCase();
        const name2 = t2.name.toLowerCase();
        if (name1 > name2) return 1; 
        if (name1 < name2) return -1; 
        return 0;
      }).map(e => e.taxNumber)

      objCampos[farms[i].name]= namesAdmins
    }
    return objCampos
  }
  /* console.log(farmManagerNames()) */
 
  // 5 Arreglo ordenado decrecientemente con los m2 totales de cada campo que tengan más de 2 hectáreas en Paltos
  function biggestAvocadoFarms(): number[] | string {
    // CODE HERE
    const idCultivo : {name:string, id :number} = PType.find(e => e.name === "PALTOS")

    if(!idCultivo) return "no hay PALTOS entre los tipos de cultivo"

    const avocados: number[] = Paddocks.filter(e=> e.paddockTypeId === idCultivo.id && e.area > 2000).map(e => e.area)
  
    return avocados.sort((n1,n2)=> n2 - n1);
   
  }
/*   console.log(biggestAvocadoFarms()) */

  // 6 Arreglo con nombres de los administradores de la FORESTAL Y AGRÍCOLA LO ENCINA, ordenados por nombre, que trabajen más de 1000 m2 de Cerezas
  function biggestCherriesManagers(): string[] | string {
    // CODE HERE
    const idFarm: {id:number,name:string} = farms.find(e => e.name ==="FORESTAL Y AGRICOLA LO ENCINA")
    const idCultivo:{name:string, id :number} = PType.find(e => e.name === "CEREZAS")

    if(!idCultivo || !idFarm) return "Datos ingresados no existentes en la base de datos"

    const idAdmins: number[] = Array.from(new Set(Paddocks.filter(e => e.area > 1000 && e.farmId === idFarm.id && e.paddockTypeId === idCultivo.id).map(e => e.paddockManagerId))) 
    
    const nombres: string[] = Managers.filter(manager =>{
      for (let i = 0; i < idAdmins.length; i++) {
        if(manager.id === idAdmins[i]) return manager
      }
    }).map(e=>e.name)
    
    if(nombres.length <= 0) return "No hay administradores que coincidan con los datos ingresados"

    return nombres.sort()
  }
  /* console.log(biggestCherriesManagers()) */
  
  // 7 Objeto en el cual las claves sean el nombre del administrador y el valor un arreglo con los nombres de los campos que administra, ordenados alfabéticamente
  function farmManagerPaddocks(): {} {
    // CODE HERE
    let objAdmins: {} = {}
    for (let i = 0; i < Managers.length; i++) {
      const fieldAdmin: number[] = Array.from(new Set(Paddocks.filter(e=> e.paddockManagerId === Managers[i].id).map(e => e.farmId)))

      const arrayNames: string[] = []

      for (let z = 0; z < fieldAdmin.length; z++) {
        for (let x = 0; x < farms.length; x++) {
          if(fieldAdmin[z]=== farms[x].id)arrayNames.push(farms[x].name)
        }  
      }
      objAdmins[Managers[i].name] = arrayNames.sort()
    }
    return objAdmins

  }
  /* console.log(farmManagerPaddocks()) */

  // 8 Objeto en que las claves sean el tipo de cultivo concatenado con su año de plantación (la concatenación tiene un separador de guión ‘-’, por ejemplo AVELLANOS-2020) y el valor otro objeto en el cual la clave sea el id del administrador y el valor el nombre del administrador
  function paddocksManagers(): {} {
    // CODE HERE
    const obj: {} = {}
    for (let i = 0; i < Paddocks.length; i++) {
      const type: string = PType.find(e=> e.id === Paddocks[i].paddockTypeId).name
      const year: string = Paddocks[i].harvestYear.toString()
      const adminId: string = Paddocks[i].paddockManagerId.toString()
      const adminName:string = Managers.find(e => e.id === Paddocks[i].paddockManagerId).name

      obj[`${type}-${year}`] = {[adminId]: adminName}
          
    }
    return obj
  }
  /* console.log(paddocksManagers()) */
  
  /*  9 Agregar nuevo administrador con datos ficticios a "paddockManagers" y agregar un nuevo cuartel de tipo NOGALES con 900mts2, año 2017 de AGRICOLA SANTA ANA, administrado por este nuevo administrador 
   Luego devolver el lugar que ocupa este nuevo administrador en el ranking de la pregunta 3.
  No modificar arreglos originales para no alterar las respuestas anteriores al correr la solución */
  function newManagerRanking(id?: number ,taxNumber?:string, name?:string): string {
    // CODE HERE
    const argumentsData:IManagers = {
      id: id ? id : 10,
      taxNumber: taxNumber ? taxNumber : "32322232",
      name: name ? name : "Henryettas"
    }

    const newAdmin: IManagers[] = [...Managers, {
      id: argumentsData.id,
      taxNumber: argumentsData.taxNumber,
      name: argumentsData.name,
    }]

    const newPaddock:IPaddocks[] = [...Paddocks,{
      paddockManagerId: argumentsData.id,
      farmId: 2,
      paddockTypeId: 4,
      harvestYear: 2017,
      area: 900}]

    const areaAdmins:{name: string, area:number}[] = newAdmin
      .map(admin =>{
        const area = newPaddock.filter(field=> field.paddockManagerId === admin.id)
        .reduce((a,b)=>{
         return a + b.area
        },0)
        return {name:admin.name, area:area}
      })
      .sort((a,b)=>{
        if(a.area<b.area)return 1
        if(a.area>b.area)return -1
        return 0
      })

      for (let i = 0; i < areaAdmins.length; i++) {
        if(areaAdmins[i].name === argumentsData.name) return `El lugar que ocupa el nuevo Administrador "${argumentsData.name}" en orden Descendente segun el area administrada es en el puesto numero ${i+1}`
      }
      return "Algo salio mal"
    }
    /* console.log(newManagerRanking()) */
  