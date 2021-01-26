/*
객체 프로퍼티 flag
writable – true면 값을 수정가능하고, 그렇지 않다면 읽기만 가능합니다.
enumerable – true면 반복문을 사용해 나열할 수 있고, 그렇지 않다면 반복문을 사용해 나열할 수 없습니다.
configurable – true면 프로퍼티 삭제나 플래그 수정이 가능하고, 그렇지 않다면 프로퍼티 삭제와 플래그 수정이 불가능합니다.
*/

/*
let user = { name: "YS" };
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
alert( JSON.stringify(descriptor, null, 2 ) );
//*/

/* [결과] - 값과 프로퍼티 flag를 보여줌
{
  "value": "YS",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
*/

/*
let animal = {
    nickname: 'Ani',
    subNickNm:'mal',
    eats: true,

    set fullNickName(value) {
        [this.nickname, this.subNickNm] = value.split(" ");
    },
    get fullNickName() {
        return `${this.nickname} ${this.subNickNm}`;
    },

    walk(name) { alert(`${name}가(이) 걷습니다.`); }
};
let rabbit = {
    jumps: true
};
rabbit.__proto__ = animal; //프로토타입 설정 : __proto__ : 프로토타입용 getter, setter임
alert(`rabbit eats : ${rabbit.eats}`);
alert(`rabbit jumps : ${rabbit.jumps}`);
alert(`rabbit nickName : ${rabbit.fullNickName}`); //Ani mal
rabbit.walk('토끼'); //rabbit의 프로토 타입은 animal에서 상속받았기 때문에 접근 가능함

rabbit.fullNickName = 'RABBIT BAMM'
alert(`rabbit nickName : ${rabbit.fullNickName}`); //RABBIT BAMM

let hipo = {
    jumps:false,
    __proto__:animal
}
alert(`hipo.eats : ${hipo.eats}`);
alert(`hipo jumps : ${hipo.jumps}`);
hipo.walk('하마');
alert(`hipo nickName : ${hipo.fullNickName}`); //Ani mal

let longEar = {
    earLength: 10,
    __proto__: rabbit
};
alert(`longEar.jumps : ${longEar.jumps}`);
alert(`longEar.earLength : ${longEar.earLength}`);
//*/

/*
let obj = {};
alert(`Object.prototype.__proto__ : ${Object.prototype.__proto__}`); //null
alert(`obj.__proto__ === Object.prototype : ${obj.__proto__ === Object.prototype}`); // true
alert(`obj.toString === obj.__proto__.toString : ${obj.toString === obj.__proto__.toString}`); //true
alert(`obj.toString === Object.prototype.toString : ${obj.toString === Object.prototype.toString}`); //true

let arr = [1, 2, 3];
alert(`arr : ${arr}`); //1, 2, 3
alert(`Array.prototype 상속? ${arr.__proto__ === Array.prototype}`); //true
alert(`Object.prototype 상속? ${arr.__proto__.__proto__ === Object.prototype}`); // true
alert( arr.__proto__.__proto__.__proto__ ); // null = 체인 맨 위엔 null이 있음

String.prototype.show = function() { //문자열 프로토타입 만들기
    alert(this);
};
"BOOM!".show(); // BOOM!

if (!String.prototype.repeat) { //프로퍼티 존재여부 확인

    String.prototype.repeat = function(n) { //repeat 프로퍼티 추가
      return new Array(n + 1).join(this);
    };
}
alert( "La".repeat(3) ); // LaLaLa

let everyObj = {
    0: "Every day",
    1: "Every Moment",
    2: "Every thing",
    length: 3,
};
everyObj.join = Array.prototype.join;
alert(everyObj.join(', ')); // Every day, Every Moment, Every thing (length가 2여도 같은 값이 나옴)

Function.prototype.defer = function(ms){
    let f = this;
    return function (...args){
        setTimeout(() => f.apply(this, args), ms);
    }
}
function f(a, b) { alert("Hello! " + (a+b)); }
f.defer(1000)(1, 2); // 1초 후 "Hello! 3" 출력
//*/

let animal = {
    eats: true
};
let rabbit = Object.create(animal);
alert(Object.getPrototypeOf(rabbit) === animal);
Object.setPrototypeOf(rabbit, {}) // rabbit의 프로토타입을 {}으로 바꿈

let obj1 = {};
let obj2 = Object.create(null);
let key = prompt("입력하고자 하는 key는 무엇인가요?", "__proto__");
obj1[key] = "...값...";
obj2[key] = "...값...";
alert(obj1[key]); // [object Object]가 출력됨
alert(obj2[key]); // ...값...이 출력됨

let dictionary = Object.create(null, {
    toString:{
        value() {
            return Object.keys(this).join();
        }
    }
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__는 여기서 일반적인 프로퍼티 키입니다.

for(let key in dictionary) {
    alert(key); // apple > __proto__
}
alert(dictionary); // apple,__proto__