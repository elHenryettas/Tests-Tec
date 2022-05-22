// Responsables de los cuarteles
const paddockManagers = [
  { id: 1, taxNumber: "132254524", name: "JUAN TAPIA BURGOS" },
  { id: 2, taxNumber: "143618668", name: "EFRAIN SOTO VERA" },
  { id: 3, taxNumber: "78903228", name: "CARLOS PEREZ GONZALEZ" },
  { id: 4, taxNumber: "176812737", name: "ANDRES VIÑALES CIENFUEGOS" },
  { id: 5, taxNumber: "216352696", name: "OSCAR PEREZ ZUÑIGA" },
  { id: 6, taxNumber: "78684747", name: "JOAQUIN ANDRADE SANDOVAL" },
];

// Tipo de cuartel, en el cual se utiliza el tipo de producto plantado
const paddockType = [
  { id: 1, name: "PALTOS" },
  { id: 2, name: "AVELLANOS" },
  { id: 3, name: "CEREZAS" },
  { id: 4, name: "NOGALES" },
];

// Un paddock representa un cuartel de un campo (Entiéndase también como potrero o parcela), el área está representada en m2, harvestYear es el año en el que se sembró el cuartel
const paddocks = [
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
const farms = [
  { id: 1, name: "AGRICOLA SANTA ANA" },
  { id: 2, name: "VINA SANTA PAULA" },
  { id: 3, name: "FORESTAL Y AGRICOLA LO ENCINA" },
];


// 2 Arreglo con los nombres de cada tipo de cultivo, ordenados decrecientemente por la suma TOTAL de la cantidad de hectáreas plantadas de cada uno de ellos.
function sortPaddockTypeByTotalArea() {
/*   
  //? este lo hizo jose de desarrollo util

     const paddockTypeWithArea = paddockType.map((Type) => {
     
      const totalPaddockArea = paddocks
        .filter((paddockArea) => paddockArea.paddockTypeId === Type.id)
        .map((paddockArea) => paddockArea.area)
        .reduce((prevArea, currentArea) => prevArea + currentArea, 0);
  
        
      return {
        name: Type.name,
        hectareas: totalPaddockArea,
      };
    });
  
    return paddockTypeWithArea.sort(
      (paddockA, paddockB) => paddockB.hectareas - paddockA.hectareas
    ).map(e=> e.name);
 */
    //? hasta aca llega el de jose
  
   
  //! este es el mio a principios del PG
 /*   return paddockType.map(cultivos =>{
    return{
      name: cultivos.name,
      hectareas:paddocks.filter(e => e.paddockTypeId === cultivos.id)
      .map(e => {return {[cultivos.name]: e.area}})  
      .reduce( (total, element) => {
            return(
             element[cultivos.name] + total)
          }, 0)  
    }
   }).sort((a,b) => b.hectareas - a.hectareas).map(e => e.name)
 
  */


//! este lo hice durante el M2

   let newArr = [];

for (let i = 1; i < paddockType.length + 1; i++) {
  let Hectareas = paddocks.filter((elemento) => elemento.paddockTypeId === i)
  .reduce((total, element) => element.area + total, 0); 

    newArr.push({ areatotal: Hectareas,  name: paddockType[i - 1].name });
  }

  let a = newArr.sort(
    (a, b) => b.areatotal - a.areatotal
    ); 
  
 let otroArr = [];
for (let i = 0; i < newArr.length; i++) {
  otroArr.push(a[i].name);
} 

return otroArr;
 

}

/* console.log(sortPaddockTypeByTotalArea()) */




// 3 Arreglo con los nombres de los administradores, ordenados decrecientemente por la suma TOTAL de hectáreas que administran.
function sortFarmManagerByAdminArea() {
  // CODE HERE
  /* newArr = [];

  for (let i = 1; i <= paddockManagers.length; i++) {
    let areatotal = paddocks
      .filter((e) => e.paddockManagers === i)
      .reduce((total, item) => item.area + total, 0);
    newArr.push({ areatotal: areatotal, name: paddockManagers[i - 1].name });
  }

  return newArr.sort((a, b) => a.areatotal - b.areatotal).map((e) => e.name); */
}

function newManagerRanking() {
  // CODE HERE
  const newPaddockManagers = [
    ...paddockManagers,
    { id: 7, taxNumber: "74862457", name: "HENRYETTAS" },
  ];
  const newPaddocks = [
    ...paddocks,
    {
      paddockManagerId: 7,
      farmId: 1,
      paddockTypeId: 4,
      harvestYear: 2017,
      area: 900,
    },
  ];

  newArr = [];

  for (let i = 1; i <= newPaddockManagers.length; i++) {
    let areatotal = newPaddocks
      .filter((e) => e.newPaddockManagers === i)
      .reduce((total, item) => item.area + total, 0);
    newArr.push({ areatotal: areatotal, name: newPaddockManagers[i - 1].name });
  }

  return newArr.sort((a, b) => a.areatotal - b.areatotal).map((e) => e.name);
}
// console.log(biggestCherriesManagers());
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 4 Objeto en que las claves sean los nombres de los campos y los valores un arreglo con los ruts de sus administradores ordenados alfabéticamente por nombre.
function farmManagerNames() {
  // CODE HERE
  let obj = {};
  for (let i = 1; i <= farms.length; i++) {
    const nombres = [];
    const a = [
      ...new Set(
        paddocks
        .filter((e) => {
            if (e.farmId === i) {
              return e.paddockManagerId;
            }
          })
          .map((e) => e.paddockManagerId)
      ),
    ];
    
    for (let l = 0; l < paddockManagers.length; l++) {
      for (let f = 0; f < a.length; f++) {
        if (paddockManagers[l].id === a[f]) {
          nombres.push(paddockManagers[l].name);
        }
      }
    }
    nombres.sort();
    obj[farms[i - 1].name] = nombres;
  }
  return obj;
}

console.log(farmManagerNames())











// 6 Arreglo con nombres de los administradores de la FORESTAL Y AGRÍCOLA LO ENCINA, ordenados por nombre, que trabajen más de 1000 m2 de Cerezas
function biggestCherriesManagers() {
  // CODE HERE
 /*  let newArray = [
    ...new Set(
      paddocks
      .filter((p) => p.paddockTypeId === 3 && p.area > 1000)
        .map((p) => p.paddockManagerId)
    ),
  ];

  let cerezeros = [];
  for (let i = 0; i < paddockManagers.length; i++) {
    for (let f = 0; f < newArray.length; f++) {
      if (paddockManagers[i].id === newArray[f]) {
        cerezeros.push(paddockManagers[i].name);
      }
    }
  }
  cerezeros.sort();

  return cerezeros; */

  let validados = paddocks.filter(e => e.paddockTypeId === 3 && e.area > 1000)
  let ids = validados.map(e => {
    let admin = paddockManagers[e.paddockManagerId-1]
  return admin.name
  })
 /*  let nombres = ids.map(e=>{
    let name =  paddockManagers[e-1]
    return name.name
  }) */
  
  return [... new Set(ids)]



//!                                                                                                               
//!                                                                                                               
//!                                                                                                               
//!                                                                                                               
//!                                                                                                               
//!                                                                                                               




}
/* console.log(biggestCherriesManagers()) */


// 7 Objeto en el cual las claves sean el nombre del administrador y el valor un arreglo con los nombres de los campos que administra, ordenados alfabéticamente
function farmManagerPaddocks() {
  // CODE HERE
  let obj = {};
  for (let i = 1; i <= paddockManagers.length; i++) {
    const a = [
      ...new Set(
        paddocks
          .filter((e) => {
            if (e.paddockManagerId === i) {
              return e.paddockManagerId;
            }
          })
          .map((e) => e.farmId)
      ),
    ];

    const nombres = [];

    for (let l = 0; l < farms.length; l++) {
      for (let f = 0; f < a.length; f++) {
        if (farms[l].id === a[f]) {
          nombres.push(farms[l].name);
        }
      }
    }
    nombres.sort();
    obj[paddockManagers[i - 1].name] = nombres;
  }
  return obj;
}



// 8 Objeto en que las claves sean el tipo de cultivo concatenado con su año de plantación (la concatenación tiene un separador de guión ‘-’, por ejemplo AVELLANOS-2020) y el valor otro objeto en el cual la clave sea el id del administrador y el valor el nombre del administrador
/* 
{
 AVELLANOS-2020:{
   1:"JUAN TAPIA BURGOS"
 }
PALTOS-2018:{
  5:"OSCAR PEREZ ZUÑIGA"
}
}
*/

function paddocksManag() {
  const objetoFinal = {}

  paddockType.map(type =>{
    paddocks.filter(plantacion => plantacion.paddockTypeId === type.id)
    .map(e =>{

      const admin = paddockManagers[e.paddockManagerId -1]      

      const obj = {
        [admin.id]: admin.name 
      }
      const cultivoYaño =`${type.name} - ${e.harvestYear}`

      objetoFinal[cultivoYaño]= obj
    })
})

return objetoFinal
}

// 9 Agregar nuevo administrador con datos ficticios a "paddockManagers" y agregar un nuevo cuartel de tipo NOGALES con 900mts2, año 2017 de AGRICOLA SANTA ANA, administrado por este nuevo administrador 
// Luego devolver el lugar que ocupa este nuevo administrador en el ranking de la pregunta 3.
// No modificar arreglos originales para no alterar las respuestas anteriores al correr la solución
function newManagerRanking() {
  // CODE HERE
  const newPaddockManagers = [...paddockManagers, { id: 7, taxNumber: '74862457', name: 'HENRYETTAS' }]
  const newPaddocks = [...paddocks, { paddockManagerId: 7, farmId: 1, paddockTypeId: 4, harvestYear: 2017, area: 900 }];

  newArr = [];

    for(let i = 1; i <= newPaddockManagers.length ;i++){
        let areatotal = newPaddocks.filter(e => e.newPaddockManagers === i).reduce((total, item) => item.area + total, 0);
        newArr.push({areatotal: areatotal, name: newPaddockManagers[i-1].name});

    }

    return newArr.sort((a,b) => a.areatotal - b.areatotal).map(e => e.name);
  
}
