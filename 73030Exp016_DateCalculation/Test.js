let date= new Date();
console.log(date);
console.log(date.toISOString());

let newMsec=Date.parse(date.toISOString())+3600*1000;
let newDate=new Date(newMsec); 

console.log(newDate); 