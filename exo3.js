function echanger(T, ind1, ind2) {
  let temp = T[ind1];
  T[ind1] = T[ind2];
  T[ind2] = temp;
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


function triLignes(M) {
  for (let i = 0; i < M.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < M.length; j++) {
      if (nombreUn(M[j]) < nombreUn(M[minIndex])) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      echanger(M, i, minIndex);
    }
  }
  return M;
}

let M = [
  [0, 0, 1, 1],
  [0, 0, 0, 1],
  [1, 1, 1, 1],
  [0, 0, 0, 0]
];

console.log("Avant triLignes :");
console.log(M);

triLignes(M);

console.log("Après triLignes :");
console.log(M);
