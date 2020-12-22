

//JSON
// 1.Object to JSON----------------------------------
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);
json = JSON.stringify(['apple','banana'])
console.log(json);
const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    // symbol : Symbol("id"),
    birthDate: new Date(),
    jump : ()=>{ console.log(`${this.name} can jump!`);}
}

json = JSON.stringify(rabbit);
console.log(json); 
// 출력시 함수, Symbol 를 제외하고 출력한다. 
// -> 함수는 object에 포함된 data가 아니기 때문이다.
// -> symbol은 JS만 가지는 특별한 함수라서 출력하지 않는다.

// [ (1)json Controll ]
json = JSON.stringify(rabbit, ['name','color','size']); //원하는 property만 출력
console.log(json);
// [ (2)json Controll ]
json = JSON.stringify(rabbit,(key,value)=>{
    console.log(`key: ${key}, value: ${value}`);
    // return value; -- key와 value를 확인 할 수 있다.
    return key === 'name' ? '토끼': value; //property가 name이면 토끼로 return하고 아니면 그대로
})//replacer 
console.log(json);

// 2. JSON to Object---------------------------------
console.clear();
json =JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();
// obj.jump();
// => rabbit에는 jump()이 존재하지만, obj에는 jump가 존재하지 않는다.
//  ㄴ> object->json으로 변환할때 function을 전환되지 않는다.
//   ㄴ> 그래서 json->object로 가져올떄 function이 존재하지 않음.

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); -- error => birthDate가 string type
console.log(obj.birthDate); //parse할때 string타입으로 가져온다.


// [reviver - 콜백함수]
obj2 = JSON.parse(json,(key,value)=>{
    console.log(`key: ${key} , value : ${value}`);
    return key === 'birthDate' ? new Date(value) : value;//property가 birthDate이면 new Date()시킨다
});

/**TIP - 유용한 사이트!

* JSON에 대해 조금더 공부를 하고 싶으시면: 
MDN ➡️ https://developer.mozilla.org/en-US/d...
JavaScript.info ➡️ https://javascript.info/json
JavaScript.info 한국어 ➡️ https://ko.javascript.info/json 

유용한 사이트:
JSON Diff checker: http://www.jsondiff.com/
JSON Beautifier/editor: https://jsonbeautifier.org/
JSON Parser: https://jsonparser.org/
JSON Validator: https://tools.learningcontainer.com/j...
 */