class output{
    constructor(){
        
    }

    printList(arr){
        
        this.ausgabe= document.getElementById("ausgabeListe");
        
        for(let i=0; i< arr.length; i++){

        let n= document.createElement("li")
        let newList= document.createTextNode(arr[i])
        n.appendChild(newList);
        ausgabe.appendChild(n);

        }
    }


    clear(){
         this.ausgabe= document.getElementById("ausgabeListe");
         ausgabe.innerHTML="";
    }
}