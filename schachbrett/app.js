let btn1= document.getElementById("btn1");
let resetBtn = document.getElementById("reset")
let brett = document.getElementById("brett")
let schachbrett= document.getElementById("schachbrett");
let counter=1;

btn1.addEventListener("click", createField);
reset.addEventListener("click", resetSchachbrett);
brett.addEventListener("click", createSchachbrett);

function createField(){
   let newField=  document.createElement("div");
    newField.classList.add("box");
    switch (counter){
        case 1:
        case 3:
        case 5:
        case 7:
        case 10:
        case 12:
        case 14:
        case 16:
        case 17:
        case 19:
        case 21:
        case 23:
        case 26:
        case 28:
        case 30:
        case 32:
        case 33:
        case 35:
        case 37:
        case 39:
        case 42:
        case 44:
        case 46:
        case 48:
        case 49:
        case 51:
        case 53:
        case 55:
        case 58:
        case 60:
        case 62:
        case 64:
            newField.classList.add("white");
            break; 
        
        case 2:
        case 4:
        case 6:
        case 8:
        case 9:
        case 11:
        case 13:
        case 15:
        case 18:
        case 20:
        case 22:
        case 24:
        case 25:
        case 27:
        case 29:
        case 31:
        case 34:
        case 36:
        case 38:
        case 40:
        case 41:
        case 43:
        case 45:
        case 47:
        case 50:
        case 52:
        case 54:
        case 56:
        case 57:
        case 59:
        case 61:
        case 63:
            newField.classList.add("black");
            break; 
    };

    schachbrett.appendChild(newField);
    counter++;
    if(counter > 64) {btn1.disabled= true};
}

function createSchachbrett(){
    if(counter == 1){
         for(let i =1; i<= 64; i++){
         createField();
         }
    }
}

function resetSchachbrett(){
    counter = 1;
    btn1.disabled= false;
    schachbrett.innerHTML=" ";
}