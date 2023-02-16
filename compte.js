function generate(){
    var div = document.querySelector(".enun");
    div.innerHTML=""
    var r = random(100, 1000000)*10
    var compte = [
        ["Vendes netes", r],
        ["Variació d'existències de productes acabats", random(0, 10000)],
        ["Variació d'existències de productes en curs", random(0, 10000)],
        ["Ingressos per arrendaments", random(400, 10000)],
        ["Ingressos extraordinaris", random(0, 1000)],
        ["Compres Netes", random(0, r/5)],
        ["Sous i Salaris", random(200, r/3)],
        ["Organització de la Seguretat Social a càrreg de l'empresa", random(200, r/15)],
        ["Amortització o dotació de l'immobilitzat", random(0, 10000)],
        [
            ["Despeses extraordinàries", random(0, r/20)],
            ["Subministraments", random(0, r/20)],
            ["Preparacions i Conservació", random(0, r/20)],
            ["Serveis Professionals independents", random(0, r/20)],
            ["Publicitat i relacions públiques", random(0, r/20)],
            ["Transports", random(0, r/20)],
            ["Arrendaments i cànons", random(0, r/20)],
            ["Serveis Bancaris", random(0, r/20)],        
        ],
        ["Ingressos financers", random(0, 1000)],
        ["Despeses financeres", random(0, 1000)],
        ["Impost sobre benefici", random(0, 52)]
    ];
    div.innerHTML = ``;
    div.innerHTML += `
        <ul>
        ${compte[0][0]} : ${compte[0][1]}
    `;
}


function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }