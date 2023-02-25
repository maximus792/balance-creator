function generate() {
  var div = document.querySelector(".enun");
  div.innerHTML = "";
  //var r = random(10, 100000) * 10;
  var r = random(10, 100000);

  V1 = random(0, 1);
  V2 = random(0, 1)
  var compte = [
    ["Vendes netes", r],
    [`Variació d'existències de productes acabats <span style='color: green'>${V1 ? "F>I" : "I>F"}</span>`, random(0, 10000)],
    [`Variació d'existències de productes en curs <span style='color: green'>${V2 ? "F>I" : "I>F"}</span>`, random(0, 10000)],
    ["Ingressos per arrendaments", random(400, 10000)],
    ["Ingressos extraordinaris", random(0, 1000)],
    ["Compres Netes", random(0, r / 4)],
    ["Sous i Salaris", random(200, r / 3)],
    [
      "Organització de la Seguretat Social a càrreg de l'empresa",
      random(200, r / 15),
    ],
    ["Amortització o dotació de l'immobilitzat", random(0, 10000)],
    ["Despeses extraordinàries", random(0, r / 20)],
    ["Subministraments", random(0, r / 20)],
    ["Preparacions i Conservació", random(0, r / 15)],
    ["Serveis Professionals independents", random(0, r / 10)],
    ["Publicitat i relacions públiques", random(0, r / 10)],
    ["Assegurances", random(0, r/10)],
    ["Transports", random(0, r / 20)],
    ["Arrendaments i cànons", random(0, r / 20)],
    ["Serveis Bancaris", random(0, r / 20)],
    
    ["Ingressos financers", random(0, 1000)],
    ["Despeses financeres", random(0, 1000)],
    ["Impost sobre benefici", random(12, 52)],
  ];
  var toShow = []
  if (!V1)
    compte[1][1] = compte[1][1]*-1;
  if (!V2)
    compte[2][1] = compte[2][1]*-1;
  //
  div.innerHTML = ``; //clear
  toShow.push(`
    <p class='compteEnun'><li>${compte[0][0]} : <span style='color: red'>${numberWithCommas(compte[0][1])}</span></li></p>
    `);
  var showed=[compte[0]];
  for (let i = 1; i < 18; i++){
    if (random(0, 1)){
       toShow.push(`<p class='compteEnun'><li>${compte[i][0]} : <span style='color: red'>${numberWithCommas(Math.abs(parseInt(compte[i][1])))}</span></li></p>`);
      showed.push(compte[i]);
    }
  }
  for (let i = 18; i < 20 ; i++){
    if (random(0, 1)){
        toShow.push(div.innerHTML += `<p class='compteEnun'><li>${compte[i][0]} : <span style='color: red'>${numberWithCommas(compte[i][1])}</span></li></p>`);
      showed.push(compte[i]);
    } 
  }
  toShow.push(`<p class='compteEnun'><li>${compte[20][0]} : <span style='color: red'>${numberWithCommas(compte[20][1])} %</span></li></p>`);
  showed.push(compte[20]);
  
  ///////
  toShow = toShow.sort((a, b) => 0.5 - Math.random());
  toShow.forEach(element => {
    div.innerHTML += element;
  })


  ///////

  document.getElementById("inxn").innerHTML="";
  document.getElementById("vpac").innerHTML="";
  document.getElementById("aie").innerHTML="";
  document.getElementById("provs").innerHTML="";
  document.getElementById("ddp").innerHTML="";
  document.getElementById("adi").innerHTML="";
  document.getElementById("ade").innerHTML="";
  document.getElementById("res-ex").innerHTML="";
  document.getElementById("bai").innerHTML="";
  var inxn = 0;
  var vpac = 0;
  var aie = 0;
  var provs = 0;
  var ddp = 0;
  var adi = 0;
  var ade = 0;
  var IngressosFinancers =0;
  var DespesesFinanceres=0;

  console.log(compte);
  showed.forEach(element => {
    if (compte.indexOf(element) == 0){
      document.getElementById("inxn").innerHTML += `<p><li>${element[0]} : <span style='color: red'>${numberWithCommas(element[1])}</span></li></p>`;
      inxn+=element[1];
    }
    else if ([1, 2].includes(compte.indexOf(element))){
      document.getElementById("vpac").innerHTML += `<p><li>${element[0]} : <span style='color: red'>${numberWithCommas(element[1])}</span></li></p>`;
      vpac+=element[1];
    }
    else if ([3, 4].includes(compte.indexOf(element))){
      document.getElementById("aie").innerHTML += `<p><li>${element[0]} : <span style='color: red'>${numberWithCommas(element[1])}</span></li></p>`;
      aie+=element[1];
    }
    else if ([5].includes(compte.indexOf(element))){
      document.getElementById("provs").innerHTML += `<p><li>${element[0]} : <span style='color: red'>${numberWithCommas(element[1])}</span></li></p>`;
      provs+=element[1];
    }
    else if ([6, 7].includes(compte.indexOf(element))){
      document.getElementById("ddp").innerHTML += `<p><li>${element[0]} : <span style='color: red'>${numberWithCommas(element[1])}</span></li></p>`;
      ddp+=element[1];
    }
    else if ([8].includes(compte.indexOf(element))){
      document.getElementById("adi").innerHTML += `<p><li>${element[0]} : <span style='color: red'>${numberWithCommas(element[1])}</span></li></p>`;
      adi+=element[1];
    }
    else if ([9,10,11,12,13,14,15,16,17].includes(compte.indexOf(element))){
      document.getElementById("ade").innerHTML += `<p><li>${element[0]} : <span style='color: red'>${numberWithCommas(element[1])}</span></li></p>`;
      ade+=element[1];
    }
    else if ([18].includes(compte.indexOf(element))){
      document.getElementById("res-ex").innerHTML += `<p><li>${element[0]} : <span style='color: red'>${numberWithCommas(element[1])}</span></li></p>`;
      IngressosFinancers+=element[1];
    }
    else if ([19].includes(compte.indexOf(element))){
      document.getElementById("res-ex").innerHTML += `<p><li>${element[0]} : <span style='color: red'>${numberWithCommas(element[1])}</span></li></p>`;
      DespesesFinanceres+=element[1];
    }
    else if ([20].includes(compte.indexOf(element))){
      document.getElementById("bai").innerHTML += `<p><li id='bentax'>${element[0]} : <span style='color: red'>${numberWithCommas(element[1])} % </span></li></p>`;
    }
  });
  var IE = inxn+vpac+aie;
  var DE = provs+ddp+adi+ade;

  document.getElementById("inxn-n").innerHTML = numberWithCommas(inxn);
  document.getElementById("vpac-n").innerHTML = numberWithCommas(vpac);
  document.getElementById("aie-n").innerHTML = numberWithCommas(aie);
  document.getElementById("provs-n").innerHTML = numberWithCommas(provs);
  document.getElementById("ddp-n").innerHTML = numberWithCommas(ddp);
  document.getElementById("adi-n").innerHTML = numberWithCommas(adi);
  document.getElementById("ade-n").innerHTML = numberWithCommas(ade);
  document.getElementById("ie-n").innerHTML = numberWithCommas(IE);
  document.getElementById("de-n").innerHTML = numberWithCommas(DE);
  document.getElementById("res-ex-n").innerHTML = numberWithCommas(IE-DE);
  document.getElementById("res-fin-n").innerHTML = numberWithCommas(IngressosFinancers-DespesesFinanceres);
  document.getElementById("bai-n").innerHTML = numberWithCommas((IE-DE) + (IngressosFinancers-DespesesFinanceres)); //baii + rf
  var BAI = (IE-DE) + (IngressosFinancers-DespesesFinanceres)
  if (BAI > 0){
    document.getElementById("bentax").innerHTML += `-> ${ numberWithCommas(parseInt(compte[20][1]/100 * (BAI)))}`
    document.getElementById("ben-n").innerHTML = numberWithCommas( BAI -  parseInt(compte[20][1]/100 * (BAI))); //baii + rf
  }
  else{
    document.getElementById("bentax").innerHTML += `-> 0`
    document.getElementById("ben-n").innerHTML = "0" //baii + rf
  }

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


  
