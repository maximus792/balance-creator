const randomSort = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};
function selectValues(complete) {
  console.log("element");
  console.log(values);
  var changed = "";
  for (const [key, value] of Object.entries(values)) {
    changed = randomSort(value);
    console.log(changed);
    var ran = Math.floor(Math.random() * (changed.length + 1));
    if (complete && ran === 0) ran = 1;

    if (key === "PN") {
      ran = value.length;
    }
    console.log(ran);
    for (let i = 0; i < ran; i++) {
      selected[key].push(changed[i]);
    }
  }

  console.table(selected);
}

var selected = {};
var multiplicator;

function main() {
 /*  toggleSol(); */
  V1 = random(0, 1);
  V2 = random(0, 1);

  document.querySelector(".enun").innerHTML = "";
  document.querySelectorAll(`h4`).forEach((h4) => {
    if (h4.innerHTML.indexOf("(") > 0)
      h4.innerHTML = h4.innerHTML.substring(0, h4.innerHTML.indexOf("("));
  });
  selected = {};
  multiplicator = Math.floor(Math.random() * 5) + 1;
  multiplicator = multiplicator === 1 ? 2 : multiplicator;
  var complete = true;

  do {
    selected = {
      imIn: [],
      imMa: [],
      inFi: [],
      Ex: [],
      Re: [],
      Di: [],
      PN: [],
      PNC: [],
      PC: [],
    };
    selectValues(complete);
  } while (selected["imIn"].length === 0 && selected["imMa"].length === 0);

  var enun = document.querySelector(".enun");
  var divs = [];

  for (const [key, value] of Object.entries(selected)) {
    console.log(`.${key}`);
    document.querySelector(`.${key}`).innerHTML = "";
    var money = 1;
    selected[key].map((val) => {
      money = (Math.floor(Math.random() * 9) + 1) * 10 ** multiplicator;
      document.querySelector(
        `.${key}`
      ).innerHTML += `<div class="item"><p>${val}</p><p class="money">${addPoints(
        money
      )}€</p></div>
        `;

      divs.push(`<div class="item item-enun"><p>${val}</p><p class="money2">${addPoints(
        money
      )}€</p></div>
            `);
    });
    if (key === "PN") {
      money = 0;
      document.querySelector(
        `.${key}`
      ).innerHTML += `<div class="item"><p><b>Resultat de l'exercici</b></p><p class="money result">${money}€</p></div>
        `;
    }
  }

  compt.reverse().map((element, i) => {
    var money = 1;

    if (i == 0) {
      money = `${random(12, 52)}%`;
    } else {
      money = `${(Math.floor(Math.random() * 9) + 1) * 10 ** multiplicator}€`;
    }
    var className = "";
    className += element.split(" ").map((e) => {
      if (e[0] == ">" || e[0] == "<") return;
      return e[0];
    });
    divs.push(
      `<div class="item item-enun compte ${className.replaceAll(
        ",",
        ""
      )}"><p>${element}</p><p class="money2">${money}</p>`
    );
  });

  divs
    .sort(() => (Math.random() > 0.5 ? 1 : -1))
    .map((element) => {
      enun.innerHTML += element;
    });
  var BN = addPoints(
    calcSum("ANC") +
      calcSum("AC") -
      (calcSum("PN") + calcSum("PNC") + calcSum("PC"))
  );
  document.querySelector(".result").innerHTML = `${BN}€`;
  calcSum("PN");

  document.querySelectorAll(".total").forEach((v) => {
    v.innerHTML = `TOTAL: ${addPoints(calcSum("ANC") + calcSum("AC"))}€`;
  });

  //COMPTE
  document.querySelector("#ben-n").innerHTML = `${BN}€`;

  //bai
  if (parseInt(BN.replaceAll(".", "")) > 0) {
    var BAI =
      parseInt(BN.replaceAll(".", "")) +
      (parseInt(BN.replaceAll(".", "")) *
        parseInt(
          document.querySelector(".Isb .money2").innerHTML.replace("%", "")
        )) /
        100;
    document.querySelector("#bai-n").innerHTML = `${addPoints(BAI)}€`;
    document.querySelector("#bai").innerHTML = `<li>Impost sobre benefici: ${
      document.querySelector(".Isb .money2").innerHTML
    } &rarr; <span style="color: red">${addPoints(
      parseInt(
        (BN.replaceAll(".", "") *
          parseInt(
            document.querySelector(".Isb .money2").innerHTML.replace("%", "")
          )) /
          100
      )
    )}€</span></li>`;
  } else {
    console.log(BN);
    var BAI = parseInt(BN.replaceAll(".", ""));
    document.querySelector("#bai-n").innerHTML = `${addPoints(BAI)}€`;

    document.querySelector("#bai").innerHTML = `<li>Impost sobre benefici: ${
      document.querySelector(".Isb .money2").innerHTML
    } &rarr; <span style="color: red">0€</span></li>`;
  }

  //RF
  var RF = parseInt((Math.random() / 4) * BAI);
  if (random(0, 1)) {
    RF *= -1;
    var desp = Math.abs((RF * random(5, 10)) / 2);
    document.querySelector("#res-ex").innerHTML = `
    <li>Ingressos Financers: ${addPoints(desp - Math.abs(RF))}€</li>
    <li>Despeses Financeres: <span class="desp">${addPoints(desp)}</span>€</li>
    `;
    document.querySelector(".If .money2").innerHTML = `${addPoints(
      desp - Math.abs(RF)
    )}€`;
    document.querySelector(".Df .money2").innerHTML = `${addPoints(desp)}€`;
  } else {
    var ing = Math.abs((RF * random(5, 10)) / 2);
    document.querySelector("#res-ex").innerHTML = `
    <li>Ingressos Financers: ${addPoints(ing)}€</li>
    <li>Despeses Financeres: <span class="desp">${addPoints(ing - Math.abs(RF))}</span>€</li>
    `;
  }
  document.querySelector("#res-fin-n").innerHTML = `${addPoints(RF)}€`;

  //BAII
  var BAII = BAI - RF;
  document.querySelector("#res-ex-n").innerHTML = `${addPoints(BAII)}€`;

  //ING EXP
  if (BAII < 0) {
    var DESP = (Math.abs(BAII) * random(1, 5)) / 10;
    document.querySelector("#ie-n").innerHTML = `${addPoints(DESP)}€`;
    document.querySelector("#de-n").innerHTML = `${addPoints(
      Math.abs(BAII) + DESP
    )}€`;
  } else {
    var DESP = (Math.abs(BAII) * random(6, 9)) / 10;
    document.querySelector("#ie-n").innerHTML = `${addPoints(DESP + BAII)}€`;
    document.querySelector("#de-n").innerHTML = `${addPoints(DESP)}€`;
  }

  //RATIOS
  console.log(document.querySelectorAll(".Di .money"));
  var Di = 0;
  document
    .querySelectorAll(".Di .money")
    .forEach((e) => (Di += parseInt(e.innerHTML.replaceAll(".", ""))));
  var D = (Di / calcSum("PC")).toFixed(2);
  document.querySelector(
    ".disponibilitat"
  ).innerHTML = `$$ {D=\\frac{Disponible}{Passiu Corrent}= \\frac{${addPoints(
    Di
  )}}{${addPoints(calcSum("PC"))}} = ${D}}$$`;
  console.log(D);
  if (parseInt(D) <= 0.3)
    document.querySelector(
      ".disponibilitat-2"
    ).innerHTML = `Probemes de solvència a curt termini, ja que <b>${D}</b> No es troba en el ratio <b>[0.3 - 0.4]</b>`;
  else if (parseInt(D) > 0.3 && parseInt(D) <= 0.4)
    document.querySelector(
      ".disponibilitat-2"
    ).innerHTML = `NO té problmes de solvència a curt termini, ja que <b>${D}</b> es troba en el ratio <b>[0.3 - 0.4]</b>`;
  else
    document.querySelector(
      ".disponibilitat-2"
    ).innerHTML = `Probemes de rendibilitat, ja que <b>${D}</b> és superior al ratio <b>[0.3 - 0.4]</b>`;

  //tresoreria

  var Re = 0;
  document
    .querySelectorAll(".Re .money")
    .forEach((e) => (Re += parseInt(e.innerHTML.replaceAll(".", ""))));
  var Tr = ((Re + Di) / calcSum("PC")).toFixed(2);
  document.querySelector(
    ".tresoreria"
  ).innerHTML = `$$ {T=\\frac{Disponible + Realitzable}{Passiu Corrent}= \\frac{${addPoints(
    Di
  )}+${addPoints(Re)}}{${addPoints(calcSum("PC"))}} = ${Tr}}$$`;
  console.log(Tr);
  if (parseFloat(Tr) <= 0.8)
    document.querySelector(
      ".tresoreria-2"
    ).innerHTML = `Probemes de solvència a curt termini, ja que <b>${Tr}</b> No es troba en el ratio <b>[0.8 - 1.2]</b>`;
  else if (parseFloat(Tr) > 0.8 && parseFloat(Tr) <= 1.2)
    document.querySelector(
      ".tresoreria-2"
    ).innerHTML = `NO té problmes de solvència a curt termini, ja que <b>${Tr}</b> es troba en el ratio <b>[0.8 - 1.2]</b>`;
  else
    document.querySelector(
      ".tresoreria-2"
    ).innerHTML = `Probemes de rendibilitat, ja que <b>${Tr}</b> és superior al ratio <b>[0.8 - 1.2]</b>`;

  //liquiditat

  var L = 0;
  document
    .querySelectorAll(".L .money")
    .forEach((e) => (L += parseInt(e.innerHTML.replaceAll(".", ""))));
  var Li = (calcSum("AC") / calcSum("PC")).toFixed(2);
  document.querySelector(
    ".liquiditat"
  ).innerHTML = `$$ {L=\\frac{Actiu Corrent}{Passiu Corrent}= \\frac{${addPoints(
    Di
  )}+${addPoints(L)}}{${addPoints(calcSum("PC"))}} = ${Li} } $$`;
  console.log(Li);
  if (parseFloat(Li) <= 1.5)
    document.querySelector(
      ".liquiditat-2"
    ).innerHTML = `Probemes de solvència a curt termini, ja que <b>${Li}</b> No es troba en el ratio <b>[1.5 - 2]</b>`;
  else if (parseFloat(Li) > 1.5 && parseFloat(Li) <= 2)
    document.querySelector(
      ".liquiditat-2"
    ).innerHTML = `NO té problmes de solvència a curt termini, ja que <b>${Li}</b> es troba en el ratio <b>[1.5 - 2]</b>`;
  else
    document.querySelector(
      ".liquiditat-2"
    ).innerHTML = `Probemes de rendibilitat, ja que <b>${Li}</b> és superior al ratio <b>[1.5 - 2]</b>`;

  //Solvència

  var So = (
    (calcSum("ANC") + calcSum("AC")) /
    (calcSum("PNC") + calcSum("PC"))
  ).toFixed(2);
  document.querySelector(
    ".solvencia"
  ).innerHTML = `$$ {S=\\frac{Actiu\\;(Corrent + No \\; Corrent)}{Passiu\\;(Corrent + No \\; Corrent)}= \\frac{${addPoints(
    calcSum("ANC")
  )}+${addPoints(calcSum("AC"))}}{${addPoints(calcSum("PC"))}+${addPoints(
    calcSum("PNC")
  )}} = ${So} } $$`;
  console.log(So);
  if (parseFloat(So) <= 1)
    document.querySelector(
      ".solvencia-2"
    ).innerHTML = `Probemes de solvència a curt termini, ja que <b>${So}</b> No es troba en el ratio <b>[1.5 - 2]</b>`;
  else if (parseFloat(So) > 1 && parseFloat(So) <= 2)
    document.querySelector(
      ".solvencia-2"
    ).innerHTML = `NO té problmes de solvència a curt termini, ja que <b>${So}</b> es troba en el ratio <b>[1.5 - 2]</b>`;
  else
    document.querySelector(
      ".solvencia-2"
    ).innerHTML = `Probemes de rendibilitat, ja que <b>${So}</b> és superior al ratio <b>[1.5 - 2]</b>`;

  //Endeutament

  var En = (calcSum("PC") / (calcSum("PNC") + calcSum("PC"))).toFixed(2);
  document.querySelector(
    ".endeutament"
  ).innerHTML = `$$ { En=\\frac{Passiu \\; Corrent}{Passiu}= \\frac{${addPoints(
    calcSum("PC")
  )}}{${addPoints(calcSum("PC"))}+${addPoints(calcSum("PNC"))}} = ${En} } $$`;
  console.log(En);
  if (parseFloat(En) <= 0.5)
    document.querySelector(
      ".endeutament-2"
    ).innerHTML = `<span style="color: green;">Endeutament correcte</span>, ja que la proporció del Passiu Corrent respecte a tot el passiu és <b>${En}</b>, per tant, inferior a <b>0.5</b>`;
  else
    document.querySelector(
      ".endeutament-2"
    ).innerHTML = `Massa endeutament a llarg Termini(No Corrent), ja que la proporció del Passiu Corrent respecte a tot el passiu és <b>${En}</b>, per tant, superior a <b>0.5</b>`;

  //RE

  var RenEc = (BAII / (calcSum("AC") + calcSum("ANC"))).toFixed(2);
  document.querySelector(
    ".Rendibilitat-economica"
  ).innerHTML = `$$ { Re = \\frac{BAII}{Actiu} = \\frac{${addPoints(
    BAII
  )}}{${addPoints(calcSum("AC"))} + ${addPoints(
    calcSum("ANC")
  )}} = ${RenEc} } $$`;
  console.log(RenEc);
  document.querySelector(
    ".Rendibilitat-economica-2"
  ).innerHTML = `La Rendibilitat Econòmica de l'empresa és <b>${parseInt(
    RenEc * 100
  )}%</b>`;

  //RF
  var RenFi = (parseInt(BN.replaceAll(".", "")) / calcSum("PN")).toFixed(2);
  document.querySelector(
    ".Rendibilitat-Financera"
  ).innerHTML = `$$ { RF = \\frac{Benefici \\; Net}{Patrimoni \\; Net} = \\frac{${addPoints(
    BN
  )}}{${addPoints(calcSum("PN"))} } = ${RenFi} } $$`;
  console.log(RenFi);
  document.querySelector(
    ".Rendibilitat-Financera-2"
  ).innerHTML = `La Rendibilitat Financera de l'empresa és <b>${parseInt(
    RenFi * 100
  )}%</b>`;

  //costFinAlie
  var CoFiAlie = (parseInt(document.querySelector(".desp").innerHTML.replaceAll(".","")) / (calcSum("PC") + calcSum("PNC"))).toFixed(2);
  console.log(CoFiAlie);
  document.querySelector(
    ".costFinAlie"
  ).innerHTML = `$$ { RF = \\frac{Despeses \\; Financeres}{Passiu} = \\frac{${addPoints(
    parseInt(document.querySelector(".desp").innerHTML.replaceAll(".",""))
  )}}{${addPoints(calcSum("PC"))} + ${addPoints(
    calcSum("PNC")
  )}} = ${CoFiAlie} } $$`;
  if (RenEc >= CoFiAlie)
    document.querySelector(
      ".costFinAlie-2"
    ).innerHTML = `<span style="color: green;"><b>Val la pena endeutar-se</b></span>, ja que la Rendibilitat econòmica(<b>${RenEc}</b>) és més gran que el Cost de Finançament alié(<b>${CoFiAlie}</b>), per tant, l'efecte de palanquejament és <span style="color: green;"><b>POSITIU</b></span>`;
  else
    document.querySelector(
      ".costFinAlie-2"
    ).innerHTML = `<span style="color: red;"><b>No val la pena endeutar-se</b></span>, ja que la Rendibilitat econòmica(<b>${RenEc}</b>) és més petita que el Cost de Finançament alié(<b>${CoFiAlie}</b>), per tant, l'efecte de palanquejament és <span style="color: red;"><b>NEGATIU</b></span>`;
}

