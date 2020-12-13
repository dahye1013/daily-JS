

/**[Object]
 * - 자바스크립트의 데이터 타입이다.
 * - data나 function 형태의 collection으로 가지고 있을 수 있다.
 * - object = { key : value} 오브젝트는 키와 값의 집합체이다.
 *   ㄴ>즉, 우리가 접근할 수 있는 properties(변수)와 실제 값의 집합체
 * - 
 */

//  1. Literals and properties ------------------------------
console.log('1. literal and properties--------------------');
 const obj1={} ; // object listeral - 오브젝트 리터럴
 const obj2= new Object(); //object consturctor - 오브젝트 컨스트럭털
 const daji = {name:'daji',age:4}; //이렇게 오브젝트를 바로 생성 가능

 function print(person) {
     console.log(person.name);
     console.log(person.age);
 }
 print(daji);

//  JS 는 dynamic type language라서 runtime에서 타입을 결정할 수 있다.
// =>  즉, 프로그램 동작 중에 하나의 프로펄티를 추가할 수 있다.
daji.hasJob = false; 
console.log(daji.hasJob);
// -> 하지만, 이렇게 너무 동적으로 코딩하면 나중에 유지보수때 어려움
//    피해서 코딩하는 것이 좋다.
delete daji.hasJob;
console.log(daji.hasJob);


//  2. Computed properties ------------------------------
// [주의] property의 key값은 항상 String 타입으로 입력해야한다
console.log('2. computed properties--------------------');
console.log(daji.name);
console.log(daji['name']); //peroperty로 접근해서 값 얻어오기->property는 항상 string으로 써야함
daji['hasJob'] = false;
console.log(daji.hasJob);
/**
 *  . vs [' '] 의 차이점
 * - .은 key 값을 받아오고 싶을때 사용한다 -> 일반적으로 코딩시에 사용
 * - [' ']computed property는 정확하게 어떤 키가 필요한지 모를 때(런타임에서 결정될때) 사용한다.
 *    ㄴ> 동적으로 key value를 가져올 때 사용한다.
 */
function printValue(obj, key) {
    console.log(obj.key); //undefined
    console.log(obj[key]); // daji
}
printValue(daji,'name');


// 3. Property value shorthand
console.log('3. Property value shorthand--------------------');
const person1 = {name:'bob',age:2};
const person2 = {name:'steve',age:3};
const person3 = {name:'dave',age:4 };
const person4 = makerPerson('dope',30);
console.log(person4);
function makerPerson(name,age) {
    return{
        name,
        age
    }
}

// 4. Constructor
console.log('4.Constructor--------------------');
function Person(name,age){
    this.name = name;
    this.age = age;
}
const person5 = new Person('concon',33);
console.log(person5);

// 5. in operator - 해당하는 오브젝트 안에 key가 있는지 없는지 확인하는거 
console.log('5. in operator --------------------');
console.log('name' in daji);//true
console.log('random' in daji);//false
console.log(daji.random);// undefined  <없는 키로 접근했기 때문임.

// 6. for..in vs for..of -------------------------------------
console.clear();
console.log('6. for in / for of --------------------');
//#1 for(key in obj)
for(key in daji){
    console.log(key);//daji안에 있는 모든 키들을 출력한다.
}
// #2 for(value of literable)
const array = [1,2,3,4,5];
for(value of array){
    console.log(value);
}
//7. Fun cloning-------------------------------------------
const user = {name:'daji',age:5}; //user는 ref를 가르키고, ref는 실제 object를 가지고 있음
const user2 = user; //user2에 user와 같은 ref를 할당함. 똑같은 object를 가르킨다.

// user2.name='coder';
// console.log(user);
// (중요!!) user2 이름을 바뀌면 user의 이름도 바뀐다.
//  => 같은 ref의 object를 가지고 있기 때문임.

// 복사 방법 1) old way - 임시 오브젝트를 만들어서 일일히 할당
const user3 ={};
for(key in user){
    user3[key] = user[key];
}
console.log('user3',user3);

// 복사방법 2) Object.assign
const user4 = {};
Object.assign(user4,user) ; //target과 복사하고자 하는 대상을 매개변수에 전달.
//const user4 = Object.assign(user4,user); - 이렇게도 가능


// another example
const fruit1 = {color:'red'};
const fruit2 = {color:'blue', size:'big'};
const mixed = Object.assign({},fruit1, fruit2);//동일한 property에 할당하면, 뒤에 있는걸로 덮어씌워진다.
console.log(mixed.color); //blue < 뒤에꺼 value가 나옴
console.log(mixed.size); // big



