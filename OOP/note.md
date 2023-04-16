# oop

### OOP

- abstraction
- encapsulation
- inheritance
- polymorphism

![IMG_1305(20230408-095406)](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304081023023.JPG)

![IMG_1299(20230403-093636)](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304081023052.JPG)

![IMG_1298(20230403-092938)](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304081023113.JPG)

![IMG_1297(20230402-150357)](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304081023093.JPG)

![IMG_1296(20230402-145821)](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304081023148.JPG)

![IMG_1295(20230402-144159)](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304081023175.JPG)

![IMG_1294(20230402-144100)](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304081023585.JPG)

![IMG_1293(20230401-201523)](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304081023645.JPG)

#### prototype

* ```javascript
  // constructor function
  
  // 1. new {} created
  // 2. function is called, this = {}
  // 3. {} linked to proptotype
  // 4. function automatically return {}
  ```

* 构造函数

  * ```javascript
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
    
    ```

  * 原型

    * ```javascript
      / Prototype 
      添加方法到原型中而不是，构造方法
      console.log(Array.prototype);
      Animal.prototype.calcAge = function () {
          const age = 2023 - this.birthYear;
          return age;
      }
      
      每一个对象都会生成一个[prototype]属性
      
      ```

    * ```javascript
      console.log(cat.__proto__ === Animal.prototype);
      console.log(Animal.prototype.isPrototypeOf(dog));
      
      ```

    * ```javascript
      // .prototypeOfLinkedObject 
      Animal.prototype.species = "Home Sapines";
      
      console.log(cat.hasOwnProperty('species'));
      
      
      ```

    * 工厂模式

      * ```javascript
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
        
        ```

      * #### *ES6 class* 

      * class 表达式

        * ```javascript
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
          
          ```

        * 输出

          * ```javascript
            PersonCl.sayHey('jonas');
            const jonas = new PersonCl('John schemdtmann', 1994);
            console.log(jonas);
            
            const jons = new PersonCl('Jonas juny', 2001);
            console.log(PersonCl.prototype === jons.__proto__);
            console.log(jons.__proto__);
            console.log(PersonCl.prototype);
            
            ```

        * 注意

          * ```
            // 1. classes are NOT hoisted 
            // 2. Classes are first-class citizens 
            // 3. Classe are executed in stirct mode 
            ```

      * get set 

        * ```javascript
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
          
          ```

    * *Object.create* 

      * ```javascript
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
        ```

    #### *inheritance*

    * 构造函数继承通过Object.create()

      * ```javascript
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
        
        
        创建构造函数
        ```

      * 实现继承

        * ```javascript
          
          Student.prototype = Object.create(Person.prototype);
          ```

      * 创建对象

        * ```javascript
          const Jonas = new Student('Jonas', 2001, 'Javascript');
          ```

      * eg

        * ```
          console.log(Jonas);
          Jonas.calAge();
          Student.prototype.constructor = Student;
          console.log(Student.prototype.__proto__);  //{calAge: ƒ, constructor: ƒ}
          console.dir(Student.prototype.constructor); //ƒ Student(firstName, birthYear, course)
          ```

        * 如果没有将Student.prototype.constructor = Student;那么console.dir 输出将是f Person

          * ```
            ƒ Person(firstName, birthYear)
            ```

          * 

        * ![image-20230416113141036](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304161131134.png)

##### *inheritance of ES6*

* 语法

  * ```javascript
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
    
    ```

* 继承

  * ```javascript
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
    ```

  * 创建对象

    * ```javascript
      const martha = new StudentCl('Martha Jonas', 2001, 'python');
      ```



##### proto 继承

