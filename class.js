/*
class User {
    constructor(name) { this.name = name; }
    sayHi() { alert(this.name); }
}
let user = new User("John");
user.sayHi(); // John
alert(typeof User); // function
alert(User === User.prototype.constructor); // true
alert(User.prototype.sayHi); // sayHi() { alert(this.name); }
alert(Object.getOwnPropertyNames(User.prototype)); // constructor,sayHi

// 'class'키워드 없이 선언이 가능함.---------
User_func.prototype.sayHi = function() {
    alert(this.name);
};
let user_func = new User_func("John");
user.sayHi(); // John
//-----------------------------------------
*/

/*
let user = class Customer{
    say() {
        alert(Customer);
    }
};
new user().say(); //say함수 코드가 나옴
//alert(MyClass); //오류 - 이름을 클래스 밖에서 활성화 할 수는 없음!!!

function makeCustomer(speck) {
    return class {
        constructor(name) {
            this.name = name;
        }

        get name() { return this._name; }
        set name(value) {
            if (value.length < 4) {
              alert("Name is too short.");
              return;
            }
            this._name = value;
        }

        say() {
            alert(`${this._name} : ${speck}`);
        }

        ['TEST' + 'METHOD' + 'NAME']()
        {
            alert('string형으로 메소드 명 만듦')
        }

        payment = () => {
            alert("How much?");
        }
    };
}
let person = makeCustomer("Hello");
new person('AYS').say(); // Name is too short
new person('Changmin').say(); // Changmin : Hello
new person('qwerty').TESTMETHODNAME(); //string형으로 메소드 명 만듦

let customer = new person("ChanHee")
 setTimeout(customer.payment, 2000); // undefined
 //*/

 /*
 class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }

    run(speed) {
      this.speed = speed;
      alert(`${this.name} runs with speed ${this.speed}.`);
    }

    stop() {
      this.speed = 0;
      alert(`${this.name} stands still.`);
    }

    showName() {  // instead of this.name = 'animal'
        alert('Animal');
    }
}
let animal = new Animal("My animal");

class Rabbit extends Animal {
    constructor(name, earLength) {
        super(name);
        this.earLength = earLength;
    }

    hide() {
      alert(`${this.name} hides!`);
    }

    stop() {
        super.stop(); // call parent stop
        this.hide(); // and then hide
    }

    showName() {  // instead of this.name = 'animal'
        alert('Rabbit');
    }
}
let rabbit = new Rabbit("White Rabbit", 10);
rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.showName(); //Rabbitzzzzzzzz

let animal = {
    sayHi() {
      alert(`I'm an animal`);
    }
};
  
let rabbit = {
    __proto__: animal,
    sayHi() {
      super.sayHi();
    }
};
  
let plant = {
    sayHi() {
      alert("I'm a plant");
    }
};
  
let tree = {
    __proto__: plant,
    sayHi: rabbit.sayHi // (*)
};
tree.sayHi();  // I'm an animal (?!?)
//*/

/*
class User {
    static staticMethod() {
      alert(this === User);
    }
}
User.staticMethod(); // 객체 생성없이 접근

class Article {
    constructor(title, date) {
      this.title = title;
      this.date = date;
    }

    static publisher = "Ilya Kantor";

    static compare(articleA, articleB) {
        return articleA.date - articleB.date;
    }

    static createTodays() {
        return new this("Today's digest", new Date());
    }
}
class Report extends Article {
    createTodays() {
        return new this("Today's summary", new Date());
    }
}

alert( Article.publisher ); // Ilya Kantor

let articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1)),
    new Report("C#", new Date(2019, 7, 1))
];
articles.sort(Article.compare);
alert(articles[0].title); // CSS
alert(articles[2].title); // C#
alert(Article.createTodays().title); //Today's digest
alert(Report.createTodays().title); //Today's digest > createTodays메소드 앞에 static 붙이면 summary 나옴
//*/

/*
try{
    class CoffeeMachine {
        _waterAmount = 0;
        _power = 0;

        #waterLimit = 200; //# = private

        constructor(power) {
            this._power = power;
            alert( `Created a coffee-machine, power: ${power}` );
        }

        get waterAmount() {
            return this._waterAmount;
        }
        set waterAmount(value) {
            if (value < 0) {
                value = 0;
            }
            this._waterAmount = value;
        }

        get power() {
            return this._power;
        }

        #fixWaterAmount(value) { // # = private
            if (value < 0) return 0;
            if (value > this.#waterLimit) return this.#waterLimit;
        }
    }
    let coffeeMachine = new CoffeeMachine(100); //Created a coffee-machine, power: 100
    coffeeMachine.waterAmount = 200;
    alert(`waterAmount : ${coffeeMachine.waterAmount}`) //waterAmount : 200

    coffeeMachine.waterAmount = -10;
    alert(`waterAmount : ${coffeeMachine.waterAmount}`) //waterAmount : 0

    coffeeMachine.power = 300; //error : get만 만들었기 때문에 읽기 전용 변수이다.
    alert(`power : ${coffeeMachine.power}`) //power : 100
//*/

