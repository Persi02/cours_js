const url = "https://blockchain.info/ticker";
const price = document.querySelector("#price");
price.style.display = "grid";
price.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";

// GET

const recupererPrix = async () => {
  try {
    let requete = await fetch(url, {
      method: "GET",
    });
    if (!requete.ok) {
      alert("un problem est survenue");
    } else {
      let res = await requete.json();
      price.replaceChildren();
      for (let key in res) {
        const newDiv = document.createElement("div");
        newDiv.style.margin = "20px";
        newDiv.style.backgroundColor = "#F8F8F8";
        newDiv.textContent = `${key} : ${res[key].last}`;
        price.appendChild(newDiv);
      }
    }
  } catch (error) {
    const newDiv = document.createElement("div");
    newDiv.style.margin = "20px";
    newDiv.textContent = "un problem est survenue veuiller ressayer plutard";
    newDiv.style.color = "red";
    price.replaceChildren();
    price.appendChild(newDiv);
    console.log(error);
  }
};

setInterval(recupererPrix, 1000);

//axios
// axios
//   .get(url)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
