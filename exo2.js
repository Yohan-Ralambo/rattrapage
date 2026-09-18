function echanger(T, ind1, ind2) {
  let temp = T[ind1];
  T[ind1] = T[ind2];
  T[ind2] = temp;
  return T;
}

function ranger(T) {
  let curseur = 0; 
  for (let i = 0; i < T.length; i++) {
    if (T[i] === 0) {
      echanger(T, i, curseur);
      curseur++;
    }
  }
  return T;
}


function nombreUn(T) {
  for (let i = 0; i < T.length; i++) {
    if (T[i] === 1) {
      return T.length - i;
    }
  }
  return 0;
}

let tab1 = [1, 0, 0];
console.log(echanger(tab1, 0, 1));

let tab2 = [0, 1, 0, 0, 1, 0];
console.log(ranger(tab2));

console.log(nombreUn(tab2));
console.log(nombreUn([1, 1, 1]));
