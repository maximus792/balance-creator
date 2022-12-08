var today = new Date();
document.querySelector(".copy").innerHTML += today.getFullYear();

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
    document.querySelector(".enun").innerHTML=""
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

      enun.innerHTML += `<div class="item item-enun"><p>${val}</p><p class="money2">${addPoints(
        money
      )}€</p></div>
            `;
    });
    if (key === "PN") {
      money = 0;
      document.querySelector(
        `.${key}`
      ).innerHTML += `<div class="item"><p>Resultat de l'exercici</p><p class="money result">${money}€</p></div>
        `;
    }
  }

  document.querySelector(".result").innerHTML = `${addPoints(
    calcSum("ANC") +
      calcSum("AC") -
      (calcSum("PN") + calcSum("PNC") + calcSum("PC"))
  )}`;
  calcSum("PN");

  document.querySelectorAll(".total").forEach((v) => {
    v.innerHTML = `TOTAL: ${addPoints(calcSum("ANC") + calcSum("AC"))}€`;
  });
}

function calcSum(key) {
  var s = document.querySelector(`.span-${key}`);
  var result = 0;

  var checkArray;
  if (key === "ANC") checkArray = actiunoCorrent;
  else if (key === "AC") checkArray = actiuCorrent;
  else checkArray = [key];

  checkArray.forEach((val) => {
    document.querySelectorAll(`.${val} .money`).forEach((element) => {
      var price = element.innerHTML;
      console.log(price);
      price = price.replaceAll(".", "");
      price = price.replaceAll("{", "");
      result += parseInt(price);
    });
  });
  s.innerHTML = `(${addPoints(result)}€)`;

  return result;
}

function addPoints(number) {
  return number.toLocaleString("de-DE");
}

var showSol = false;
function toggleSol() {
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

function generate(){
    var a = confirm("Generar nou balanç?")
    if(a) main()
}