/*
class PowerArray extends Array {
    isEmpty() {
      return this.length === 0;
    }
}
let arr = new PowerArray(1, 2, 5, 10, 50);
alert(arr.isEmpty()); // false
  
let filteredArr = arr.filter(item => item >= 10);
alert(filteredArr); // 10, 50
alert(filteredArr.isEmpty()); // false
alert(arr.constructor === PowerArray); //true

class PowerArraySP extends Array {
    isEmpty() {
      return this.length === 0;
    }

    static get [Symbol.species]() { //Symbol.species클래스에 특별한 정적 getter 를 추가 할 수 있음
        return Array;
    }
}
let arr = new PowerArray(1, 2, 5, 10, 50);
let filteredArr = arr.filter(item => item >= 10);
alert(arr.isEmpty()); // false
alert(filteredArr.isEmpty()); //여기서 isEmpty 더이상 함수가 아님
//*/

/*
class Rabbit {}
let rabbit = new Rabbit();
alert(`rabbit instanceof Rabbit : ${rabbit instanceof Rabbit}`); //true - instanceof : 객체가 특정 클래스에 속하는지 확인

let arr = [1, 2, 3];
alert(`arr instanceof Array : ${arr instanceof Array}`); //true
alert(`arr instanceof Object : ${arr instanceof Object}`); //true

class Animal {
    static [Symbol.hasInstance](obj) { //
        if (obj.canEat) return true; //canEat 프로퍼티 있으면 animal이라고 판단함 (instanceOf 로직 직접 설정)
    }
}
let obj = { canEat: true };
alert(`obj instanceof Animal : ${obj instanceof Animal}`); // true, Animal[Symbol.hasInstance](obj)가 호출됨

function Rabbit02() {}
let rabbit02 = new Rabbit();
alert(`before - rabbit02 instanceof Rabbit02 : ${rabbit02 instanceof Rabbit02}`);

Rabbit02.prototype = { }; //프로퍼티 변경
alert(`after - rabbit instanceof Rabbit : ${rabbit02 instanceof Rabbit02}`); // false - 프로퍼티 변경해서 더이상 같은 객체 아님

let objectToString = Object.prototype.toString; //편의를 위해 toString메서드 변수에 복사함
alert(`arr : ${objectToString.call(arr)}`); // 변수 타입 확인 : [object Array]
alert(`123 : ${objectToString.call(123)}`); // [object Number]
alert(`null : ${objectToString.call(null)}`); // [object Null]
alert(`alert : ${objectToString.call(alert)}`); // [object Function]

function A() {}
function B() {}
A.prototype = B.prototype = {};

let a = new A();
alert( a instanceof B ); // true
//*/

/*
let sayMixin = {
    say(phrase) {
        alert(phrase);
    }
};

let sayHiMixin = {
    __proto__: sayMixin, // (Object.create를 사용해 프로토타입을 설정할 수도 있습니다.)

    sayHi() {
        // 부모 메서드 호출
        super.say(`Hello ${this.name}`); // (*)
    },
    sayBye() {
        super.say(`Bye ${this.name}`); // (*)
    }
};

class User {
    constructor(name) {
        this.name = name;
    }
}


Object.assign(User.prototype, sayHiMixin); // 메서드 복사

new User("Dude").sayHi(); // 이제 User가 인사를 할 수 있습니다.
//*/

/*
let json = "{ bad json }";
try {
    let user = JSON.parse(json); // <-- 여기서 에러가 발생하므로
    alert(user.name); // 이 코드는 동작하지 않습니다.
}
catch (e) {
    alert(`[${e.name}] ${e.message}`); //[SyntaxError] Unexpected token b in JSON at position 2
}
//*/

/*
let json = '{"age": 30}'; // 불완전한 데이터
try {
    let user = JSON.parse(json); // <-- 에러 없음

    if (!user.name) {
        throw new SyntaxError("불완전한 데이터: 이름 없음"); // 에러를 직접 생성
    }

    blabla(); //얘상하지 못한 에러
    
    alert( user.name );
}
catch(e) {
    if (e instanceof SyntaxError) {
        alert( "JSON Error: " + e.message );
    }
    else {
        throw e; // 에러 다시 던지기 (*)
    }
}
finally {
    alert('finally');
}
//*/

class ReadError extends Error {
    constructor(message, cause) {
        super(message);
        this.cause = cause;
        this.name = 'ReadError';
    }
}

class ValidationError extends Error {  }
class PropertyRequiredError extends ValidationError {  }

function validateUser(user) {
    if (!user.age) {
        throw new PropertyRequiredError("age");
    }

    if (!user.name) {
        throw new PropertyRequiredError("name");
    }
}

function readUser(json) {
    let user;

    try {
        user = JSON.parse(json);
    } catch (err) {
        if (err instanceof SyntaxError) {
            throw new ReadError("Syntax Error", err);
        }
        else {
            throw err;
        }
    }

    try {
        validateUser(user);
    } catch (err) {
        if (err instanceof ValidationError) {
            throw new ReadError("Validation Error", err);
        }
        else {
            throw err;
        }
    }
}
try {
    readUser('{잘못된 형식의 json}');
}
catch (e) {
    if (e instanceof ReadError) {
        alert(e);
        alert("Original error: " + e.cause);  // Original error: SyntaxError: Unexpected token b in JSON at position 1
    }
    else {
        throw e;
    }
}