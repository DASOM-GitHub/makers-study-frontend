# 3주차

## State
React Component의 변경 가능한 데이터
개발자가 정의함
렌더링이나 데이터 흐름에 사용되는 값만 state에 포함시켜야 함. (그렇지 않은 값은 component에 인스턴스 필드로 정의)
- state가 변경될 경우 component가 재렌더링되기 때문에 렌더링과 데이터 흐름에 관련 없는 값을 포함하면 component가 다시 렌더링되어 성능을 저하시키기 때문임
JavaScript 객체
```
class LikeButton extends React.Component {
    constructor(props) {   //생성자
        super(props);

        this.state = {     //현재 component의 state를 정의
            liked: false
        };
    }
}
```
직접 수정할 수 없음 (하면 안 됨)
```
//state를 직접 수정 (잘못된 사용법)
this.state = {
    name: 'hyein'
};

//setState 함수를 통한 수정 (정상적인 사용법)
this.setState({
    name: 'hyein'
});
```
## Lifecycle
React component의 생명주기 (생성되는 시점과 사라지는 시점이 정해져 있다는 의미)
Component가 계속 존재하는 것이 아니라 시간의 흐름에 따라 생성되고 업데이트 되다가 사라짐
---
## Hooks
훅을 사용하면 함수 컴포넌트도 클래스 컴포넌트의 기능 구현 가능
원래 존재하는 기능에 마치 갈고리를 거는 것처럼 같이 수행되는 것을 의미
React의 state와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만든 것. 이때 실행되는 함수가 Hook
Hook의 이름은 use로 시작함

* useState()
- state를 사용하기 위한 Hook
- class component에선 setState() 하나로 모든 state 값을 업데이트할 수 있지만 useState()는 변수 각각에 대해 set함수가 따로 존재
- useState() 사용법
```
const [변수명, set함수명] = useState(초기값);
```
```
import React, { useState } from "react";

function Counter(props) {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={() => setCount(count + 1)}>
                클릭
            </button>
        </div>
    );
}
```

* useEffect()
- 리액트의 함수 컴포넌트에서 Side effect를 실행할 수 있게 해주는 Hook
+ Side effect가 React에선 그저 효과, 영향
+ effect라 불리는 이유는 다른 컴포넌트에 영향을 미칠 수 있으며, 렌더링 중에는 작업이 완료될 수 없기 때문. 렌더링이 끝나고 난 뒤에 실행되어야 할 작업들
- 클래스 컴포넌트에서 제공하는 componentDidMount(), componentDidUpdate(), componentWillUnmount()와 동일한 기능을 하나로 통합해서 제공
- useEffect() 사용법
```
useEffect(이펙트 함수, 의존성 배열);
```
- 의존성 배열
     + 이펙트가 의존하고 있는 배열
   + 배열 안에 있는 변수 중에 하나라도 값이 변경되었을 때 이펙트 함수 실행
   + 의존성 배열에 빈 배열로 넣으면 mount, unmount 시에 단 한 번씩만 실행됨
     + 의존성 배열을 생략하면 컴포넌트가 업데이트될 때마다 호출
- 이펙트 함수
     + 처음 컴포넌트가 렌더링된 이후와 업데이트로 인한 재렌더링 이후 실행
