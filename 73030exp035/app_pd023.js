function checkAge(data) {
    if(data==={age:18}){
        console.log("you are adult");
    }else if ( data =={age: 18}){
        console.log("you are still adult");
    }else {
        console.log("you do not have an age!")
    }
}

checkAge({age: 18});

const hero1 = {
    name: 'Batman'
};
const hero2 = {
    name: 'Batman'
};

console.log(hero1 == hero2);