* 语法

  * ```JavaScript
    const personProto = {
      init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
      },
      clacAge() {
        console.log(2037 - this.birthYear);
      },
    };
    ```

  * 继承

    * ```javascript
      const StudentProto = Object.create(personProto);
      ```

  * 创建方法

    * ```javascript
      StudentProto.init = function (firstName, birthYear, course) {
        personProto.init.call(this, firstName, birthYear, course);
        this.course = course;
      };
      StudentProto.introduce = function () {
        console.log(`my name is ${this.firstName} and I study ${this.course}`);
      };
      
      
      jay.init('jay', 2001, 'javascript');
      console.log(jay);
      
      jay.introduce(); //my name is jay and I study javascript
      jay.clacAge(); // 36
      ```

    * 

    * ![image-20230416115828350](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304161158378.png)

#### 下划线原则

* 在 JavaScript 中，将属性名以下划线 `_` 开头通常是一种命名约定，用于指示这个属性是“私有”的，即仅限于类内部访问。这是因为 JavaScript 并没有真正的“私有”属性，任何属性都可以在类外部被访问和修改。但是，使用下划线作为前缀可以向其他开发人员传达属性是“内部使用”的信息，帮助他们遵循良好的编程实践，并避免在类外部直接访问或修改这些属性。

  注意，这种命名约定并不能完全防止类外部的属性访问和修改。在一些特殊情况下，仍然可以通过一些技巧来访问和修改“私有”属性。因此，在编写类时，还需要结合使用其他封装技术（如闭包或模块模式）来确保属性和方法不被意外修改或直接访问。

  在 ES6 中，还引入了一种新的语言特性，即在类中使用 `#` 符号作为属性名的前缀，用于创建真正的私有属性。这些私有属性只能在类内部访问，而在类外部无法访问或修改它们。下面是一个使用 `#` 符号定义私有属性的示例：

  ```javascript
  javascriptCopy codeclass Person {
    #name; // 私有属性
  
    constructor(name) {
      this.#name = name;
    }
  
    getName() {
      return this.#name;
    }
  }
  
  const person = new Person('John');
  console.log(person.getName()); // "John"
  console.log(person.#name); // SyntaxError: Private field '#name' must be declared in an enclosing class
  ```

  在这个示例中，我们使用 `#` 符号定义了一个私有属性 `#name`，它只能在类内部访问。在类外部访问这个属性将会抛出语法错误。

### Encapsulation

* 用于class

  * ```javascript
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
    
    
      // public interface 
      _getMovements() {
        return this.#movements;
      }
      getOwner() {
        return this.#owner;
      }
      deposit(val) {
        this.#movements.push(val);
      }
      withdraw(val) {
        this.deposit(-val);
      }
      approveLoan(val) {
        return true;
      }
      requestLoan(val) {
        if (this.approveLoan(val)) {
          this.deposit(val);
          console.log('Load approved');
        }
      }
    }
    
    
    ```

* 创建对象

  * ```javascript
    const acc1 = new Account('Jonas', 'en-zhu', '1111');
    ```

  * 调用方法

    * ```javascript
      acc1.deposit(29123);
      acc1.deposit(20300);
      acc1.withdraw(4450);
      console.log(acc1);
      ```

    * ![image-20230412205838586](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304122058710.png)

* 私有属性和公共属性如何定义

  * 定义在class内，constructor外

    * ![image-20230412210021015](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304122100056.png)

  * 不可以直接访问了

    * ![image-20230412212200534](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304122122587.png)

  * 通过方法让外部访问

    * ```javascript
        _getMovements() {
          return this.#movements;
        }
        getOwner() {
          return this.#owner;
        }
      ```

    * ```javascript
      console.log(acc1._getMovements());
      ```

      * ![image-20230412210210252](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304122102305.png)

​				![image-20230412212012425](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304122120469.png)

* ```javascript
  
  // chaining method 
  acc1.deposit(29123).deposit(20300).requestLoan(9999).withdraw(4450);
  console.log(acc1.getMovements());
  
  
  ```



#### ES6 CLASSES SUMMARY

![3DFC6621EAEB82E2CE15D00E32C0355E](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304161327980.png)

* CODE CHALLENGE 4

  * ```javascript
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
      
    ```



### OOP PROJECT

![3B1E9C138A20549A0013FA6BEBA38408](https://makeforpicgo.oss-cn-chengdu.aliyuncs.com/study/202304161329993.png)