```
import React, { useState, useEffect } from "react";

function Counter(props) {
    const [count, setCount] = useState(0);

    //componentDidMount, componentDidUpdate와 비슷하게 작동합니다.
    useEffect(() => {  //의존성 배열 없이 사용하면 리액트는 DOM이 변경된 이후에 해당 이팩트 함수를 실행하라는 의미로 받아들임
        //브라우저 API를 사용해서 document의 title을 업데이트 합니다.
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={() => setCount(count + 1)}>
                클릭
            </button>
        </div>
    );
}
```
```
import React, { useState, useEffect } from "react";

function UserStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
    return () => {
      ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);  //컴포넌트가 unmount 될 때 호출됨
    };
  });

  if (isOnline === null) {
    return '대기 중...';
  }
  return isOnline ? '온라인' : '오프라인';
}
```
- 하나의 컴포넌트에 여러 개 사용 가능
```
useEffect(() => {
  // 컴포넌트가 마운트 된 이후,
  // 의존성 배열에 있는 변수들 중 하나라도 값이 변경되었을 때 실행됨
  // 의존성 배열에 빈 배열([])을 넣으면 마운트와 언마운트시에 단 한 번씩만 실행됨
  // 의존성 배열 생략 시 컴포넌트 업데이트 시마다 실행됨
  ...

  return () => {
    // 컴포넌트가 마운트 해제되기 전에 실행됨
    ...
  };
}, [의존성 변수1, 의존성 변수2, ...]);
```

* useMemo()
- Memoized value를 리턴하는 Hook
     + Memoization: 연산량이 많이 드는 함수의 호출 결과를 저장해두었다가 같은 입력값으로 함수를 호출하면 새로 함수를 호출하지 않고 이전에 저장했던 호출 결과를 바로 반환하는 것
- 결과 호출 시간이 짧고 컴퓨터 자원 덜 사용
useMemo() 사용법
```
const memoizedValue = useMemo(
  () => {
    // 연산량이 높은 작업을 수행하여 결과를 반환
    return computeExpensiveValue(의존성 변수1, 의존성 변수2);
  },
  [의존성 변수1, 의존성 변수2]
);
```
- 파라미터로 memorized Value를 받는 create함수와 의존성 배열을 받음
- 의존성 배열에 있는 변수가 변했을 경우에만 새로 create함수를 호출하여 결과 반환
- 그렇지 않을 경우 기존 함수의 결과 값 반환
- 컴포넌트가 재렌더링될 때마다 연산량이 높은 작업을 반복하는 것을 피해 빠른 렌더링 속도
- useMemo()로 전달된 함수는 렌더링이 일어나는 동안 실행
- 의존성 배열을 넣지 않을 경우, 매 렌더링마다 함수가 실행됨
- 의존성 배열이 빈 배열일 경우, 컴포넌트 마운트 시에만 호출

* useCallback()
- useMemo() Hook과 유사하지만 값이 아닌 함수를 반환
- 의존성 배열 값이 바뀐 경우에만 함수를 새로 정의해서 리턴
- useCallback() 사용법
```
const memoizedCallback = useCallback(
  () => {
    doSomething(의존성 변수1, 의존성 변수2);  //콜백
  },
  [의존성 변수1, 의존성 변수2]
);
```
  - useCallback()을 사용하지 않고 컴포넌트 내 함수를 정의한다면 렌더링될 때마다 함수가 새로 정의됨

`useCallback(함수, 의존성 배열);`, `useMemo(( )=>함수, 의존성 배열);`은 동일한 역할을 함

* useRef()
- Reference를 사용하기 위한 Hook
    + Reference: 특정 컴포넌트에 접근할 수 있는 객체
    + refObject.current    current는 현재 참조하고 있는 Element
useRef() 사용법
```
const refContainer = useRef(초깃값);
```
- 해당 초깃값으로 초기화된 레퍼런스 객체를 반환, 컴포넌트가 마운트 해제 전까지 유지
- 변경 가능한 current라는 속성을 가진 하나의 상자
```
function TextInputWithFocusButton(props) {
  const inputElem = useRef(null);

  const onButtonClick = () => {
    // `current`는 마운트된 input element를 가리킴
    inputElem.current.focus();
  };

  return (
    <>
      <input ref={inputElem} type="text" />
      <button onClick={onButtonClick}>
        Focus the input
      </button>
    </>
  );
}
```
- 클래스의 instance 필드를 사용하는 것과 유사하게 다양한 변수를 저장 가능. 일반적인 자바스크립트 객체를 리턴하기 때문
- 직접 current 속성이 포함된 객체를 만들어 사용하는 것과 달리 매번 렌더링 될 때마다 항상 같은 레퍼런스 객체를 반환
- 내부의 데이터가 변경되었을 때 별도로 알리지 않음. Current 속성을 변경해도 재렌더링X
---
## Hook의 규칙
Hook은 무조건 React 함수 컴포넌트의 최상위 레벨에서만 호출해야 함
- 반복문, 조건문, 중첩된 함수들 안에서 Hook 호출 불가
- 컴포넌트가 렌더링 될 때마다 매번 같은 순서 호출
리액트 함수 컴포넌트에서만 Hook을 호출해야 함
 - React 컴포넌트에 있는 state와 관련된 모든 로직은 소스 코드를 통해 명확하게 확인이 가능해야 함

