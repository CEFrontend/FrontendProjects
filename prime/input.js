class input{
    constructor(){
        this.primeArr=[];
    }

    getLimit(){


        function checkPrime(j) {
            if (j<2) return false;
            for (let i = 2; i < j; i++) 
                 if (j % i == 0) return false
                 return true;
        }

        this.primeArr=[];
        let limit= document.getElementById("limit").value;
        
            for(let i=1; i<= limit; i++){
                if(checkPrime(i)){
                    this.primeArr.push(i);
                } 
            }

            return this.primeArr;
    }

  



}