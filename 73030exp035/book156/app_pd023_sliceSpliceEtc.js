//https://www.freecodecamp.org/news/lets-clear-up-the-confusion-around-the-slice-splice-split-methods-in-javascript-8ba3266c29ae/

/**
 * slice
 * @type {*[]}
 */
let arrayDefinition = [];   // Array declaration in JS

let array = [1, 2, 3, "hello world", 4.12, true];

//array.slice(from, until);  <--seems slice like substring
let newArray = array.slice(0, 5);
console.log(newArray);



/**
Splice
 */
//Removing Elements
//array.splice(index, number of elements);  <--if number of element not exist, removing to the end
array.splice(2);
console.log(array);

//array.splice(2, 1);  <---begin from third position and remove the element one by one
array=[1, 2, 3, "hello world", 4.12, true];
array.splice(2, 1);
console.log(array);


//Adding elements
//array.splice(index, number of elements, element, element);  <-- second param: number of elements should be the one to remove
array=[1, 2, 3, "hello world", 4.12, true];
array.splice(0,1,"new", "new");  //the second param is always delete count
console.log(array);


/**
 * split
 */
myString=" 1, 2, 3, hello world, 4.12, true";
let newArr=myString.split(",",4);
console.log(newArr);