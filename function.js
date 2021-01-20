/*
// 1).반복문을 돌면서 x를 n번 곱함
function pow_iteration(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

// 2).함수를 반복해서 호출
function pow_recursive(x, n) {
    if (n == 1) { return x;}
    else { return x * pow_recursive(x, n - 1); }
}

alert( "반복 : " + pow_iteration(2, 3) + " / 재귀 : " + pow_recursive(2,3));
//*/

/*
//과제1
function sumTotalNum(num){
    if(num == 1) { return num; }
    return num + sumTotalNum(--num);
}
alert("sumTo(4) = " + sumTotalNum(4));

//과제2
function factorial(num)
{
    if(num == 1) { return num; }
    return num * factorial(--num);
}
alert("4! = " + factorial(4));

//과제3
function fibonacci(num)
{
    return num <= 1 ? num : fibonacci(num - 1) + fibonacci(num - 2);
}
alert("fibonacci(7) = " + fibonacci(7));

//단일 연결리스트
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

//과제4
function printList(list) {
    alert(list.value); // 현재 요소를 출력합니다.

    if (list.next) {
        printList(list.next); // 같은 방법을 사용해 나머지 요소를 출력합니다.
    }
}
printList(list);

function printReverseList(list) {
    let arr = [];
    let tmp = list;

    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) { alert( arr[i] ); }
}
printReverseList(list);
//*/

/*
function sumAll(...sumArgs) { //...뒤는 배열로 들어감
    let sum = 0;
    for (let num of sumArgs) { sum += num; }

    return sum;
}
let sumArray = [4, 5, 6, 7, 8, 9, 10];
alert('sum 1 = ' + sumAll(1)
        + " sum 1 to 4 = " + sumAll(1, 2, 3, 4)
        + " sum 4 to 10 = " + sumAll(4, 5, 6, 7, 8, 9, 10)); //배열이 들어 갈 수 없나봄..!
//*/

/*
//인수변수(arguments) - 매개변수 없어도 arguments로 받을 수 있음
function showName() {
    let msg = '';

    for(let data of arguments) { msg = msg + data + ", "; }
    //for(let i=0; i<arguments.length; i++) { msg += arguments[i] + ", "; }

    alert(`arguments[${arguments.length }] = { ${msg.substring(0, msg.length-2)} }`);
}
showName('펭귄');
showName('기린', '다람쥐', '알파카');
//alert(msg); //오류 - 실행 안 됨 - { }안에서 선언한 변수는 { }안에만 영향을 미치기 때문임!!
//*/

/*
//스프레드 구문으로 Object.assign()와 동일한 작업 수행 가능
//Object.assign()보다 간단하게 복사할 수 있기 때문에 더 선호함
let arr = [1, 2, 3];
let arrCopy = [...arr];
alert("단순비교 : " + (arr === arrCopy) + " / "
        + "JSON 데이터 형식 비교 : " + (JSON.stringify(arr) === JSON.stringify(arrCopy)));

arr.push(4); //arr추가해도 arrCopy에 자동으로 추가 되는건 아님. 다시 카피해야함
alert(arr); // 1, 2, 3, 4
alert(arrCopy); // 1, 2, 3

//객체도 배열과 동일하게 적용 됨
let obj = { a: 1, b: 2, c: 3 };
let objCopy = { ...obj };
//let objCopy2 = Object.assign({}, obj);
alert("단순비교 : " + (obj === objCopy) + " / "
        + "JSON 데이터 형식 비교 : " + (JSON.stringify(obj) === JSON.stringify(objCopy)));

obj.d = 4;
alert(JSON.stringify(obj)); // {"a":1,"b":2,"c":3,"d":4}
alert(JSON.stringify(objCopy)); // {"a":1,"b":2,"c":3}
//*/

/*
//실제로 자동화 된 테스트를위한 임의 값을 생성 하는 난수 생성기에서 사용하는 방법
function makeCounter() {
    let count = 0;

    //중첩함수 선언------------------------------------
    //return function() { return count++; };
    //-------------------------------------------------

    //직접 만든 프로퍼티를 사용하여 중첩 함수 선언--------
    function counter() { return counter.count++; };
    counter.count = 0;

    counter.set = value => count = value

    counter.increase = () => ++count;
    counter.decrease = () => --count;

    return counter;
    //-------------------------------------------------
}
let counter = makeCounter();
//makeCounter 자체를 변수를 받았기 때문에 여러번 호출해도 count자체는 초기화되지 않음
alert(counter()); // 0
alert(counter()); // 1
alert(counter()); // 2
counter.count = 10;
alert(counter()); //10
alert(counter()); //11
alert(counter.set(20)); //20
alert(counter.decrease()); //19
alert(counter.decrease()); //18
alert(counter.increase()); //19
//*/

