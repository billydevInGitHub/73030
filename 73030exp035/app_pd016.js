function Person(firstName, lastName) {
    this.firstName=firstName;
    this.lastName=lastName;
}

const member = new Person("Billy", "Helena");
 // Person.getFullName=()=>this.firstName+this.lastName;
// Person.getFullName=function(){
//     return `${this.firstName}+${this.lastName}`;
// }
Person.prototype.getFullName=function(){
     return `${this.firstName}+${this.lastName}`;
 }

// Person.name = "TestName";
  console.log(member.getFullName());

 // console.log(Person.getFullName());

// console.log(member.name)