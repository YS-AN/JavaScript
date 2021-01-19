/*
객체 프로퍼티 flag
writable – true면 값을 수정가능하고, 그렇지 않다면 읽기만 가능합니다.
enumerable – true면 반복문을 사용해 나열할 수 있고, 그렇지 않다면 반복문을 사용해 나열할 수 없습니다.
configurable – true면 프로퍼티 삭제나 플래그 수정이 가능하고, 그렇지 않다면 프로퍼티 삭제와 플래그 수정이 불가능합니다.
*/

let user = { name: "YS" };
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
alert( JSON.stringify(descriptor, null, 2 ) );
/* [결과] - 값과 프로퍼티 flag를 보여줌
{
  "value": "YS",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
*/