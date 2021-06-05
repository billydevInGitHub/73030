function foo(){
    setTimeout(()=>{
        console.log("id:"+this.id);
    })
}

foo.call({id: 42});

new foo();  //this line added by myself

