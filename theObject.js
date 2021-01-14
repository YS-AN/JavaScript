let obj1 = new Object(); //객체 생성자
let obj2 = {}; //객체 리터럴 문법

function theBoysModel()
{
    let theboys = {
        name: "Q",
        nameKor: "지창민",
        nameEng: "JiChangmin",
        age: 24,
        let:"Get_it_Got_it", //예약어를 키로 사용할 수 있음!
        [id] : 981105, //심볼형 키
    };

    /*
    alert(`우주최강귀요미 본업존잘 ${theboys.name}은(는) ${theboys.age}살이랍니다^^`
            + "\n더보이즈 " + theboys.let);
    //*/

    return theboys;
}

function theBModel()
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

let obj3 = theBoysModel();
let obj4 = theBModel();
let chkProperty = "age";
alert(chkProperty in obj3); //true
alert(chkProperty in obj4); //false


//키-값 쌍으로 이뤄진 객체 : 키는 문자열이나 심볼이어야하고, 값은 어떤 자료형이든 상관 없음
let theboysMember = {
    "82" : "이상연",
    "30" : "배준영",
    "67" : "김영훈",
    "24" : "이재현",
    "11" : "이주연",
    "15" : "문케빈",
    "98" : "최찬희",
    "2" : "지창민",
    "9" : "주학년",
    "19" : "김선우",
    "22" : "손영재"
};

for (let m in theboysMember) {
    alert(m);  //순서대로 정렬되어 출력됨
}

delete theboysMember.prop;

//심볼을 유일한 식별자를 만들고 싶을 때 사용한다.
let symbol1 = Symbol("ID");
let symbol2 = Symbol("ID");
//alert(symbol1 == symbol2); // false > 유일성 보장을 위해 같은 값이 들어가도 false를 반환함

let range = {from : 1, to : 10};

// 1. for..of 최초 호출 시, Symbol.iterator가 호출됩니다.
range[Symbol.iterator] = function() {

    // Symbol.iterator는 이터레이터 객체를 반환합니다.
    // 2. 이후 for..of는 반환된 이터레이터 객체만을 대상으로 동작하는데, 이때 다음 값도 정해집니다.
    return {
        current: this.from,
        last: this.to,

        // 3. for..of 반복문에 의해 반복마다 next()가 호출됩니다.
        next() {
            // 4. next()는 값을 객체 {done:.., value :...}형태로 반환해야 합니다.
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        }
    };
};

// 이제 의도한 대로 동작합니다!
for (let num of range) {
    alert(num); // 1, then 2, 3, 4, 5
}
