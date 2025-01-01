## 1주차 - 리액트 시작하기

### #1 자바스크립트(JavaScript)

- HTML로 구성된 웹사이트를 동적인 작업을 처리하기 위한 프로그래밍 언어

#### 1. 자바스크립트의 자료형

- 자바스크립트에서는 변수를 선언할 때가 아닌 변수의 데이터가 대입되는 시점에 자료형이 결정됨.
- 이처럼 동적으로 자료형이 결정되는 것을 다이나믹 타이밍(동적타이핑) 이라고 함.
- 변수 선언방식에는 var, let이이 있음
  ```javascript
  var number = 1234; // number 타입 (소수 가능)
  var string = "test"; // String 타입
  var boolean = true; // boolean 타입 (true 또는 false)
  let null1 = null; // null 타입
  let undefined1; // undefined 타입 (자료형이 정의되지 않음)
  let array1 = [1, 2, 3, 4]; // Array타입 (저장된 변수가 다양할 수 있음)
  let object = { a: "test", b: "code", c: "1234" }; //object 타입
  ```

#### 2. 자바스크립트의 연산자

- 선언된 변수를 연산하기 위해 사용하는 것
- 대입 연산자
  - 변수의 값을 대입하기 위해 사용하는 연산자
  - equal(=)의 오른쪽에 있는 값을 왼쪽에 대입시킴
  ```javascript
  let a = 10;
  let b = 20;
  console.log(a); // 10 출력
  console.log(b); // 20 출력
  ```
- 산술 연산자
  - 덧셈, 뺄셈, 곱셈, 나눗셈의 사칙연산자
  - 나눗셈의 나머지를 구하는 연산자, 지수 연산자
    ```javascript
    let a = 2;
    let b = 4;
    console.log(a + b); // 6
    console.log(a - b); // -2
    console.log(a * b); // 8
    console.log(a / b); // 0.5
    console.log(a % b); // 2
    console.log(a ** b); // 16
    ```
- 산술 연산자와 대입 연산자 함께 사용하기

  ```javascript
  let a = 2;
  let b = 4;

  a += b; // a = a + b   ->   a = 2 + 4
  console.log(a); // 6 출력
  a -= b; // a = a - b  ->  a = 6 - 4
  console.log(a); // 2 출력
  ```

- 증감 연산자

  - 증감 연산자를 변수 뒤에 붙이기 (postfix), 증감 전의 값을 반환함. 그 후 변수의 값 증감
  - 증감 연산자를 변수 앞에 붙이기 (prefix), 증감 후의 값을 반환

  ```javascript
  let a = 1;
  let b = a++; // postfix 방식, a의 값을 b에 대입 후 a 1 증가
  console.log(a, b); // 2 , 1 출력

  let c = 1;
  let d = ++c; // prefix 방식, c의 값을 1 증가 시킨 후 d에 대입
  console.log(c, d); // 2, 2 출력
  ```

- 비교 연산자 (관계 연산자)
  - 왼쪽에 입력한 변수를 기준으로 판단
  - 변수 사이의 크고 작음을 비교하는데 사용
  ```javascript
  let a = 1;
  let b = 2;
  console.log(a < b); // true 출력
  console.log(a >= b); // false 출력
  ```
- 동등 연산자

  - 변수의 값이 같은지 다른지 판단
  - 일치연산자 : 변수의 *자료형*도 같은지 판단할 수 있음

  ```javascript
  let a = 1; // number 타입
  let b = "1"; // string 타입

  console.log(a == b); // true 출력
  console.log(a != b); // false 출력
  console.log(a === b); // false 출력
  console.log(a !== b); // true 출력
  ```

- 이진 논리 연산자
  - and, or 연산을 사용하여 true, false를 반환하는 연산자
  ```javascript
  let a = true;
  let b = false;
  console.log(a && b); // and 연산자, false 출력
  console.log(a || b); // or 연산자, true 출력
  ```
- 삼항 연산자(조건부 연산자)
  - 조건에 따라서 true일때, false일때의 값을 지정해서 반환
  - ex) 조건식 ? true일 경우 : false일 경우
  ```javascript
  let a = true;
  let b = false;
  console.log(a ? 1 : 2); // 1 출력
  console.log(b ? 1 : 2); // 2 출력
  ```

#### 3. 자바스크립트의 함수

- 함수 : 입력을 받아서 정해진 출력을 하는 것
- 함수의 입력을 파라미터 라고 함.
- 함수를 호출할 때는 함수 이름 뒤에 괄호를 붙이고 그 안에 파라미터를 넣어줘야함.

```javascript
testfunction(parameter1, parameter2);
```

- 자바스크립트에서 함수를 정의하는 방법 2가지
  - function statement 사용
    ```javascript
    function sum(a, b) {
    	return a + b; // 파라미터로 입력받은 a 와 b의 값을 더한 결과를 반환함.
    }
    console.log(sum(10, 20)); // 30 출력
    ```
  - arrow function expression 사용
    ```javascript
    const multiply = (a, b) => {
    	return a * b; // 파라미터로 입력받은 a 와 b의 값을 곱한 결과를 반환함.
    };
    console.log(multiply(10, 20)); // 200 출력
    ```

#### 4. 리액트

- 웹사이트를 구축할때 사용하는 JavaScript UI 라이브러리 중 하나
- 복잡한 사이트를 쉽고 빠르게 만들면 관리하기 위해 만들어진 라이브러리

- 리액트의 장점
  - 빠른 업데이트와 렌더링 속도
  - 컴포넌트 기반의 구조를 가지고 있어 재사용성이 높음
  - 리액트 네이티브를 사용하면 자바스크립트로 모바일 앱도 개발 가능함
- 리액트의 단점

  - 기존의 프레임워크, 라이브러리들과 방식이 달라 배워야 할것이 많음.
  - 컴포넌트의 상태 관리가 복잡함

- 리액트 프로젝트 생성하기 ->
  `npx create-react-app <프로젝트 이름>`
- 리액트 실행하기 ->
  `npm start` 또는 `npm run start`
