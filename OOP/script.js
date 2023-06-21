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

/*
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

*/

// inheritance
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calAge = function () {
  console.log(2023 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
Student.prototype.calAge = function () {
  console.log(`2037 - ${this.birthYear}`);
};

Student.prototype = Object.create(Person.prototype);

const Jonas = new Student('Jonas', 2001, 'Javascript');
console.log(Jonas);
Jonas.calAge();
Student.prototype.constructor = Student;
console.log(Student.prototype.__proto__);
console.dir(Student.prototype.constructor);

// code challenge3

const Car = function (make, speed) {
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
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerateSpeed = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%`
  );
};
EV.prototype.constructor = EV;

const tesla = new EV('tesla', 120, 23);
// tesla.chargeBattery(90);
// tesla.decreaseSpeed();
// tesla.accelerateSpeed();
// console.log(tesla);

// inheritance of ES6
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
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }

  // static method
  static sayHey(name) {
    console.log(`${name} , nice to meet you`);
  }
};

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }
  introduce(name) {
    console.log(`${this.fullName} is major in ${this.course}`);
  }
  calcAge() {
    console.log(`${2037 - this.birthYear}`);
  }
}
const martha = new StudentCl('Martha Jonas', 2001, 'python');
console.log(martha);
martha.calcAge();

martha.introduce();

const personProto = {
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
  clacAge() {
    console.log(2037 - this.birthYear);
  },
};
const StudentProto = Object.create(personProto);
StudentProto.init = function (firstName, birthYear, course) {
  personProto.init.call(this, firstName, birthYear, course);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`my name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('jay', 2001, 'javascript');
// console.log(personProto.prototype.constructor === StudentProto.__proto__);
jay.introduce();
jay.clacAge();
*/

/*
public fields
private fields
public method 
private method
there is also static version
*/
class Account {
  // public (instance)
  locale = navigator.language;
  // private (instance)
  #owner; // 私有属性
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.#owner = owner;
    this.currency = currency;
    // this.locale = navigator.language;
    // protected property
    this.pin = pin;
    // this._movements = [];
  }

  // public method

  // public interface
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Load approved');
      return this;
    }
  }

  // private method

  getMovements() {
    return this.#movements;
  }
  getOwner() {
    return this.#owner;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  _approveLoan(val) {
    return true;
  }
  static helper(name) {
    console.log(`Hello ${name}, we can help you`);
  }
  static getOwner(name) {
    console.log(`if you can help me, you can ${name}`);
  }
}

const acc1 = new Account('Jonas', 'en-zhu', '1111');
// acc1._movements.push(100);
// acc1._movements.push(-100);
acc1.deposit(29123);
acc1.deposit(20300);
acc1.withdraw(4450);
console.log(acc1);
// acc1.requestLoan(1000);
// acc1._approveLoan(1000);
console.log(acc1.pin);
console.log(acc1.getOwner());
// console.log(acc1.#pin); //不可访问#

console.log(acc1._approveLoan(999));
acc1.requestLoan(9999);

console.log(acc1.getMovements());
Account.helper('Jonas');
Account.helper('en-zhu');
Account.getOwner('Jonas');

// chaining method
acc1.deposit(29123).deposit(20300).requestLoan(9999).withdraw(4450);
console.log(acc1.getMovements());

// code challenge 4
class CarCl {
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
}

const CarOfCl = class {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerateSpeed() {
    this.speed += 10;
    console.log(`the new speed ${this.speed}km/h`);
  }
  decreaseSpeed() {
    this.speed -= 5;
    console.log(`this new speed ${this.speed}km/h`);
    return this;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    return (this.speed = speed * 1.6);
  }
};

class EvCl extends CarOfCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerateSpeed() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed}km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const rivian = new EvCl('rivian', 120, 23);
rivian.accelerateSpeed();
console.log(rivian.speedUS);
rivian.speedUS = 100;

rivian
  .accelerateSpeed()
  .accelerateSpeed()
  .decreaseSpeed()
  .chargeBattery(48)
  .accelerateSpeed();

  console.log(rivian.speedUS);
  

  class Car {
    constructor(speed, make) {
      this.speed = speed;
      this.make = make;
    }
    

  }