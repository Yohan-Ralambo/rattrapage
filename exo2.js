function echanger(T, ind1, ind2) {
  let temp = T[ind1];
    T[ind1] = T[ind2];
  T[ind2] = temp;
  for (i=0; i<T.lenght; i++){
    if (T[i]==ind1){
        T[i]=T[ind2]
    }else if (T[i]==ind2){
        T[i]=temp
    }
  }

  return T;
}


T=[1, 0, 0];
console.log(echanger(T, 0, 1))