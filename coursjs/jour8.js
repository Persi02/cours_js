//class avec extends(battle system)
class Personnage {
  constructor(pseudo, classe, sante, attaque) {
    this.pseudo = pseudo;
    this.classe = classe;
    this.sante = sante;
    this.attaque = attaque;
    this.niveau = 1;
  }
  get informations() {
    return ` ${this.pseudo} (${this.classe}) a ${this.sante} points de vie et est au niveau ${this.niveau}.`;
  }
  evolue() {
    this.niveau++;
    console.log(`${this.pseudo} passe au niveau ${this.niveau} !`);
  }
  verifierSante() {
    if (this.sante <= 0) {
      this.sante = 0;
      console.log(`${this.pseudo} est perdu...`);
    }
  }
}

class Magicien extends Personnage {
  constructor(pseudo) {
    super(pseudo, "magicien", 170, 90);
  }
  attaques(personnage) {
    personnage.sante -= this.attaque;
    console.log(
      `${this.pseudo} attaque ${personnage.pseudo} en lançant un sort (${this.attaque} dégâts)!`
    );
    this.evolue();
    this.verifierSante();
  }
  coupSpecial(personnage) {
    personnage.sante -= this.attaque * 5;
    console.log(
      `${this.pseudo} attaque avec son coup spécial puissance des arcanes ${
        personnage.pseudo
      } (${this.attaque * 5} dégâts)!`
    );
    this.evolue();
    personnage.verifierSante();
  }
}

class Guerrier extends Personnage {
  constructor(pseudo) {
    super(pseudo, "Guerrier", 350, 50);
  }
  attaques(personnage) {
    personnage.sante -= this.attaque;
    console.log(
      `${this.pseudo} attaque ${personnage.pseudo} avec son épée (${this.attaque} dégâts)!`
    );
    this.evolue();
    personnage.verifierSante();
  }
  coupSpecial(personnage) {
    personnage.sante -= this.attaque * 5;
    console.log(
      `${this.pseudo} attaque avec son coup spécial haches de guerre ${
        personnage.pseudo
      } (${this.attaque * 5} dégâts)!`
    );
    this.evolue();
    this.verifierSante();
  }
}

const persi = new Magicien("Persi");
const athena = new Guerrier("Athena");

console.log(persi.informations);
console.log(athena.informations);
persi.attaques(athena);
console.log(athena.informations);
athena.attaques(persi);
console.log(persi.informations);
persi.coupSpecial(athena);

/*let dateActuelle = new Date();

console.log(dateActuelle.getDay()); // jour de la semaine (0 pour dimanche, 6 pour samedi)
console.log(dateActuelle.getFullYear()); // année
console.log(dateActuelle.getDate()); // jour du mois

console.log(dateActuelle.getUTCDay());
// Renvoi la date pour l'heure UTC (donc de Londres)
// Les fonctions sont identiques, on ajoute simplement UTC

dateActuelle.setFullYear(2750);
console.log(dateActuelle.getFullYear());*/

/*let dateActuelle = new Date();

// toLocaleDateString = jour, mois, l'année
// toLocaleTimeString = l'heure
// toLocaleString     = jour, mois, l'année, l'heure
// ON CHOISI LES OPTIONS QU'ON VEUT

let dateLocale = dateActuelle.toLocaleString(navigator.language, {
  weekday: 'long', // short (3 premières lettres), narrow (première lettre), long (toutes les lettres)
  year: 'numeric', // numeric (xxxx), 2-digit (xx)
  month: 'long', // short, narrow, long, numeric
  day: 'numeric', // numeric, 2-digit
  hour: 'numeric', // ...
  minute: 'numeric',
  second: 'numeric'
});

console.log(dateLocale);*/

/*
let dateActuelle = new Date();

// toLocaleDateString = jour, mois, l'année
// toLocaleTimeString = l'heure
// toLocaleString     = jour, mois, l'année, l'heure
// ON CHOISI LES OPTIONS QU'ON VEUT

let dateLocale = dateActuelle.toLocaleString(navigator.language, {
  weekday: 'long', // short (3 premières lettres), narrow (première lettre), long (toutes les lettres)
  year: 'numeric', // numeric (xxxx), 2-digit (xx)
  month: 'long', // short, narrow, long, numeric
  day: 'numeric', // numeric, 2-digit
  hour: 'numeric', // ...
  minute: 'numeric',
  second: 'numeric'
});

console.log(dateLocale);
*/
