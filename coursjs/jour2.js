// Déclaration classique
function addition(a, b) {
  return a + b;
}

console.log(addition(5, 3));

// Fonction fléchée
const saluer = (nom) => `Bonjour ${nom} !`;
console.log(saluer("koto"));

// Closure (fonction qui "se souvient")
function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => (count = 0),
    value: () => count,
  };
}

const compteur = createCounter();
console.log(compteur.increment()); // 1
console.log(compteur.increment()); // 2
console.log(compteur.reset()); // 0

// Calculatrice simple
function calculatrice(op, a, b) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : "Erreur : division par zéro";
    default:
      return "Opération inconnue";
  }
}
console.log(calculatrice("*", 5, 3));

const r = 2;
r = 2 + 4;
console.log(r);
