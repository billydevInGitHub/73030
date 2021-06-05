//https://stackoverflow.com/questions/5515310/is-there-a-standard-function-to-check-for-null-undefined-or-blank-variables-in
function ensure(value) {
    // Your code goes here
    if(value==null){
        throw "error"
    }else{
        return value;
    }
}

try {
    console.log(ensure());
} catch(err) {
    console.log(err);
}