/*
//var은 블록의 영향을 받지 않음 (단, 함수 블록안에 있을 때는 영향을 받음!)
if(true)
{
    var codeBlock_var = '루돌프 타고 라팜팜팜! 썰메를 타고 라팜팜팜! - VAR';
    let codeBlock_let = '루돌프 타고 라팜팜팜! 썰메를 타고 라팜팜팜! - LET';
}
alert(codeBlock_var);
//alert(codeBlock_let);  //오류 - 실행 안 됨 : let은 코드 블럭 영향 받음
var codeBlock_var = '하얗게 눈이! 내려와 많이!'
alert(codeBlock_var);
var codeBlock_var = '몽글 몽글 하얀 눈송이... 예쁜 마음에 고운 웃음이...'
alert(codeBlock_var); //정상적으로 실행 됨 : var은 재선언을 허용함!!! let면 오류 남

function test_var() {
    var functionVar = '루돌프 타고 라팜팜팜! 썰메를 타고 라팜팜팜!';
}
//alert(functionVar); ///오류 - 실행 안 됨
//*/

/*
//IIFE(Immediately Invoked Function Expression) : 즉시 호출 된 함수 표현 - 지금은 사용 안 함!!
//IIFE 사용하는 3가지 방법 : ( ), !, +
(function() { alert("Parentheses around the function"); })();
!function() { alert("Bitwise NOT operator starts the expression"); }();
+function() { alert("Unary plus starts the expression"); }();
//*/

/*
//전역함수 (node.js면 global,)
alert("ALERT");
window.alert("WINDOW.ALERT");

//전역 함수, 전역 변수는 var로 선언해야함. let, const는 안돼
var gVar = 5; alert(window.gVar); //5
let gLet = 5; alert(window.gLet); //undefined
const gConst = 5; alert(window.gConst); //undefined
//*/

/*
//객체를 전역적으로 사용할 때 선언방법 (일반적으로 권장하는 방법은 아님)
window.currentUser = {
    name: "AYS",
    age : 25
 };
 alert(`이름 : ${currentUser.name} / 나이 : ${currentUser.age}`);
 alert(`이름 : ${window.currentUser.name} / 나이 : ${window.currentUser.age}`);
 //*/

/*
//Promise객체가 존재하는지 확인 (오래된 브라우저는 존재하지 않음)
if (!window.Promise) { alert("Your browser is really old!"); }
else { alert("Your browser have Promise!"); }
//*/

/*
//함수는 name이라는 속성으로 접근 가능함 : 함수 이름 반환
function sayHi_01() {
    alert("first Hi");
}
//alert(sayHi_01.name); //sayHi_01

let sayHi_02 = function() {
    alert("second Hi");
};
alert(sayHi_02.name); //sayHi_02

function f_sayHi_03(sayHi_03 = function() {}) {
    alert(sayHi_03.name); // sayHi (works!)
};
f_sayHi_03(); //sayHi_03

let user = {
    sayHi() { alert("Hi user"); },
    sayBye: function() { alert("Bye user"); }
}
alert(user.sayHi.name); // sayHi
alert(user.sayBye.name); // sayBye
//*/

/*
//function.length : 매개변수의 수를 반환함
function f1(a) { }
function f2(a, b) { }
function f3(a, b, ...more) { }

alert(f1.length); // 1
alert(f2.length); // 2
alert(f3.length); // 2 - ...은 집계 되지 않음

function ask(question, ...handlers) {
    let isYes = confirm(question); // YES OR NO

    for(let handler of handlers) {
      if (handler.length == 0) {
        if (isYes) handler();
      }
      else {
        handler(isYes);
      }
    }
}
//alert(ask("Question?")); //의문 - 반환값이 handler라는게 무슨 의미지?
ask("Question?", () => alert('You said yes'), result => alert(result)); //YES-true / NO-false
//*/

/*
//NFE(Named Function Expression) : 명명 된 함수 식
// func를 붙이는 이유 : 1.함수 내부에서 자신을 호출 / 2.외부에서 기능 숨기기
let greet = function func(who) {
    if (who) {
      alert(`Hello, ${who}`);
    }
    else {
      //greet("Guest"); //외부에서 여러번 할당 되었을 때 코드에서 오류 발생 함
      func("Guest"); // Now all fine
    }
};

let welcome = greet;
greet = null;
//func(); //오류 - 외부에서 접근 못함
welcome(); // Hello, Guest (nested call works)
welcome("AYS"); // Hello, AYS
//*/
