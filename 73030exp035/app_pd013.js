class Chameleon{
    static colorChangeStatic(newColor) {
        console.log("output from static");
    }
    constructor({newColor="green"}={}) {
        this.newColor=newColor;
    }

}
Chameleon.prototype.colorChange=function(newColor){
         this.newColor=newColor;
     }
const freddie=new Chameleon({ newColor:"purple"});
freddie.colorChange("orange");
Chameleon.colorChangeStatic("staticColor1");

console.log(freddie.newColor);

class Billy extends  Chameleon{

};
const billy= new Billy();
billy.colorChange("green");
Billy.colorChangeStatic("staticColor2");
console.log(billy.newColor);
