"use strict";
//pour essayer qu'il n y a pas des erreur silencieux
const url = "https://blockchain.info/ticker";
const price = document.querySelector("#price");
price.style.display = "grid";
price.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";

// GET

function recupererPrix() {
  let requete = new XMLHttpRequest();
  requete.open("GET", url);
  requete.responseType = "json";
  requete.send();
  requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
      res = requete.response;
      price.replaceChildren();

      for (let key in res) {
        const newDiv = document.createElement("div");
        newDiv.style.margin = "20px";
        newDiv.style.backgroundColor = "#F8F8F8";
        newDiv.textContent = `${key} : ${res[key].last}`;
        price.appendChild(newDiv);
      }
    }
  };
}

setInterval(recupererPrix, 1000);
