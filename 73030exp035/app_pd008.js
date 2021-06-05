const shape={
    radius:10,
    diameter(){
        return this.radius*2;
    },
    perimeter:()=>{
        return this.radius*2*3.14;

    }
}
console.log(shape.diameter());
console.log(shape.perimeter());