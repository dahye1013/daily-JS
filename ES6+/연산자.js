//[Boolean]
// false : 0 , -0 , '' , null, undefined
// true : -1 , 'hello', 'false'

let num = 9;
if (num) {
  console.log("true");
}
// num에 값이 존재하여, undefined되지 않으므로 true

num && console.log(num); // num이 true이면 뒤에 있는 연산을 실행한다.

let obj;
obj && console.log(obj); // 실행하지않음
let obj = {
  name: "dh",
};
obj && console.log(obj.name); // 실행

// => obj가 있다면 존재하다면 실행되므로 유효성을 검사할때 많이 사용된다.
