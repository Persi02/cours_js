//LES BASE DU LANGUAGE

//letiable
let nom = "koto";
let age = 23;

//Affichage dans la console
console.log(`Bonjour, je m'appelle ${nom} et j'ai ${age} ans.`);

//verification de type
console.log(typeof age);

//conversion de chaine en nombre
let nombreTexte = "42";
let nombre = Number(nombreTexte);
console.log(typeof nombre);

//fonctioin de description
function descrirePersonne(personne) {
  return `Bonjour, je m'appelle ${personne.nom} , j'ai ${personne.age} ans et j'habite ${personne.ville}.`;
}
const pers = { nom: "Pierre", age: 25, ville: "Paris" };
console.log(descrirePersonne(pers));

// exercice
//ajoute un objet avec ton nom et teste la fonction
//experimente avec typeof ,parseInt, parseFloat

console.log(parseFloat("3.14abc"));
console.log(parseInt("3.14abc"));
