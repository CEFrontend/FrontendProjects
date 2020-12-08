let kontakt= document.getElementById("nav1");
let ausbildung= document.getElementById("nav2");
let erfahrung= document.getElementById("nav3");
let soft= document.getElementById("nav4");

kontakt.addEventListener("mouseover", add );
ausbildung.addEventListener("mouseover", add );
erfahrung.addEventListener("mouseover", add );
soft.addEventListener("mouseover", add );

kontakt.addEventListener("mouseout", rem );
ausbildung.addEventListener("mouseout", rem );
erfahrung.addEventListener("mouseout", rem );
soft.addEventListener("mouseout", rem );

function add(e){
/*
if(e.target.classList.contains("invis") === false){
    e.target.classList.add("invis")
}*/

    switch (e.target.id){
        case "nav1":
            document.getElementById("kontakt").classList.add("invis");
            break;
        case "nav2":
            document.getElementById("ausbildung").classList.add("invis");
            break;
        case "nav3":
            document.getElementById("erfahrung").classList.add("invis");
            break;
        case "nav4":
            document.getElementById("soft").classList.add("invis");
            break;
    }   
}

function rem(e){

   /*
    if(e.target.classList.contains("invis")){
        e.target.classList.remove("invis")
    }*/

    switch (e.target.id){
        case "nav1":
            document.getElementById("kontakt").classList.remove("invis");
            break;
        case "nav2":
            document.getElementById("ausbildung").classList.remove("invis");
            break;
        case "nav3":
            document.getElementById("erfahrung").classList.remove("invis");
            break;
        case "nav4":
            document.getElementById("soft").classList.remove("invis");
            break;
    } 
}