function calcSum(key) {
  var s = document.querySelector(`.span-${key}`);
  var result = 0;

  var checkArray;
  if (key === "ANC") checkArray = actiunoCorrent;
  else if (key === "AC") checkArray = actiuCorrent;
  else checkArray = [key];

  checkArray.forEach((val) => {
    var firstresult = 0;
    document.querySelectorAll(`.${val} .money`).forEach((element) => {
      var price = element.innerHTML;
      // console.log(price);
      price = price.replaceAll(".", "");
      price = price.replaceAll("{", "");
      firstresult += parseInt(price);
      result += parseInt(price);
    });
    document.querySelectorAll(`h4`).forEach((h4) => {
      var title = h4.innerHTML;

      if (val === "imIn" || val === "imMa" || val === "inFi") {
        if (
          h4.innerHTML
            .toLocaleLowerCase()
            .includes(val.substring(2, 4).toLowerCase()) &&
          h4.innerHTML
            .toLocaleLowerCase()
            .includes(val.substring(0, 2).toLowerCase()) &&
          !h4.innerHTML.includes("€")
        ) {
          console.log(`val: ${val}; `);
          h4.innerHTML = `${title} (${addPoints(firstresult)}€)`;
        }
      } else if (
        h4.innerHTML
          .toLocaleLowerCase()
          .includes(val.substring(0, 2).toLowerCase()) &&
        !h4.innerHTML.includes("€")
      ) {
        h4.innerHTML = `${title} (${addPoints(firstresult)}€)`;
      }
    });
  });
  s.innerHTML = `(${addPoints(result)}€)`;

  return result;
}

var showSol = false;
function toggleSol() {
  showSol = !showSol;
  if (showSol) {
    document.querySelector(".showsol").innerHTML = "Amagar Solució";
    document.querySelector(".sol").style.display = "flex";
    document.querySelector(".sol2").style.display = "flex";
    document.querySelector(".sol3").style.display = "flex";
    document.querySelector(".sol").scrollIntoView();
  } else {
    document.querySelector(".showsol").innerHTML = "Mostrar Solució";
    document.querySelector(".sol").style.display = "none";
    document.querySelector(".sol2").style.display = "none";
    document.querySelector(".sol3").style.display = "none";
  }
}

function addPoints(number) {
  if(number == undefined) return number
  return number.toLocaleString("de-DE");
}
function random(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}
function generate() {
  var a = confirm("Generar nou balanç?");
  if (a) main();
}
