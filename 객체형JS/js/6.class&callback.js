// class를 생성하고, constuctor안에 콜백함수를 전달받아서 사용한다.
class Counter {
  constructor(runEveryFiveTimes) {
    this.counter = 0;
    this.callBack = runEveryFiveTimes;
  }
  increase(runIf5Times) {
    this.counter++;
    console.log(this.counter);
    if (this.counter % 5 === 0) {
      if (this.callBack) this.callBack(this.counter);
      this.callBack && this.callBack(this.counter);
    }
  }
}

const coolCounter = new Counter(printSomething);
const alertCounter = new Counter(alertSomething);
// => 이와 같이 다른 콜백함수를 가지고 있는 class를 활용한다.
// => 클래스의 재활용을 높일 수 있다.

function printSomething(num) {
  console.log(`5time!! ${num}`);
}
function alertSomething(num) {
  alert(`5time!! ${num}`);
}

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();

alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
// 5단위마다 알리고 싶다.