* Custom Hook 만들기
- 여러 컴포넌트에서 반복적으로 사용되는 로직을 Hook으로 만들어 재사용하기 위해 만듦
- 이름이 use로 시작하고 내부에서 다른 Hook을 호출하는 하나의 자바스크립트 함수
```
import React, { useState, useEffect } from "react";

function UserStatus(props) {
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline);
        }

        ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
        return () => {
            ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
        };
    });

    if (isOnline === null) {
        return '대기중...';
    }
    return isOnline? '온라인' : '오프라인';
}
```
```
import React, { useState, useEffect } from "react";

function UserListItem(props) {
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline);
        }

        ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
        return () => {
            ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
        };
    });

    return (
        <li style={{color: isOnline? 'green' : 'black'}}>
            {props.user.name}
        </li>
    )
}
```
+ 중복되는 로직을 custom hook으로 추출
```
import React, { useState, useEffect } from "react";

function useUserStatus(userId) {
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline);
        }

        ServerAPI.subscribeUserStatus(userId, handleStatusChange);
        return () => {
            ServerAPI.unsubscribeUserStatus(userId, handleStatusChange);
        };
    });

    return isOnline;
}
```
-Custom Hook 사용하기
```
function UserStatus(props) {
    const isOnline = useUserStatus(props.user.id);

    if (isOnline === null) {
        return "대기중";
    }
    return isOnline ? "온라인" : "오프라인";
}

function UserListItem(props) {
    const isOnline = useUserStatus(props.user.id);

    return (
        <li style={{color: isOnline? 'green' : 'black'}}>
            {props.user.name}
        </li>
    );
}
```
- 여러 개의 컴포넌트에서 하나의 Custom Hook을 사용할 때 컴포넌트 내부에 있는 모든 state와 effects는 전부 분리되어 있음
- 각 Custom Hook의 호출 또한 완전히 독립적
- Hook들 사이에서 데이터를 공유하는 방법
```
const [userId, setUserId] = useState(1);
const isUserOnline = useUserStatus(userId);
```
---
## Handling Events
### Event
특정사건
```
//DOM의 Event
<button onclick=”activate()”>  //클릭 이벤트를 처리할 함수를 onclick을 통해서 전달
	Activate
</button>

//React의 Event
<button onClick={activate}>
	Activate
</button>
```
React에서는 이벤트의 이름을 카멜 표기법으로 작성
DOM에서는 이벤트를 처리할 함수를 문자열로 전달, React에서는 함수 그대로 전달
* Event Handler (Event Listener)
- 어떤 이벤트가 발생했을 때 해당 이벤트를 처리하는 함수
- 함수 컴포넌트 내부에서 이벤트 핸들러를 정의하는 방법
```
function Toggle(props) {
	const [istoggleOn, setIsToggleOn] = useState(true);
  
  // 방법 1. 함수 안에 함수로 정의
  function handleClick() {
  	setIsToggleOn((isToggleOn) => !isToggleOn);
  }
  
  // 방법 2. arrow function을 사용하여 정의
  const handleClick = () => {
  	setIsToggleOn((isToggleOn) => !isToggleOn);
  }
  
  return (
  	<button onClick={handleClick}>
      		{isToggleOn ? "켜짐" : "꺼짐"}
</button>
  );
}
```
- Arguments 전달하기
    + 함수(이벤트 핸들러)에 전달할 데이터
    + Parameter (매개변수)
