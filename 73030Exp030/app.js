//part 1: in function call 
function myFunction(x, y, z) {
    console.log(x,y,z)
 }
const args = [0, 1, 2];
myFunction.apply(null, args);


myFunction.apply(null,args);


myFunction(...args);  //use ... to covert to real aguments

myFunction('a','b','c');


//part2 : with new operator
const dateFields = [1970, 0, 1];  // 1 Jan 1970
const d = new Date(...dateFields);

console.log(d)

