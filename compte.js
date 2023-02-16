function generate() {
  var div = document.querySelector(".enun");
  div.innerHTML = "";
  var r = random(10, 100000) * 10;
  V1 = random(0, 1);
  V2 = random(0, 1)
  var compte = [
    ["Vendes netes", r],
    [`Variació d'existències de productes acabats <span style='color: green'>${V1 ? "F>I" : "I>F"}</span>`, random(0, 10000)],
    [`Variació d'existències de productes en curs <span style='color: green'>${V2 ? "F>I" : "I>F"}</span>`, random(0, 10000)],
    ["Ingressos per arrendaments", random(400, 10000)],
    ["Ingressos extraordinaris", random(0, 1000)],
    ["Compres Netes", random(0, r / 5)],
    ["Sous i Salaris", random(200, r / 3)],
    [
      "Organització de la Seguretat Social a càrreg de l'empresa",
      random(200, r / 15),
    ],
    ["Amortització o dotació de l'immobilitzat", random(0, 10000)],
    ["Despeses extraordinàries", random(0, r / 20)],
    ["Subministraments", random(0, r / 20)],
    ["Preparacions i Conservació", random(0, r / 20)],
    ["Serveis Professionals independents", random(0, r / 20)],
    ["Publicitat i relacions públiques", random(0, r / 20)],
    ["Transports", random(0, r / 20)],
    ["Arrendaments i cànons", random(0, r / 20)],
    ["Serveis Bancaris", random(0, r / 20)],
    
    ["Ingressos financers", random(0, 1000)],
    ["Despeses financeres", random(0, 1000)],
    ["Impost sobre benefici", random(12, 52)],
  ];
  div.innerHTML = ``; //clear
  div.innerHTML += `
    <p><li>${compte[0][0]} : <span style='color: red'>${numberWithCommas(compte[0][1])}</li></span></p>
    `;
  var showed=[compte[0]];
  for (let i = 1; i < 17; i++){
    random(0, 1) ? (div.innerHTML += `<p><li>${compte[i][0]} : <span style='color: red'>${numberWithCommas(compte[i][1])}</li></span></p>`): 0;
    showed.push(compte[i]);
  }
  for (let i = 17; i < 19 ; i++){
    random(0, 1) ? (div.innerHTML += `<p><li>${compte[i][0]} : <span style='color: red'>${numberWithCommas(compte[i][1])}</li></span></p>`): 0;
    showed.push(compte[i]);
  }
  div.innerHTML += `<p><li>${compte[19][0]} : <span style='color: red'>${numberWithCommas(compte[19][1])} %</li></span></p>`;
  showed.push(compte[19]);

  ///////

  showed.forEach(element => {
    if (compte.indexOf(element) == 0){
      document.getElementById("inxn").innerHTML += `<p><li>${element[0]} : <span style='color: red'>${numberWithCommas(element[1])}</li></span></p>`;
    }
  });



}

function random(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

var showSol = false;
function toggleSol(){
  showSol = !showSol;
  if (showSol) {
    document.querySelector(".showsol").innerHTML = "Amagar Solució";
    document.querySelector(".sol").style.display = "flex";
    document.querySelector(".sol").scrollIntoView();
  } else {
    document.querySelector(".showsol").innerHTML = "Mostrar Solució";
    document.querySelector(".sol").style.display = "none";
  }
}