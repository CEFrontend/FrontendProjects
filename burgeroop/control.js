class control{


    constructor(){
       this.inputField= new input();
       this.outputField= new output();
this.ausgabe = document.getElementById("ausgabe");
    }


    addBurger(){

     this.inputField.getBurger();
     this.outputField.newListItem("burger", "5.00")
       console.log(this.inputField.getTotal())
    }

    addDrink(){

     this.inputField.getDrink();
     this.outputField.newListItem("Getränk", "3.00")
       
    }

    addPommes(){
        if(this.inputField.pommesCount== 0){
     this.inputField.getPommes();
     this.outputField.newListItem("Pommes", "3.50")}
       
    }

    addSalat(){
        if(this.inputField.salatCount== 0){
     this.inputField.getSalat();
     this.outputField.newListItem("Salat", "2.00")}
       
    }
    
    final(){
        this.outputField.final(this.inputField.getTotal(), this.inputField.getRabatt());
    }

    reset(){
        this.outputField.resetField();
        this.inputField.reset();
    }


    

}