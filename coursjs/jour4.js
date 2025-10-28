let a = prompt("Entrez un nombre") * 1;

const somme = (params) => {
  let a = params;
  while (a > 0) {
    a--;
    params += a;
  }
  return params;
};
console.log(somme(a));
