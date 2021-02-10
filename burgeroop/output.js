class output{

    contructor(){
        this.ausgabe = document.getElementById("ausgabe");
    }

    newListItem(item, preis){
       
    let n= document.createElement("li");
    let newList= document.createTextNode(`1 ${item}   Preis: ${preis}€`)
    n.appendChild(newList);
   ausgabe.appendChild(n);

  }  

  final(total, rabat){

    //Ausgabe von Summe und Rabatt
    let br= document.createElement("br")
    ausgabe.appendChild(br);
    let n= document.createElement("li")
    let newList= document.createTextNode(`Summe: ${total.toFixed(2)}€, ihr Rabatt beträgt ${rabat.toFixed(2)}€`)
    n.appendChild(newList);
    ausgabe.appendChild(n);

}

resetField(){
    ausgabe.innerHTML="";
    
}


}