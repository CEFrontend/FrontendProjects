//buttons
let burger = document.getElementById("burger");
let pommes = document.getElementById("pommes");
let salat = document.getElementById("salat");
let getrank = document.getElementById("getrank");
let rechnung = document.getElementById("rechnung")
let reset= document.getElementById("reset")

//Liste für die Rechnung
let ausgabe = document.getElementById("ausgabe")

//Mitzählen wieviele Produkte bestellt wurden
let countBurger=0;
let countGetrank =0;
let hatSalat=false;
let hatPommes=false;
let total=0;
let rabat=0;

rechnung.addEventListener("click", final);
burger.addEventListener("click", addBurger)
getrank.addEventListener("click", addGetrank);
salat.addEventListener("click", addSalat);
pommes.addEventListener("click", addPommes);
reset.addEventListener("click", resetList);

function addBurger(){
    countBurger+=1
    newListItem("Burger", "5.00")
}

function addGetrank(){
     countGetrank+=1
     newListItem("Getränk", "3.00")
}

function addSalat(){
    hatSalat=true;
    salat.disabled=true;
    pommes.disabled=true;
    newListItem("Salat", "2.00")
}

function addPommes(){
    hatPommes=true;
    salat.disabled=true;
    pommes.disabled=true;
    newListItem("Pommes", "3.50")
}

function newListItem(item, preis){
    let n= document.createElement("li")
    let newList= document.createTextNode(`1 ${item}   Preis: ${preis}€`)
    n.appendChild(newList);
    ausgabe.appendChild(n);
  }  

  

//Diese Funktion wird gerufen wenn der "Zahlen bitte" button geklickt wird
function final(){
    new Audio("audio/cash.mp3").play();


    //berechnung von der Summe
    total = countGetrank*3 + countBurger*5;
    if(hatSalat) total+=2;
    if(hatPommes) total+=3.5;
    if(total> 10){
        rabat = total*0.15;
        total *= 0.85;
    }


    //Ausgabe von Summe und Rabatt
    let br= document.createElement("br")
    ausgabe.appendChild(br);
    let n= document.createElement("li")
    let newList= document.createTextNode(`Summe: ${total.toFixed(2)}€, ihr Rabatt beträgt ${rabat.toFixed(2)}€`)
    n.appendChild(newList);
    ausgabe.appendChild(n);

}


//alles wieder auf null setzen und die Pommes und Salat buttons wieder freischalten
function resetList(){
    
  ausgabe.innerHTML="";
  countBurger=0;
  countGetrank =0;
  hatSalat=false;
  hatPommes=false;
  total=0;
  rabat=0;
  pommes.disabled=false;
  salat.disabled=false;

}






