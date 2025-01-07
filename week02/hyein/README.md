# 2주차

## JSX
자바스크립트 확장 문법(A syntax extension to Javascript )
JavaScript + XML, HTML
* JSX 역할
  - 내부적으로 XML, HTML 코드를 자바스크립트로 변환하는 과정을 거침.
  - JSX로 코드를 작성해도 최종적으로 JS 코드가 나오게 됨
  - JSX를 JavaScript로 변환하는 것 : React.createElement ( type, [props], […children] )
     + React.createElement ( type, [props], […children] )  - 객체 생성
       - type : element의 타입. HTML 태그 이름이 문자열로 들어가거나 또다른 리액트 컨퍼넌트
       - props : 속성
       - children : 현재 엘리먼트가 포함하고 있는 자식 엘리먼트
* React에서 JSX를 쓰는 것이 필수는 아니지만 JSX를 사용하는 것이 편리

* JSX 장점
  - 간결한 코드
  - 가독성 향상 -> 버그를 발견하기 쉬움
  - Injection Attacks 방어 -> 보안성 향상
    + Injection Attacks : 입력창에 소스코드를 입력하여 해당 코드가 실행되도록 만드는 해킹 방법
* JSX 사용법
  - 모든 JavaScript 문법 지원. 여기에 XML, HTML을 섞어서 사용<br>
   ` … XML / HTML  { JavaScript 코드 } … XML / HTML`
  - 태그의 속성(attribute)에 값을 넣는 방법
      + 큰따옴표 사이에 문자열을 넣기
      + 중괄호 사이에 자바스크립트 코드를 넣기
* JSX 실습
```
import React from "react";

function Book(props) {
    return (
        <div>
            <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
            <h2>{`이 책은 총 ${props.numOfPage}페이지로 이뤄져 있습니다.`}</h2>
        </div>
    )
}

export default Book;
```

```
import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        <div>
            <Book name="처음 만난 파이썬" numOfPage={300}/>
            <Book name="처음 만난 AWS" numOfPage={400}/>
            <Book name="처음 만난 리액트" numOfPage={500}/>
        </div>
    )
}

export default Library;
```
***
## Element<br>
Elements are the smallest building blocks of React apps<br>
리액트 앱을 구성하는 가장 작은 블록들<br>
* React Elements와 DOM Elements
  - React Elements는 Virtual DOM에 존재
  - DOM Elements는 Browser DOM에 존재
  - React Elements는 DOM Elements의 가상 표현
  - DOM Elements는 React Elements보다 많은 정보를 담고 있어 상대적으로 크고 무거움
  - React Elements을 렌더링 -> DOM Elements
Elements는 화면에서 보이는 것들을 기술<br>
  * Elements의 생김새
      - React Elements는 자바스크립트 객체 형태로 존재. 이 객체는 불변성을 가짐
      - React Elements를 렌더링하면 DOM Elements가 됨
      - 컴포넌트 렌더링을 위해서 모든 컴포넌트가 createElement 함수를 통해 Element로 변환됨

* Elements의 특징
   - React elements are immutable. – 불변성
      + Elements 생성 후에는 children이나 attributes 변경 불가능
      + Component가 붕어빵 틀, Element가 붕어빵
      + 화면에 새로운 Element를 보여주기 위해선 Element를 새로 만들어 기존 Element가 연결되어 있는 곳에 바꾸어 연결
* Elements 렌더링하기
   - Root DOM Node
```
   <div id=”root”></div>
```
   - Div 태그 안에 React Elements가 렌더링 됨
   - React DOM에 의해 관리됨
   - React만으로 만들어진 모든 웹사이트들은 단 하나의 Root DOM Node만을 가짐
   - 기존 웹에 추가적으로 React를 연동하면 여러 개의 Root DOM Node를 가질 수 있음
* 렌더링된 Elements를 업데이트 하기
   - Element의 불변성 때문에 업데이트 하기 위해선 Element를 새로 생성해야 함

