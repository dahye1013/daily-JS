
//Array

// 1. Declaration-------------------------------------------
const arr1 = new Array();
const arr2 = [1,2];

//2. Index position-------------------------------------------
console.log('2. index position-------------------------');
const fruits = ['🍉','🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);//undefined 

// 3. Looping over an array-------------------------------------------
console.log('3. looping array-------------------------');
// 방법 1) for of
console.log('(1) for of-------------------------');
for (const fruit of fruits) {
    console.log(fruit);
}
// 방법 2) forEach
console.log('(2) for each -------------------------');
fruits.forEach(function (fruit,index,array) {
    console.log(index);
    console.log(fruit);
    console.log(array);
})
console.log('(2) for each -------------------------');
fruits.forEach(fruit=>{
    console.log(fruit);
})

console.clear();    

// 4. Addition, deletion, copy-------------------------------------------
// [push] : add an item to the end
fruits.push('🍋','🍇')
console.log(fruits);
// [pop] : remove an item from the end
fruits.pop();
console.log(fruits);

// [unshift] : add an item to the beginning
fruits.unshift('🍒')
console.log(fruits);
// [shift] : remove an item from the beginning
fruits.shift();
console.log(fruits);

// [중요!!] shift, unshift는 pop이랑 push보다 훨씬 느리다.
//  - 가장 밖에 있는 데이터를 꺼내는 것은 쉽다.
//  - 하지만, 안에 있는 데이터를 shift하는 것은 array 내부를 전체 이동시킨 다음에 삽인한다.
//  - 그래서 중간 데이터를 변경하는 것은 느리다.

// [splice] : remove an item by index position
//splice 어디부터 어디까지 지울지 정할 수 있다. 설명에 ?가 있으면 optional한 것이라 지정 안해도 됨
fruits.push('🍓','🍐','🍑')
console.log(fruits);
// (1)
// fruits.splice(1)  //- 1이후부터는 다 지움
// (2)
//fruits.splice(1,1) // 1부터 1개만 지움
// (3)
fruits.splice(1,1,'🥝🥝','🍈🍈') //1부터 1개 지우고, 뒤의 매개변수를 삽입함
// (4)
fruits.splice(1,0,'🥥')//-삭제하지 않고, 넣기만 하는 것도 가능
console.log(fruits);
console.log();

// [combine two arrays]
const icecreams = ['🍦','🍧']
const fruitIcecream = fruits.concat(icecreams);
console.log(fruitIcecream);


// 5. Searching -------------------------------------------
// find the index
console.clear();
console.log(fruits);
// [indexOf]
console.log(fruits.indexOf('🍐'));//index를 return한다.
console.log(fruits.indexOf('🥩'));//없으면 - -1
// [inxludes]
console.log(fruits.includes('🍐'));//포함되어있으면 - true
console.log(fruits.includes('🥩'));//미포함 - boelan

// [lastIndexOf] - 중복된 인자가 존재할때 사용
console.clear();
fruits.push('🍐');
console.log(fruits);
console.log(fruits.indexOf('🍐')); //-찾는 첫번째 인자
console.log(fruits.lastIndexOf('🍐'));//-찾는 마지막 인자