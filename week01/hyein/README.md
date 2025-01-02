1주차

-HTML
웹사이트의 뼈대를 구성하기 위해 사용하는 마크업 언어
Tag 웹사이트의 구조를 만듦. 열었으면 꼭 닫아야 함. <html></html> 혹은 <br />
head와 body로 구성
head 웹사이트의 속성
body 웹사이트에서 보이는 콘텐츠
SPA (Single Page Application) 단 하나의 페이지만 존재. Html 파일이 하나. 바디 태그의 내부가 비어 있다가 페이지에 접속할 때 그 페이지에 해당하는 콘텐츠를 가져와서 동적으로 채워넣음
Double Page Application 전통방식. 여러 개의 페이지가 존재. 각 페이지는 각자의 html 파일을 갖고 있음

-CSS
웹사이트의 레이아웃, 글꼴, 색상 등의 디자인을 입히는 언어

-JavaScript
스크립트 언어. 동적인 작업
프로그램 런타임에 코드가 해석됨
JavaScript 문법
 - 동적 타이핑 방식 사용. 변수에 자료형을 쓰지 않고 var, let 씀.
 - 자료형 Number, String, Boolean, Null, Undefined, Array, Object
JavaScript 연산자
 - 대입 연산자 =, +=, -=, *=, /=
 - 사칙 연산자(산술 연산자) +, -, *, /, %, **
 - 증가 연산자 ++
 - 감소 연산자 –
 - 관계 연산자(비교 연산자) <, >, <=, >=
 - 동등 연산자 ==, !=
 - 일치 연산자 ===, !==
 - 이진 논리 연산자 &&, ||
 - 조건부 연산자(삼항 연산자) 조건식? True일 경우 : false일 경우
JavaScript 함수
 - 함수의 입력: 파라미터, 인자
 - 함수 정의 방법
- function statement : function 함수명(파라미터){ }
- arrow function expression : const 함수명 = (파라미터) => { }

-React
React : 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리(UI 라이브러리)
라이브러리 : 자주 사용되는 기능들을 정리해 모아 놓은 것
사용자 인터페이스(User Interface, UI) : 사용자와 컴퓨터 프로그램이 서로 상호작용을 하기 위해 중간에서 서로 간의 입출력을 제어해주는 것
프레임워크와 라이브러리의 차이 : 프로그램의 흐름에 대한 제어 권한 – 프레임워크가 가짐 / 개발자가 가짐
React 장점
 - 빠른 업데이트&렌더링 속도
    Virtual DOM
       웹페이지와 실제 돔 사이에서 중간 매개체 역할을 하는 가상의 돔
       DOM : 웹페이지를 정의하는 하나의 객체. 웹사이트 정보를 모두 담고 있음.
       화면이 업데이트 된다는 건 돔이 수정된다는 것과 동일
       State Change -> Compute Diff -> Re-render
 - 컴포넌트 기반의 구조(Component-Based)
      하나의 컴포넌트는 또다른 여러 개의 컴포넌트 조함으로 구성.
      장점 : 재사용성
         다른 모듈의 의존성을 낮추고 호환성 문제가 발생하지 않도록 개발
         개발 기간이 단축됨
         유지 보수가 용이함
   - Meta의 지원
   - 활발한 지식공유&커뮤니티
   - React Native로 모바일 앱 개발 가능
React 단점
 - 방대한 학습량
 - 높은 상태관리 복잡도

create-react-app : 리액트로 웹 애플리케이션을 개발하는데 필요한 모든 설정이 되어 있는 상태로 프로젝트를 생성해줌
실행 npx create-react-app <your-project-name>

