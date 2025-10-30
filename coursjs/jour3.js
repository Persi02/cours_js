function addition(nombreA, nombreB) {
  return nombreA + nombreB;
}

function multiplication(nombreA, nombreB) {
  return nombreA * nombreB;
}

function soustraction(nombreA, nombreB) {
  return nombreA - nombreB;
}

function division(nombreA, nombreB) {
  if (nombreB == 0) {
    throw new Error("Impossible de diviser par 0.");
  }
  return nombreA / nombreB;
}

let restart = false;
do {
  do {
    let choix = Number(
      prompt(
        "Que souhaitez-vous faire ?\n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - Division\n"
      )
    );
  } while (choix != 1 && choix != 2 && choix != 3 && choix != 4);

  do {
    let premierNombre = Number(prompt("Entrez un premier nombre :"));
    let deuxiemeNombre = Number(prompt("Entrez un deuxième nombre : "));
  } while (isNaN(premierNombre) || isNaN(deuxiemeNombre));

  try {
    let result;
    switch (choix) {
      case 1:
        resultat = addition(premierNombre, deuxiemeNombre);
        break;

      case 2:
        resultat = multiplication(premierNombre, deuxiemeNombre);
        break;

      case 3:
        resultat = soustraction(premierNombre, deuxiemeNombre);
        break;

      case 4:
        resultat = division(premierNombre, deuxiemeNombre);
        break;

      default:
        throw new Error("Une erreur est survenue.");
    }

    alert("Voici le résultat : " + resultat);
  } catch (error) {
    alert(error);
  }

  restart = confirm("Souhaitez-vous recommencer un calcul ?");
} while (restart);

alert("Merci d'avoir utilisé notre calculatrice.");
