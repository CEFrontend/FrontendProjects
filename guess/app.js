'use strict';

let currentNumber;

document.addEventListener("DOMContentLoaded", () => currentNumber = Math.floor(Math.random() * 20) + 1 )

function newRandom (){

    currentNumber = Math.floor(Math.random() * 20) + 1  ;
    document.body.style.backgroundColor = "#222";
    document.querySelector(".message").textContent="Start guessing..."
        document.querySelector(".number").textContent= "?"

    console.log(currentNumber)
}

function checkNumber(){
    let a = document.querySelector(".guess").value
    
    if(a == currentNumber){
        document.body.style.backgroundColor = "#60b347"
        document.querySelector(".message").innerHTML="<h1>Correct!</h1>"
        document.querySelector(".number").textContent= currentNumber
    } else{
        if(a> currentNumber){
document.querySelector(".message").textContent="Lower!"
    } else {
document.querySelector(".message").textContent="Higher!"
    }
    }

}