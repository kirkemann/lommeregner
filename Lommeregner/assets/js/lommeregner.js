/* ----------------------------
/*  Name: Lommeregner
    Author: Frank Kirkemann
    Version: 2.0
/* -------------------------- */

const knapper = document.querySelectorAll('#lommeregner button'); //alle buttons
let beregning = document.querySelector('#display'); // #display
let resultat =  document.querySelector('#resultat'); // #resultat

// tilføj click-eventlistener til alle buttons
// loop eventlistener på alle button

//k = den knap som som loopen er nået til
for(let k of knapper) {

    k.addEventListener("click", udskrivInput);

}

//function som griber et klik på en knap - og modtager oplysninger om hvilken knap (e)
function udskrivInput(e) {
    
    // beregning.innerText += e.target.value;

    // if(e.target.value == "plus") {
    //     beregning.innerText += "+";    }


    //Hvis e.target.value ikke er et ikke tal (svare til ikke er en string)
    if(!isNaN(e.target.value)) {
        beregning.innerText += e.target.value;
    }
    else if(e.target.value == "plus") {
        beregning.innerText += "+";
    }
    else if(e.target.value == "minus") {
        beregning.innerText += "-";
    }
    else if(e.target.value == "gange") {
        beregning.innerText += "*";
    }
    else if(e.target.value == "divider") {
        beregning.innerText += "/";
    }
    else if(e.target.value == "ligmed") {
        beregnTal();
    }
    else if(e.target.value == "nulstil") {
        resultat.innerText = "";
        beregning.innerText = "";
    } else {
        console.log("Noget gik galt");
        
    }
    
}

function beregnTal() {

    resultat.innerText = eval(beregning.innerText);
}

