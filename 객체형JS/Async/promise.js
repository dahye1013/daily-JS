"use strict";

/*
Promise is a JavaScript object for asynchronous(비동기적) operation 
1. State - pending -> fullfiled or rejected
2. Producer vs Consumer
*/

// 1. Producer
// - promise 생성 (내부 excuter 콜백함수 실행)
// when new Promise is created, the excutor runs automatically.
// ㄴ> 그래서 조건을 걸어야함
const promise = new Promise((resolve, reject) => {
  //resolve - 기능 정상수행, reject - 기능실패
  //doing some heavy work() - 무거운 파일이나 네트워크 통신 작업 등
  console.log("doing something");
  setTimeout(() => {
    resolve("ellie");
    // reject(new Error("no network"));
  }, 2000);
});

//2.Consumers : then, catch, finally
promise
  .then((value) => {
    //resolve 파라미터를 value에 전달 받는다.
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

//   3.Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});
fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num - 1);
      }, 1000);
    });
  })
  .then((num) => console.log(num));

//   4. Error Handleing
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("🐔");
    }, 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve(`${hen}=>🥚`);
      reject(new Error(`error!  ${hen}=>🥚`));
    }, 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(`${egg}=>🍳`);
    }, 1000);
  });

getHen()
  .then((hen) => getEgg(hen))
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal))
  .catch((error) => console.log(error));

getHen() //tip - 콜백함수 전달할때 받는 value가 하나면 생략 가능하다.
  .then(getEgg)
  .catch((error) => {
    //   22분 25초 분량. < 원하는 대로 출력 안됨 check
    //계란 가져올때 error 생겨도 빵으로 대체하게 => 즉, chain에 문제가 없게 핸들링한다.
    return "🥯";
  })
  .then(cook)
  .then(console.log())
  .catch((error) => console.log(error));
