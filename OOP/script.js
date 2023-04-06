'use strict';
console.log('hello world');
/*
// 理解对象 
let person = new Object();
person.name = 'John';
person.age = 20;
person.job = 'teacher';
person.address = {
    city: 'New York',
    state: 'NY'};
    console.log(person);

    let person2 = {
        name: 'John',
        age: 20,
        job: 'teacher',
        address: {
            city: 'New York',
            state: 'NY',
    },
    phone: '18290293148',
    email: 'kenaa@example.com',
    gender:'male',
    sayName() {
        console.log(this.name);
    }
}
console.log(person2.name);
// 数据属性
Object.defineProperty(person2, 'name', {
    writable: false,
    enumerable: true,
    configurable: false,
    value: 'John'});
    // person2.name = 'Jane';
//    delete person2.name; // 删除属性; 
      console.log(person2.name);
    console.log(person2);
 // 访问器属性
//  getter setter
 Object.defineProperty(person2, 'age', {
    get() {
        return this._age;
    },
    set(value) {
        this._age = value;
    }
});
person2.age = 30;
    console.log(person2.age);
 
let book = {
    year_: 2017,
    edition: 1,
};

Object.defineProperty(book, 'year', {
    get() {
        return this.year_;
    },
    set(value) {
        if (value > 2017) {
            this.year_ = value;
            this.edition += value - 2017;
        }
    }
        
    }
);
book.year = 2018;

console.log(book.edition);
// 定义多个属性 
let books = {};

Object.defineProperties(books, {
    year_: {
        value: 2017,
    },
    edition: {
        value: 1,

    },
    year: {
        get: function () {
            return this.year_;
            
        }, 
            
       
    
    set: function (newValue) { 
        if (newValue > 2017) {
            this.year_ = newValue;
            this.edition += newValue - 2017;
        }
    }

    }});


let descriptor = Object.getOwnPropertyDescriptor(books, 'year_');
console.log(descriptor.value);
console.log(descriptor.configurable);
console.log( typeof descriptor.get);
let descriptors = Object.getOwnPropertyDescriptors(books, 'year');
// descriptors.set(24);
console.log(descriptors.value);
console.log(descriptors.enumerable);
console.log(typeof descriptors.get);
console.log(Object.getOwnPropertyDescriptor(books));

// 合并对象 

let desc, rsc, result;
desc = {};
rsc = {id: 'src'};
result = Object.assign(desc, rsc);
console.log(desc === result);
console.log(desc, result);
result.id = 'jack';
console.log(desc === result);
// 多个元对象 
result = Object.assign(desc, {id: 'Jonas'}, {age: 21});
console.log(result);

// 对象判定 
console.log(Object.is(+0, 0));
console.log(Object.is(-0, 0));
console.log(Object.is(+0, -0));
console.log(Object.is(NaN, NaN));

// 属性值间写 
let namea = 'Jonas';
let persons1 = { 
    namea,
};
console.log(persons1);
let {naema} = persons1;
console.log(namea);
*/

// constructor function

// 1. new {} created
// 2. function is called, this = {}
// 3. {} linked to proptotype 
// 4. function automatically return {} 
function Person(name, age) {
  this.name = name;
  this.age = age;
}
let person = new Person('John', 20);

console.log(person);
function Animal(gender, birthYear, name, hobby) {
  this.gender = gender;
  this.birthYear = birthYear;
  this.name = name;
  this.hobby = hobby;
}
let dog = new Animal('female', 2003, '泰迪', 'swim');
let cat = new Animal('male', 2014, 'Jane', 'eatting')


console.log(dog);
console.log(dog instanceof Animal);

console.table(cat);



// Prototype 
console.log(Array.prototype);
Animal.prototype.calcAge = function () {
    const age = 2023 - this.birthYear;
    return age;
}


const ageOfCat = cat.calcAge();
console.log(ageOfCat);
const ageOfDog  = dog.calcAge();
console.log(ageOfDog);


