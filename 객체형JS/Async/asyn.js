//async & await - clear style of using promise

// 1.async
//- promise 대신 사용한다.
async function fetchUser() {
  // do network request in 10 secs.....- 가정
  return "daji";
}
// function fetchUser() {
//     // do network request in 10 secs.....- 가정
//     return new Promise((resolve,reject)=>{
//         resolve('daji')
//     });
// }

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await 👼
//- async 붙은 함수에서만 사용가능
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return "🍎";
}
async function getBanana() {
  await delay(1000);
  return "🍌";
}

// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   });
// }

/**
 * 1. 내부에서 getApple, getBanana 프로미스를 만듬
 * 2. getApple, getBanana 병렬 실행하면서 같이 delay됨
 */
async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promis APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]) //모든 프로미스 반환 받음
    .then((fruits) => fruits.join(" + "));
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]); // 가장 빨리 끝나는 프로미스만 반환
}
pickOnlyOne().then(console.log);
