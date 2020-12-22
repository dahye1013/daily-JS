// JavsScript is synchronous. - 자바스크립트는 동기적이다.
// -> 호이스팅 된 이후부터는 코드가 작성 순서에 맞춰서 동기적으로 실행된다.
// hoisting 호이스팅 : var, function 선언이 자동적으로 제일 위로 올라가는것

console.log("1");
setTimeout(() => {
  console.log("2");
}, 1000);
//브라우저 API - 브라우저에 먼저 요청. 브라우저에 1초 뒤에 해당 콜백함수를 실행시킴
// -> asyncronize 비동기적인 실행방법
// -> 내부 callback (나중에 부른 함수)를 후에 실행하며 , 보통 arrow function
console.log("3");

// [콜백의 두가지 경우]
// 1. Synchronous callback - 즉각적, 동기적
function printImmediately(print) {
  print(); //콜백을 바로 실행
}
printImmediately(() => console.log("hello "));

// 2. Asynchronous callback - 나중에, 언제 실행될지 모름
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("aync callback"), 2000);

// 콜백 지옥 샘플
// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your passrod");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
