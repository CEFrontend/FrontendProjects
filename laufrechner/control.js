class control{

constructor(){
    this.inputField= new input();
    this.outputField= new output();
    this.calculator= new calc();
}

minKmh(){
let time= this.inputField.getTime();

this.outputField.print(this.calculator.getMinProKm(time));

}

kmh(){
    let time= this.inputField.getTime();
    this.outputField.kmh(this.calculator.getkmH(time));
}



}