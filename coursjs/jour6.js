function Animal(nombreDePattes, poids) {
  this.nombreDePattes = nombreDePattes;
  this.poids = poids;
}
Animal.prototype.presentation = function () {
  console.log(
    "Cet animal possède " +
      this.nombreDePattes +
      " pattes et fait " +
      this.poids +
      "."
  );
};

function Oiseau(nombreDePattes, poids, longueurDesAiles) {
  Animal.call(this, nombreDePattes, poids);
  this.longueurDesAiles = longueurDesAiles;
}
Oiseau.prototype = Object.create(Animal.prototype);
Oiseau.prototype.constructor = Oiseau;

function Mammifere(nombreDePattes, poids, typeDePoils) {
  Animal.call(this, nombreDePattes, poids);
  this.typeDePoils = typeDePoils;
}
Mammifere.prototype = Object.create(Animal.prototype);
Mammifere.prototype.constructor = Mammifere;

var perroquet = new Oiseau(2, "1kg", "grandes");

perroquet.presentation();
