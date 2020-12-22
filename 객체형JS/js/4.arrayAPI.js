// Q1. make a string out of an array - 주어진 배열을 String으로 바꾸기
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join('|'); //sepeartor? 은 옵션 사항이다.
    console.log(result);
  }
  
  // Q2. make an array out of a string - 주어진 string을 배열로 만들기
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',');
    // const result = fruits.split(',',2); - limit ? 이 option으로 되어있다. 2개만 result 배열안에 넣을 수 있음
    console.log(result);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1] - 배열 순서를 거꾸로 하기
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();//배열 자체 순서를 바꿔버림
    console.log(result);
  }
  
  // Q4. make new array without the first two elements - 새 배열에서 0~2 빼고 출력하기
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2,5); // 주의점! - 마지막 숫자는 exclusive하기 때문에 end number을 +1 한 것으로 사용
    console.log(result);
    console.log(array);

    /* 이 방법은 실제 배열을 다룬다 - 즉, new array가 아니라서 안됨
    const result = array.splice(0,2);
    console.log(result);//삭제 된 데이터 출력
    console.log(array);// 남아있는 데이터 출력
    */
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
    const result = students.find((student)=> 
        // console.log(students, index);
        student.score === 90
    )
    console.log(result);

      /*--내가 한거--
      students.forEach(student=>{
          if(student.score>=90){
              console.log(student.name);
          }
      })
      */
  }
  
  // Q6. make an array of enrolled students
  {
    const result = students.filter((student) =>
        student.enrolled
    )
    console.log(result);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
    const result = students.map(student=>student.score)//배열안에 있는 모든 요소들을 원하는 모습으로 가공하는 것
    console.log(result);
    /*--내가 한거--
      const result = []; 
      students.forEach(student=> 
        result.push(student.score))
      console.log(result);
      */
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
    //   [some] - 배열중에 하나라도 조건을 만족하는것이 있으면 boolean값으로 리턴함
       const result = students.some(student=>student.score<50)//-student중에 50미만이 있는가?
       console.log(result);

    //    [every] - 배열내 모든 인자가 조건을 만족하면 true 하나라도 아니라면 false를 return한다
    const result2 = !students.every(student=>student.score<50)
    console.log(result2);    
  }
  
  // Q9. compute students' average score
  {
    console.clear() 
    //   [reduce] -- accumulated 즉, 누적값을 사용한다. 콜백함수로 previous, current 값을 사용한다.
    //               return 값을 출력해야 prev값이 정확하게 출력된다.
      const result = students.reduce((prev,curr)=>{
        //   console.log('----------');
        //  console.log('prev',prev);
        //  console.log('curr',curr);
         return prev + curr.score;
      },0) //시작값 0 으로 지정
      console.log(result/students.length);
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
      const result = students
          .map(student=>student.score)      
          .filter(score=>score>50)
          .join();
      console.log(result);
  }
  
  // Bonus! do Q10 sorted in  ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
      const result = students
      .map(student=>student.score)
      .sort((a,b)=>a-b)
      .join();
      console.log(result);

  }