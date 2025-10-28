class Utilisateur {
  constructor(nom, prenom) {
    this.nom = nom;
    this.prenom = prenom;
  }
  get nomComplet() {
    return `${this.nom} ${this.prenom}`;
  }

  get noms() {
    return `${this.nom}`;
  }
  sePresenter() {
    console.log(`je m'appele ${this.nom} ${this.prenom}`);
  }
}

const koto = new Utilisateur("Koto", "Zafy");
koto.sePresenter();

console.log(koto.nomComplet);
console.log(koto.noms);
