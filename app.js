const pronoun = ['the', 'our'];
const adj = ['great', 'big'];
const noun = ['jogger', 'racoon'];
const extensions = ['.com', '.net', '.es']

function generarDominio(arr1,arr2,arr3,ext) {
  for (let i = 0; i < arr1.length; i++) {
    const part1 = arr1[i];

    for (let j = 0; j < arr2.length; j++) {
      const part2 = arr2[j];

      for (let k = 0; k < arr3.length; k++) {
        const part3 = arr3[k];

        const rndExt = Math.floor(Math.random() * ext.length);

        console.log(part1 + part2 + part3 +ext[rndExt]);
      }
    }
  }
}

generarDominio(pronoun, adj, noun, extensions);