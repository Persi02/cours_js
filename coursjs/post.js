const url = "https://lesoublisdelinfo.com/api.php";

// let requete = new XMLHttpRequest();

// // Post ajax
// requete.open("POST", url);
// requete.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// requete.responseType = "json";
// requete.send("prenom=John");

// requete.onload = function () {
//   if (requete.readyState === XMLHttpRequest.DONE) {
//     if (requete.status === 200) {
//       let reponse = requete.response;
//       console.log(reponse);
//     } else {
//       alert("Un problème est intervenu, merci de revenir plus tard.");
//     }
//   }
// };

// post fetch
const postData = async (prenom) => {
  const req = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      prenom,
    }),
  });
  if (!req.ok) {
    alert("un problem est survenue");
  } else {
    let res = await req.json();
    console.log(res);
  }
};
postData("john");

//axios

// const axiosInstancePost = axios.create({
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded'
//   },
//   baseURL: 'https://lesoublisdelinfo.com/'
// });

// axiosInstancePost.post('api.php', new URLSearchParams({
//   prenom: 'Steve'
// }))
//   .then(function(donnees) {
//       console.log(donnees.data);
//   })
//   .catch(function(erreur) {
//     console.log(erreur);
//   })
