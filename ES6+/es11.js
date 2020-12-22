// 유용한 es11 문법 학습하기

// 1. Optional Chaining(es11)
{
  const person1 = {
    name: "Elsa",
    job: {
      title: "Queen",
      manager: {
        name: "Anna",
      },
    },
  };
  const person2 = {
    name: "Donna",
  };
  {
    //  💣💣💣
    function printManager(person) {
      console.log(person.job.manager.name);
    }
    printManager(person1);
    //  printManager(person2); -- 매니저가 존재하지 않아서 에러
  }
  {
    //   ✨
    function printManager(person) {
      console.log(person.job?.manager?.name); //person의 job이 있고, manager가 있으면 출력
    }
    printManager(person1);
    printManager(person2);
  }
}

// 2. Nullish Coalescing Operator (ES11)
{
  // Logical OR operator
  // false: false.'',0,null,undefined
  {
    const name = "daji";
    const userName = name || "Guest"; //앞에 값이 false이면 뒤의 값 실행
    console.log(userName);
  }
  {
    const name = null;
    const userName = name || "Guest"; //앞에 값이 false이면 뒤의 값 실행
    console.log(userName);
  }
  {
    //  문제점! 0이라는 숫자와 ''이라는 익명이 false로 인식해버린다.
    const name = "";
    const userName = name || "Guest";
    console.log(userName);
    const num = 0;
    const message = num || "undefined";
    console.log(message);
  }
  {
    //   ✨
    const name = "";
    const userName = name ?? "Guest";
    console.log(userName);
    const num = 0;
    const message = num ?? "undefined";
    console.log(message);
  }
}
