# 1~3섹션

- **HTML (Hyper Text Markup Language)**
    - 웹사이트의 뼈대(구조)를 구성하기 위해 사용하는 마크업 언어
    - 태그
        
        ```html
        <html> <!-- 시작과 끝을 알리는 태그 -->
        		<head> <!-- 머리 (속성) -->
        			<title> 제목 </title>
        		</head>
        		<body> <!-- 몸통 (실제 보이는 콘텐츠) -->
        		</body>
        </html>
        ```
        
        - SPA (Single Page Application)  
          ⇒ 하나의 페이지만 존재하는 웹사이트 or 앱 (html태그 1개)

- **CSS (Cascading Style Sheets)**
    - 웹사이트의 레이아웃, 글꼴, 색상 등을 디자인

- **JavaScript (ECMAScript)**
    - 프로그래밍 언어 (런타임에 실행)
    - 웹사이트가 동적으로 움직이도록 해줌
    - ES6 : 2015년 표준 버전
    
    - 자료형 ⇒ 동적 타이핑 방식 사용 / 자료형 대신 var, let 사용
    - 연산자
        - 대입 연산자 ⇒ a = b ( b를 a에 대입 )
        - 산술 연산자 ⇒ + , - , / , * , %, **
        - 증감 연산자 ⇒ ++ , --
        - 관계(비교) 연산자 ⇒ < , >, <=, >=
        - 동등 연산자 ⇒ == , !=
        - 일치 연산자 ⇒ === (값과 자료형 모두 같은가)
        - 이진 논리 연산자 ⇒ && , ||
        - 조건부(삼항) 연산자 ⇒ 조건식 ? true일 경우 : false일 경우
    - 함수
        
        ```jsx
        function sum(a,b) { return a + b; }
        const sum = (a,b) => { return a + b; } //화살표함수
        console.log(sum(10,20)); //함수호출
        ```
        
        - 파라미터, 인자 ⇒ 입력
    
    ---
    
- Node.js 설치 후 버전 확인
    - 터미널 → node --version → npm --version
- VSCode 설치 실행 → terminal → new terminal

- **리액트**
    - 사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리
        - 라이브러리 : 자주 사용되는 것들을 잘 모아서 정리해 놓은 것(제어 권한 → 개발자)
        - UI : 사용자와 웹사이트 간의 입출력을 제어 해주는 것
    - SPA를 쉽고 빠르게 만들 수 있도록 도와줌
    - 장점
        - 빠른 업데이트&렌더링 속도
            virtual DOM 사용 → 최소한의 부분만 업뎃
        - 재사용성 
        ⇒ 다른 모듈의 의존성 down, 호환성 문제 발생 주의하여 개발 (개발 기간 단축, 유지 보수 용이)
        - 활발한 지식 공유 &커뮤니티
        - 모바일 앱 개발 가능 (React Native)
    - 단점
        - 방대한 학습량
        - 잦은 업데이트 (새로 공부해야 함)
        - 상태 관리 복잡

---

- 기존에 있는 웹사이트에 리액트 적용하기
    - index.html
        
        ```html
        <html>
            <head>
                <title>소플의 블로그</title>
                <link rel="stylesheet" href="styles.css">
            </head>
            <body>
                <h1>소플의 블로그에 오신 여러분을 환영합니다!</h1>
                <div id="root"></div>
        
                <!-- 리액트 가져오기 -->
                 <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
                 <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
        
                 <!-- 리액트 컴포넌트 가져오기 -->
                  <script src="MyButton.js"></script>
            </body>
        </html>
        ```
        
    - MyButton.js
        
        ```jsx
        function MyButton(props){
            const [isClicked, setIsClicked] = React.useState(false);
        
            return React.createElement(
                'button',
                { onClick: () => setIsClicked(true) },
                isClicked ? 'Clicked!' : 'Click here!'
            )
        }
        
        const domContainer = document.querySelector('#root');
        ReactDOM.render(React.createElement(MyButton), domContainer);
        ```
        
- create-react-app으로 개발
    - npx 명령어로 실행 가능
        - $ npx crate-react-app my-app → cd my-app → npm start
            - 엄청 많은 error가 난다. → copilot에 물어보면서 이것저것 해도 안됐는데 다시 찾아서 package.json 파일에 react, react-dom 버전을 18로 낮추고, web-vitals를 install하니까 실행 됐다.