
    let num= prompt("Enter The Number To Check The Prime Factors :")
    document.getElementById("msg-input").innerHTML=num
    let firstPrime=2;
    let result = [];
    if(num==1){
        document.getElementById("msg-output").innerHTML=num+" is neither prime nor composite number."
    }else if(num>1){
        while(num>1){
            if(num%firstPrime===0){
                result.push(firstPrime);
                num/=firstPrime;
            }else{
                firstPrime++;
            }
        }
        document.getElementById("msg-output").innerHTML=result;
    }else{
        document.getElementById("msg-output").innerHTML="Please enter the number which should be an positive integer."
    }
    