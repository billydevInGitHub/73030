// https://thecodebarbarian.com/for-vs-for-each-vs-for-in-vs-for-of-in-javascript

//array
const arr = ['a', 'b', 'c'];

console.log("iterate array using in ")
//in will give key
for (const e in arr) {
    console.log(e);
}


console.log("\niterate array using forEach");
//forEach is just plain
arr.forEach((e) => console.log(e));

console.log("\niterate array using for of");
//for of will give value
for (const el of arr) {
    console.log(el);
}


//json
const json=[{"name":"nn1"}, {"name":"nn2"}, {"name":"nn3"}];
console.log("\niterate json array using for in");
//in will gives the key, el.name not working
for (const el in json) {
    console.log(el);
}

console.log("\niterate json array using forEach");
//forEach just normal
json.forEach((jsn) => console.log(jsn.name));

console.log("\niterate json array using for of");

//give element
for (const el of json) {
    console.log(el);
}