console.log(cat.__proto__ === Animal.prototype);
console.log(Animal.prototype.isPrototypeOf(dog));


// .prototypeOfLinkedObject 
Animal.prototype.species = "Home Sapines";

console.log(cat.hasOwnProperty('species'));


const obj = new Object();
console.log(dog.__proto__);
console.log(cat);
console.log(Animal.prototype);
console.dir(Animal.prototype.constructor);

const arr =[1, 23, 14, 1, 5, 8, 4, 1, 1, 4, 5];
Array.prototype.uniqe = function () { 
    return [... new Set(this)];
}

console.log(arr.uniqe(arr));

// 工厂模式 

function createPerson(name, age, job) {
    let o = new Object();
    o.name = name;
    o.job = job;
    o.age = age;
    o.sayName = function () {
        console.log(this.name);
    };
    return o;
};
let jon = new createPerson('jonas', 42, 'teacher');
console.log(jon);

// code challenge 
const  Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};
Car.prototype.accelerateSpeed = function () {
    this.speed += 10;
    console.log(`the new speed ${this.speed}km/h`);
    
};
Car.prototype.decreaseSpeed = function () {
    this.speed -= 5;
    console.log(`this new speed ${this.speed}km/h`);
    
    
};


const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);
car1.accelerateSpeed();
car2.decreaseSpeed();

// ES6 class 
const PersonCl = class {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

//  Method will be added to the .prototype propety 
// instance method 
        sayName() {
        console.log(this.fullName);
    }
    calcAge() {
        return 2023 - this.birthYear;
    }
    set fullName (name) {
        console.log(name);
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name`);
        
        

    }
    get fullName () {
        return this._fullName;
    }

    // static method 
    static sayHey(name) {
        console.log(`${name} , nice to meet you`);
    }
}

PersonCl.sayHey('jonas');
const jonas = new PersonCl('John schemdtmann', 1994);
console.log(jonas);

const jons = new PersonCl('Jonas juny', 2001);
console.log(PersonCl.prototype === jons.__proto__);
console.log(jons.__proto__);
console.log(PersonCl.prototype);

// 1. classes are NOT hoisted 
// 2. Classes are first-class citizens 
// 3. Classe are executed in stirct mode 



const account = {
    owner: 'Jonas',
    movements: [100, 2300, 100, 434],
    get latest () {
        return this.movements[this.movements.length - 1];
    },
    set latest(mov) {
        this.movements[this.movements.length - 1] = mov;
    },
    calAge () {
        console.log(2023 - this.birthYear);
        

    },
    init (firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
    
}
console.log(account);


console.log(account.latest);

account.latest = 1000;

console.log(account.latest);


const y = Array.from({ length: 6 }, () => 2);
console.log(y);
const z = Array.from({ length: 6 }, (_, i) => i + 1);
console.log(z);
const e = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
console.log(e);

// static method 
PersonCl.sayHey = function () {
    console.log('hello world');
    console.log(this);
    
}

// Object.create 
const jack = Object.create(account);
console.log(jack);
jack.name = 'John';
jack.ag = 23;
jack.birthYear = 2001;
jack.calAge();
jack.init('study', 2000);
jack.calAge();

console.log(jack);
const la = jack.latest;
console.log(la);


// code challenge2 
const CarOfCl = class {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
   accelerateSpeed = function () {
        this.speed += 10;
        console.log(`the new speed ${this.speed}km/h`);
        
    };
    decreaseSpeed = function () {
        this.speed -= 5;
        console.log(`this new speed ${this.speed}km/h`);
        
        
    };
    get speedUS() {
        return this.speed / 1.6;
    }
    set speedUS(speed) {
        return this.speed = speed * 1.6;

    }

}

const ford = new CarOfCl('ford', 120);
console.log(ford.speedUS);

ford.accelerateSpeed();
ford.speedUS = 48;
console.log(ford);


    



