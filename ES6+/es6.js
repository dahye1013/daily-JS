// 유용한 es6 문법 학습하기
// 1. shorthand property names----------------------------------
{
  // (1)
  const daji1 = {
    name: "daji",
    age: "3",
  };
  // (2)
  const name = "daji";
  const age = "3";
  // (3)
  const daji2 = {
    name: name,
    age: age,
  };
  //  (4) ✨ key값만 써도 매핑된다
  const daji3 = {
    name,
    age,
  };
  console.log(daji1, daji2, daji3);
}
//2. Destructuring assignment---------------------------------
{
  // object
  const student = {
    name: "Anna",
    level: 1,
  };
  {
    const name = student.name;
    const level = student.level;
    console.log(name, level);
  }
  {
    // ✨Object안에 정의된 key값을 {}에 넣어서
    const { name, level } = student;
    console.log(name, level);
  }
  //✨ key값에 다른 변수를 할당
  const { name: studentName, level: studentLevel } = student;
  console.log(studentName, studentLevel);

  //array
  const animals = ["🐶", "🐹"];
  {
    const first = animals[0];
    const second = animals[1];
    console.log(first, second);
  }
  {
    //✨
    const [first, second] = animals;
    console.log(first, second);
  }
}
// 3. Spread Syntax
// 주의할점! obj가 가지고 있는 값이 같은 메모리를 가르키고 있다. 참조...
// =>즉, 실제로 카피한것이 아니라 같은 값을 공유!!
{
  const obj1 = { key: "key1" };
  const obj2 = { key: "key2" };
  const array = [obj1, obj2];
  //   array copy
  const arrayCopy = [...array];
  console.log(array, arrayCopy);

  const arrayCopy2 = [...array, { key: "key3" }];
  console.log(arrayCopy2);

  //   object copy
  const obj3 = { ...obj1 };
  console.log(obj3);

  //   array concatenation
  const fruits1 = ["🍊", "🍋"];
  const fruits2 = ["🍌", "🍍"];
  const fruist3 = [...fruits1, ...fruits2];
  console.log(fruist3);

  //   object merge - 주의! key가 같으면 덮어씌운다
  const bab1 = { bab1: "🍘" };
  const bab2 = { bab2: "🍙" };
  const bab3 = { bab2: "🍚" };
  const bab = { ...bab1, ...bab2, ...bab3 };
  console.log(bab);
}
//4. Default parameters
{
  // 옛날
  {
    function printMessage(message) {
      if (message == null) {
        message = "default message";
      }
      console.log(message);
    }
    printMessage("hello");
    printMessage();
  }

  {
    //✨
    function printMessage(message = "default Message") {
      console.log(message);
    }
    printMessage("hello");
  }
}

// 5. Ternary Operator
{
  const isCat = true;
  {
    let component;
    if (isCat) {
      component = "🐱";
    } else {
      component = "🐶";
    }
    console.log(component);
  }
  //✨
  {
    const component = isCat ? "🐱" : "🐶";
    console.log(component);
  }
}
// 6, Template Listerals
{
  const weather = "⛅";
  const temperature = "16";
  console.log(`Today weather is ${weather} and temperature is ${temperature}`);
}
