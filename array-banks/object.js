// 'use strict'
let person = {};
// Object.defineProperty(person, "name", {
//     writable: false,
//     value: "jonas"
// });
Object.defineProperty(person, "name", {
    configurable: false,
    value: "Nicholas"
});
console.log(person.name);
person.name = "nichhg";
delete person.name;;
console.log(person.name);
let book = {
year_: 2017,
edition: 1
};
    Object.defineProperty(book, "year", {
        get() {
            return this.year_;
        },
        set(newValue) {
if (newValue > 2017) {
    this.year_ = newValue;
    this.edition += newValue - 2017;
}
        }
    })
    book.year = 2018;
    console.log(book.edition);

    (function () {
        console.log(`hello dengzhu nice to `);
        
    })();
    function createPerson(name, age, job) {
        let o = new Object();
        o.name = name;
        o.age = age;
        o.job = job;
        o.sayName = function () {
            console.log(this.name);
            
        }
        return o;
    }
    let person1 =  createPerson("jonas", 27, "work");
    console.log(person1);
    




    