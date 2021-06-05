function sayHi(){
    //name="billy"   <--this help as it is var
    console.log(name);
    //age=21;        <---this is not working as it is let
    console.log(age);
    var name = "alice";
    // refer to: https://www.w3schools.com/js/js_hoisting.asp
    /*
     Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

     This is because only the declaration (var y), not the initialization (=7) is hoisted to the top.

     Because of hoisting, y has been declared before it is used, but because initializations are not hoisted, the value of y is undefined.

     pd6 example also good
     */
    let age=20;
}
sayHi();