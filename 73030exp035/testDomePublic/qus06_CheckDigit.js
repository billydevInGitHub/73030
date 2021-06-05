//https://www.testdome.com/d/javascript-interview-questions/2


function createCheckDigit(membershipId) {
    // Write the code that goes here.
    var res = membershipId.split("");
    console.log("res"+res)
  let result= res.reduce((s,c)=>{
        console.log(c);
      return parseInt(c,10)+parseInt(s);
    })
    console.log("result is:" +result);
    if(result>10){
        console.log("result is less  than 14" );
        return createCheckDigit(result.toString());
    }else{
        return result;
    }
}

console.log(createCheckDigit("werwer"));