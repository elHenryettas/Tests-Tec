const array = [
  [1, 2, 3, 4],
  [5, 6, 7, 4],
  [5, 8],
  [11, 23],[12,21]
];

const splitArray = (bd) => {
  let contains = false;
  for (let i = 0; i < bd.length; i++) {
    for (let j = i + 1; j < bd.length; j++) {
      let aux = bd[i];
      let aux2 = bd[j];
      for (let k = 0; k < aux.length; k++) {
        for (let h = 0; h < aux2.length; h++) {
          if (aux[k] === aux2[h]) contains = true;
        }
      }
      if (contains) {
        bd[i] = [...bd[i], ...bd[j]];
        bd[j] = [];
        contains = false;
      }
    }
  }
  return array.filter((array) => array.length > 0).map(array => [...new Set(array)].sort());
};

console.log(splitArray(array));

/* for (let i = 0; i < array.length; i++) {
    const elemento = array[i]
    let concat = [];
    let match = false;

    for (let j = 0; j < elemento.length; j++) {
        for (let x = 0; x < array.length; x++) {
            if(array[x].includes(elemento[j])){
                concat.push(array[x])
                match= true
            }
        }
    }
    if(match){
        const limpio = [...new Set(concat.flat(Infinity).sort((n1,n2)=> n1-n2))]
        respuesta.push(limpio)}
    
} */