```
//이벤트 핸들러에 매개변수를 전달
function MyButton(props) {
	const handleDelete = (id, event) => {
    		console.log(id, event.target);
    };
    
    return (
    	<button onClick={(event) => handleDelete(1, event)}>
삭제하기
</button>
    );
}
```

## Conditional Rendering
조건부 렌더링
어떠한 조건에 따라서 렌더링이 달라지는 것
조건문의 결과는 true 아니면 false
```
function UserGreeting(props) {
	return <h1>다시 오셨군요!</h1>;
}

function GuestGreeting(props) {
	return <h1>회원가입을 해주세요.</h1>;
}

function Greetring(props) {
	const isLoggedIn = props.isLoggedIn;
  
  if (isLoggedIn) {
  	return <UserGreeting />;
  }
  return <GuestGreeting />;
}
```
JavaScript의 Truthy와 Falsy
   - Trythy: true는 아니지만 true로 여겨지는 값
      + true
      + {} : empty object
      + [] : empty array
      + 42 : number, not zero
      + "0", "false" : string, not empty
   - false는 아니지만 false로 여겨지는 값
      + false
      + 0, -0 : zero, minus zero
      + 0n : BigInt zero
      + '', "", `` : empty string
      + null
      + undefined
      + NaN : Not a Number
   - Element Variables (엘리먼트 변수)
      + 렌더링 해야 될 컴포넌트(리액트의 엘리먼트)를 변수처럼 저장해서 사용
```
function LoginButton(props) {
	return (
  		<button onClick={props.onClick}>
      			로그인
      		</button>
  );
}

function LogoutButton(props) {
	return (
  		<button onClick={props.onClick}>
      			로그아웃
      		</button>
  );
}

function LoginControl(props) {
const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  	const handleLoginClick = () => {
  		setIsLoggedIn(true);
  	}
  
  	const handleLogoutClick = () => {
  		setIsLoggedIn(false);
  	}
  
  	let button;
  	if (isLoggedIn) {
  		button = <LogoutButton onClick = {handleLogoutClick} />;
 	 } else {
  		button = <LoginButton onClick = {handleLoginClick} />;
  	}
  
  	return (
  		<div>
      			<Greeting isLoggedIn = {isLoggedIn} />
          		{button}
      		</div>
  	)
}

Inline Conditions
  * 조건문을 코드 안에 집어넣는 것
* Inline if
- if문을 필요한 곳에 직접 넣어 사용하는 방법
    - 실제로 if문을 넣는 게 아닌, 동일한 효과를 내기 위해 && 연산자 사용
`true && expression -> expression`
`false && expression -> false`
- 단축평가 (Short-Circuit Evaluation)
```
{unreadMessages.length > 0 &&
	<h2>
    		현재 {unreadMessages.length}개의 읽지 않은 메세지가 있습니다.
    	</h2>
}
```
  * Inline If-Else
     - if-else문을 필요한 곳에 직접 넣어 사용
     - 조건문의 값에 따라서 다른 엘리먼트를 보여줄 때 사용
     - 삼항 연산자(?) 사용  `condition? True : false`
```
function UserStatus(props) {
	return (
    	<div>
        	이 사용자는 현재 <b>{props.isLoggedIn ? '로그인' : '로그인하지 않은'}</b> 상태입니다.
        </div>
    )
}
```
```
//문자열이 아닌 엘리먼트를 넣어도 됨
<Greeting isLoggedIn={isLoggedIn} />
{isLoggedIn
	? <LogoutButton onClick={handleLogoutClick} />
	: <LoginButton onClick={handleLogoutClick} />
}
```
Component 렌더링 막기
  * null을 리턴하면 렌더링 되지 않음
