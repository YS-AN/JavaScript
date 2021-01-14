const SAPCE = ' '; //const는 보통 대문자로 선언함
let msg; //변수선언
msg = 'Hello World';
msg = 32; //자료형 바꿔도 오류 없음!!!

//let user = 'AYS', age = 25;
//변수 선언 한줄씩 나열하는 것 보다는 각각 선언해주는게 가독성이 더 높음

let user = 'AYS' //세미콜론 없어도 자동으로 붙어줌
let age = 25;

let admin = user;

//alert(user + SAPCE + age + SAPCE + msg);
// ${~}는 역따옴표만 지원함!!
//alert("ALERT : ${user} / ${age} / ${admin} / ${1+2}"); //따옴표 : ALERT : ${user} / ${age} / ${admin} / ${1+2}
//alert(`ALERT : ${user} / ${age} / ${admin} / ${1+2}`); //역따옴표 : ALERT : AYS / 25 / AYS / 3

//무한대 값을 타나내는 특수 숫자 값 : Infinity == (1/0)
//alert(Infinity);
//alert(-Infinity);

//NaN : 계산 중 에러가 발생했다는 것을 나타내주는 값
//(부정확하거나 정의되지 않은 수학연산을 사용하면 계산 중 에러가 발생함.)
//alert(NaN);
//alert( "숫자가 아님" / 2 + 5 ); //출력결과 : NaN

//null : 알 수 없거나 그 값이 비어었음을 뜻함
//undefined :  값이 할당되지 않은 상태를 뜻함
let val;
//alert(val); //undefined

//(2^53-1) ~ -(2^53-1)값을 벗어나면 숫자형을 사용하 수 없음 > BingInt자료형 사용
let bigIntN = 1234567890123456789012345678901234567890n; //숫자 끝에 n으 붙이면 BingInt형임
//alert(bigIntN);

//typeof : typeof x - 연산자 / typeof(x) - 함수 => 사실 결과는 동일함
typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") //심볼형 : 객체의 고유 식별자 만들 때 사용
typeof Math //결과 : object > Math는 내장 객체
typeof null //결과 : object > but, null은 객체가 아님! 하위호환성 유지를 위해 남겨둔 것
typeof alert //피연산자가 함수면 function을 반환 > 함수는 사실 객체형임 > 하위호환성 유지로 남겨진거라 실무에서도 유용하게 사용됨!!

//showMessage();

//JS에서 함수는 특별한 동작을 하는 값으로 취급함. > showMessage로 사용 가능 + 변수로 함수를 넘길 수 있음 (C+ func => 와 비슷하다고 생각해도 될 듯)
function showMessage()
{
    let pResult = prompt("PROMPT - INPUT", "[DEFAULT]"); //취소는 null값을 반환

    let retVal = confirm("TRUE OR FALSE");
    if(retVal)
    {
        alert("TRUE"); // 확인 버튼을 눌렀다면 true가 출력됩니다.
    }
    else
    {
        alert(pResult);
    }

    return retVal;
    //return; = return undefined;
}


//거듭제곱 연산자 : ** 3**4 = 3^4

//alert( null === undefined ); // false /  ===는 일치연산자 > 동등연산자의 엄격한 형태 > 자료형이 다르기 때문에 false
//alert( null == undefined ); //true / ==는 동등연산자 > 각별한 커플 취급받아서 같은 값으로 체크 됨

/*//기타 비교연산자를 사용하면 null은 0, undefined는 NaN으로 변함
alert(null > 0);  //false
alert(undefined > 0); // false

alert(null == 0); //false
alert(undefined == 0); // false

alert(null >= 0); //true
alert(undefined >= 0) // false
//*/

let first = null;
let second = undefined;
let third = "jjin_str";

//??는 null이나 undefined가 아닌 첫 번째 피연산자 찾기
//alert(first ?? second ?? third ?? "Anonymous");

let sum = (a, b) => a + b;
alert(sum(1, 3));

let alertHello = () => alert("Buenas tardes");