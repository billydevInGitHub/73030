
const parts = ['shoulders', 'knees']; 
const lyrics = ['head', ...parts, 'and', 'toes']; 

console.log(lyrics);




//array copy
const arr = [1, 2, 3];
const arr2 = [...arr]; // like arr.slice()

arr2.push(4);

console.log(arr2);