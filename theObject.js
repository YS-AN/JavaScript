let obj1 = new Object(); //객체 생성자
let obj2 = {}; //객체 리터럴 문법

//심볼을 유일한 식별자를 만들고 싶을 때 사용한다. (사용전 선언 필수임!)
let id = Symbol("id");

function theBoys()
{
    let theboy = {
        name: "Q",
        nameKor: "지창민",
        nameEng: "JiChangmin",
        age: 24,
        let:"Get_it_Got_it", //예약어를 키로 사용할 수 있음!
        [id]: 981105 //심볼형 키
    };

    /*
    alert(`우주최강귀요미 본업존잘 ${theboy.name}은(는) ${theboy.age}살이랍니다^^`
            + "\n더보이즈 " + theboy.let);
     //*/

    return theboy;
}


function theB()
{
    let theB = {};
    theB["theBoys Bias"] = "Q"; //set
    theB["name"] = "AYS";

    /* alert
    alert(`${theB.name}의 최애는 ${theB["theBoys Bias"]}랍니다  ٩(･ิᴗ･ิ๑)۶`);

    delete theB["name"];
    alert(`${theB.name}의 최애는 ${theB["theBoys Bias"]}랍니다  ٩(･ิᴗ･ิ๑)۶`); //결과. undefined의 최애는 Q랍니다  ٩(･ิᴗ･ิ๑)۶
    //*/

    return theB;
}

let obj3 = theBoys();
let obj4 = theB();
let chkProperty = "age";
//alert(chkProperty in obj3); //true
//alert(chkProperty in obj4); //false

//키-값 쌍으로 이뤄진 객체 : 키는 문자열이나 심볼이어야하고, 값은 어떤 자료형이든 상관 없음
let theboysMember = {
    82 : "이상연",
    30 : "배준영",
    67 : "김영훈",
    24 : "이재현",
    11 : "이주연",
    15 : "문케빈",
    98 : "최찬희",
    2 : "지창민",
    9 : "주학년",
    19 : "김선우",
    22 : "손영재"
};

/*
for (let m in theboysMember) {
    alert(m);  //순서대로 정렬되어 출력됨
}
delete theboysMember.prop;  //삭제되면서 undefined 출력 됨
//*/


let symbol1 = Symbol("ID");
let symbol2 = Symbol("ID");
//alert(symbol1 == symbol2); // false > 유일성 보장을 위해 같은 값이 들어가도 false를 반환함

let range = {from : 1, to : 10}; // 1 ~ 10

// 1. for..of 최초 호출 시, Symbol.iterator가 호출됩니다.
range[Symbol.iterator] = function() { // 반환 값은 Symbol.iterator

    return {
        current: this.from,
        last: this.to,

        next() { //for..of 반복문에 의해 반복마다 next()가 호출
            //ext()는 값을 객체 {done:.., value :...}형태로 반환되어야 함
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            }
            else {
                return { done: true };
            }
        }
    };
};

/*// 결과 보기
for (let num of range) {
  alert(num); // 1 ~ 10까지 출력 됨
}
//*/

//map은 키가 있는 데이터를 저장한다는 점에서 객체와 유사하지만, 맵은 키에 다양한 자료형을 허용함
let map = new Map();
map.set('1', 'str1');   // 문자형 키
map.set(1, 'num1');     // 숫자형 키
map.set(true, 'bool1'); // 불린형 키

//객체는 키를 문자형으로 변환하지만 맵은 키의 타입을 변환시키지 않고 그대로 유지함
//alert( map.get(1)); // 'num1'
//alert( map.get('1') ); // 'str1'

/* //맵, 객체 변환
//객체를 맵으로
let map2 = new Map(Object.entries(theboysMember));
map2.set(82, '리상연')
alert( map2.get(82));
alert( map2.get("82"));

//맵을 객체로
let map3 = new Map([
    ['SM', 500],
    ['JYP', 350],
    ['kakaoM', 50]
]);

let obj_Map3 = Object.fromEntries(map3);
alert(obj_Map3.SM);
//*/

//셋(Set)은 중복을 허용하지 않는 값을 모아놓은 특별한 컬렉션
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

alert( set.size ); // 3

for (let user of set) {
    alert(user.name); // // John, Pete, Mary 순으로 출력됩니다.
}

let user = {
    name: 'John',
    age: 30
};
//alert( count(user) ); // 2

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
alert( sumSalaries(salaries) ); // 650