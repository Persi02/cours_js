let ville = "Antananarivo";

const fetchData = (location) => {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    location +
    "&appid=c3e89b138bc774cbcde4246cf9e8df06&units=metric";
  let requete = new XMLHttpRequest();
  requete.open("GET", url);
  requete.responseType = "json";
  requete.send();
  requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        res = requete.response;
        location = res.name;
        document.querySelector("#ville").textContent = location;
        document.querySelector("#temperature_label").textContent =
          res.main.temp;
      } else {
        alert(
          " Ville non trouvée ou Un problème est intervenu, merci de revenir plus tard. "
        );
      }
    }
  };
};

fetchData(ville);

document.querySelector("#changer").addEventListener("click", () => {
  ville = prompt("Quelle ville ?");
  fetchData(ville);
});
