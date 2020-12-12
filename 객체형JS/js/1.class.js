// 1. Class declarations - 클래스 선언하기
class person{
    //contructor- 생성자
    constructor(name,age){
        //fileds
        this.name=name;
        this.age=age;
    }
    speak(){
        console.log(`${this.name} hello!!`);
    }
}

const kim = new person('kim', 22);
console.log(kim.name);
console.log(kim.age);
kim.speak();

//2. Getter and Setter - 게터와 세터 사용하기
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age(){
        return this._age;
    }
    set age(value ){
        // if(value<0){
        //     throw Error('age can not be negative')
        //     1) 이렇게 디버깅 하거나
        // }
        this._age = value <0 ? 0 : value;
        //    2) 나이가 오류일때 임의값을 지정해버린다.
    }
    /** 
     * 
     set age(value ){
        this.age = value;
    }
    **주의**
    이렇게 setter를 만들면 call stack size exceed 가 뜬가.
    -> set메소드의 this.age=value 부분이 set메소드를 호출하고 있기 때문이다.
    -> 이를 방지하기 위해서 get와 set에서의 _등을 통해서 필드 명을 바꾼다.

     */
}
const user1 = new User('Shin','Daji',-1);
console.log(user1.age); 
/**
 * 나이가 음수인것은 객체 지향적인 것은 말이되지 않는다.
 *  -> 이러한 오류를 방어적으로 할 수 있게 만든것이 getter, setter
 */

//  3. Fields(public , private)
// 정말 최근에 추가된거라 사파리에서도 지원안함.바벨 사용해야함 201212 
class Experiment{
    publicField =2 ;
    #privatefiled =0;
}

//4. Static properties and method - static 변수와 메소드
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateFiled);//undefined으로 출력됨

class Article{
    static publisher = "Wonderful publisher";
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }
    static printPublisher(){
        console.log(Article.publisher);
    }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher);//undefined -> object마다 할당되는것이 아니라, class가 가지고 있는 것임
Article.printPublisher(); //Typescript에서 공통적으로 필요할떄 많이 사용된다.

// 5. inheritance - 상속
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(){
        console.log(`[super]그려진 색깔은 ${this.color}`);
    }
    getArea(){
        return this.width*this.height;
    }
}

class Rectangle extends Shape{}
class Triangle extends Shape{
    draw(){
        super.draw();
        console.log('[override ]📐 삼각형ㅎ');
    }// - override
    getArea(){
        return (this.width*this.height)/2;
    }// - override
}
const  rectangle = new Rectangle(20, 20, 'BLUE');
rectangle.draw();
const triangle = new Triangle(20,20,'PINK');
triangle.draw();


// 6. Class checking : inatanceOf - 클래스 타입 확인하기
console.log(rectangle instanceof Retangle); //True
console.log(triangel instanceof Retangle);//False
console.log(triangle instanceof Triangle);//True
console.log(triangel instanceof Shape);//True
console.log(triangle instanceof Object);//True -

// MDB web docs 에서 JS reference에서 더 다양한 함수들을 확인 할 수 있다.
//  backend에서 받아올 수 있는 Promise등 ....


