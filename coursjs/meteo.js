//faire du requete avec ajax

let ville;

const fetchData = (location) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?${location}&appid=c3e89b138bc774cbcde4246cf9e8df06&units=metric`;
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

if ("geolocation" in navigator) {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  navigator.geolocation.watchPosition(
    (position) => {
      console.log(position.coords.longitude);
      console.log(position.coords.latitude);
      fetchData(
        `lon=${position.coords.longitude}&lat=${position.coords.latitude}`
      );
    },
    error,
    options
  );

  function error() {
    alert("Aucune position disponible.");
  }
} else {
  ville = "antananarivo";
  fetchData(`q=${ville}`);
}

document.querySelector("#changer").addEventListener("click", () => {
  ville = prompt("Quelle ville ?");
  fetchData(`q=${ville}`);
});
