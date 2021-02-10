class input{

constructor(){
this.burgerCount=0;
this.drinkCount=0;
this.pommesCount=0;
this.salatCount=0;
this.total=0;
this.rabat;

};

getBurger(){
    this.burgerCount++;
    this.total +=5;
}

getDrink(){
    this.drinkCount++;
   this.total +=3;
}

getPommes(){
    this.pommesCount++;
    this.salatCount++;
    this.total +=3.5;
}

getSalat(){
    this.salatCount++;
    this.pommesCount++;
    this.total +=2;
}

getBurgerCount(){
    return this.burgerCount;
}

getTotal(){
    return this.total- this.getRabatt();
}

getRabatt(){
    if(this.total>10){
        return this.total*0.15;
    } else return 0;
}

reset(){
    this.total=0;
    
}









}