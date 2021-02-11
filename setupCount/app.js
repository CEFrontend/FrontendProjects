let content= document.getElementById("value")
let counter=0


function plus(){
 counter++
 content.innerText=counter;
}

function minus(){
 counter--
 content.innerText=counter;
}

function reset(){
 counter=0
 content.innerText=counter;
}