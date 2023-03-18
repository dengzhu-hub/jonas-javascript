// let person = new Object();
// person.name = "Jonas";
// person.age = 39;
// person.job = "Software Engineer";
// person.sayName = function () {
//     console.log(this.name);
    
// }
let persons = {
    name: "Jonas",
    age: 29,
    job: "Software Engineer",
    sayName() {
        console.log(this.name);
        
    }
}
persons.sayName();