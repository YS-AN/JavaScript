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

//alert( "반복 : " + pow_iteration(2, 3) + " / 재귀 : " + pow_recursive(2,3));

//과제1
function sumTotalNum(num){
    if(num == 1) { return num; }
    return num + sumTotalNum(--num);
}
//alert("sumTo(4) = " + sumTotalNum(4));

//과제2
function factorial(num)
{
    if(num == 1) { return num; }
    return num * factorial(--num);
}
//alert("4! = " + factorial(4));

//과제3
function fibonacci(num)
{
    return num <= 1 ? num : fibonacci(num - 1) + fibonacci(num - 2);
}
//alert("fibonacci(7) = " + fibonacci(7));

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

