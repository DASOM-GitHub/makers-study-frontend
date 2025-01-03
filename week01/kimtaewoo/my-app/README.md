색션 1.준비하기

HTML : Hyper Text Markup Language

<html> </html>
<br/>  -- 단일태그


<html>
  <head>  -- 헤드태그
  </head>
  <body>  -- 바디태그
  </body>
</html>


SPA : Single Page Application
하나의 페이지만 존재하는 웹 사이트

MPA : Multiple Page Application
사용자가 요청할때 마다 새로운 페이지 로딩되어 화면에 나타남

CSS : Cascading Style Sheets

JavaScript 소개 및 자료형

//Number type

let n1 = 1234;
let n2 = 5.678;

//String type

let s1 = "hello";
let s2 = "world";

//Boolean type

let b1 = true;
let b2 = false;

//Null type

let n = null;

//Undefined type
let u1;
let u2 = undefined;

//Array type
let arr = [1, 2, 3, 4];

//Object type
let obj = { a: "apple", b: "banana", c: "carrot" };

JavaScript의 연산자

대입연산자 : =
산술연산자 : +, -, *, /, %, **
증가연산자, 감소연산자 :  postfix 방식 : a++ a--, prefix 방식 : ++a --a
비교연산자 : <, >, <=, >=
동등연산자 : !=, ==
일치연산자 : ===, !==
이진논리연산자 : &&, ||
삼항연산자 : a ? 1 : 2  //참이면 1 거짓이면 2


JavaScript의 함수
파라미터, 인자

// functopn statement를 사용
function sum(a, b){
    return a + b;
}

console.log(sum(10, 20));
// 출력결과 : 30

// arrow function expression을 사용
const multiply = (a, b) => {
    return a* b;
}

console.log(multiiply(10, 20));
//출력결과: 200

(실습) 개발환경 설정하기
Node.js, npm, VS code 


섹션2 리액트 소개

React : 사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리

리액트의 장점과 단점

장점1 : 빠른 업데이트, 렌더링 속도
장점2 : Virtual DOM  웹페이지를 정의하는 하나의 객체, 가상의 DOM, 변경된 내용을 사용자에게 빠르게 보여줌
장점3 : Component-Based
장점4 : 재사용성, 개발 기간 단축, 유지 보수가 용이함


단점1 : 방대한 학습량, 기술의 변화
단점2 : 높은 상태관리 복잡도