* 시계 만들기 실습
```
import React from "react";

function Clock(props) {
    return (
        <div>
            <h1>안녕, 리액트!</h1>
            <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
        </div>
    )
}

export default Clock;
```
***
## Components and Props<br>
붕어빵 틀: Component<br>
붕어빵 재료: props<br>
붕어빵: Element<br>

### Component
JavaScript function이 입출력을 받는 것처럼 React component도 입출력을 받음<br>
React component의 입력: props<br>
React component의 출력: React element<br>
즉 React component는 만들고자 하는 대로 속성을 입력하면 해당 속성에 맞춰 화면에 나타날 element를 만듦<br>

### props<br>
Property<br>
Component의 속성<br>
컴포넌트에 전달할 다양한 정보를 담고 있는 자바스크립트 객체<br>
* Props의 특징
   - Read-Only (읽기만 가능, 값 변경 불가)
     + 다른 props를 입력하려면 새로운 값을 Component에 전달하여 새로 Element생성
   - 모든 리액트 컴포넌트는 props를 직접 바꿀 수 없고, 같은 props에 대해서는 항상 같은 결과를 보여줄 것

* Props 사용법
   -JSX
```
function App(props) {
    return (
        <Profiler 
            name="혜인"
            introduction="안녕하세요, 혜인입니다."
            viewCount={1500}
        />
    )
}
```
```
{
Name: "혜인",
Introduction: "안녕하세요, 혜인입니다.",
viewCount: 1500
}   //props는 자바스크립트 객체
```
   - createElement
```
React.createElement(
	Profile,
	{
	Name: "혜인",
Introduction: "안녕하세요, 혜인입니다.",
viewCount=1500
	},
	null
)
```
* Component 만들기
   - Component 종류
      + Function Component
```
function Welcome(props) {
	return <h1>안녕, {props.name}</h1>;
}
```
   + Class Component
```
class Welcome extends React.Component {
    render() {
        return <h1>안녕, {this.props.name}</h1>;
    }
}
```

   - Component 이름은 항상 대문자로 시작해야 함. 소문자로 시작하면 DOM 태그로 인식
```
const element = <div />;  //HTML div 태그로 인식
```
```
const element = <Welcome name=”인제” />;  //Welcome이라는 React Component로 인식
```

   - Component 렌더링
```
function Welcome(props) {
    return <h1>안녕, {props.name}</h1>
}

const element = <Welcome name="인제" />;
ReactDOM.render(
    element,
    document.getElementById('root')
)
```

* Component 합성
   - 여러 개의 Component를 합쳐서 또다른 Component를 만드는 것
```
function Welcome(props) {
    return <h1>안녕, {props.name}</h1>
}

function App(props) {
    return (
        <div>
            <Welcome name="Mike" />
            <Welcome name="Steve" />
            <Welcome name="Jane" />
        </div>
    )
}

ReactDOM.render(
    <App />
    document.getElementById('root')
);
```

* Component 추출
   - 큰 Component에서 일부 추출해서 새로운 Component를 만드는 것
   - 재사용성 증가
   - 개발 속도 증가
```
function Comment(props) {
    return (
        <div className="comment">
            <div className="use-info">
                <img className="avatar"
                    src={props.author.avatarUrl} 
                    alt={props.author.name} />
                <div className="user-info-name">
                    {props.author.name}
                </div>
            </div>

            <div className="comment-text">
                {props.text}
            </div>

            <div className="comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}
```
```
//1.avatar 추출
function Avatar(props) {
    return (
        <img className="avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}/>
    );
}

function Comment(props) {
    return (
        <div className="comment">
            <div className="use-info">
                <Avatar user={props.author} />
                <div className="user-info-name">
                    {props.author.name}
                </div>
            </div>

            <div className="comment-text">
                {props.text}
            </div>

            <div className="comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}
```
```
//2. UserInfo 추출
function UserInfo(props) {
    return (
        <div className="use-info">
            <Avatar user={props.author} />
            <div className="user-info-name">
                {props.author.name}
            </div>
        </div>
    )
}

function Comment(props) {
    return (
        <div className="comment">
            <UserInfo user={props.author} />
            <div className="comment-text">
                {props.text}
            </div>

            <div className="comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}
```
