# 4~6섹션

### JSX (A syntax extension to JavaScript)

- 자바스크립트의 확장 문법 → JavaScript + XML/HTML
    
    ```jsx
    const element = <h1>Hello, world!</h1>;
    ```
    
- JSX로 작성을 해도 최종적으로는 JavaScript코드로 나옴 (React.createElement 함수)
    
    ```jsx
    const element = (
    	<h1 className="greeting">
    			Hello, world!
    	</h1>
    ) // JSX를 사용한 코드
    
    const element = React.createElement(
    	'h1',
    	{ className: 'greeting },
    	'Hello, world!'
    ) // JSX를 사용하지 않은 코드
    
    	const element = {
    			type: 'h1', //태그들, 다른 컴포넌트들
    			props: {  //속성
    					className: 'greeting',
    					children: 'Hello, world!' //자식 엘리먼트
    			}
    	} // React.createElement()의 결과로 위 객체 생성됨
    ```
    
- 리액트에서 JSX 사용이 필수는 아니지만 장점들이 많아 편리하다.

- ***장점***
    - 간결한 코드
    - 가독성 향상
        - 개발 | 유지 보수 관점에서도 중요
        - 버그 발견 쉬움
    - Injection Attacks 방어 (보안성 up)
        - 입력 창에 실행 코드를 입력하여 실행되게 만드는 해킹 방법
- ***사용법***
    - 자바스크립트 + XML/HTML
    - XML/HTML 사이에 자바스크립트 변수/함수를 넣으려면 { } 안에 넣어준다.
    - 태그의 속성에 값을 넣기 → **“** 문자열 **“**  or  **{** 자바스크립트 코드 **}**
    - children(자식) 정의가 직관적임

- my-app → src → 새 폴더 chapter_03 생성 → 새 파일 Book.jsx 생성
    
    ```jsx
    import React from "react";
    
    function Book(props) {
        return (
            <div>
                <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
                <h2>{`이 책은 총 ${props.numOfPage}페이지로 이뤄져 있습니다.`}</h2>
            </div>
        );
    }
    
    export default Book;
    ```
    
- Book의 상위 컴포넌트 Library.jsx 생성
    
    ```jsx
    import React from "react";
    import Book from "./Book";
    
    function Library(props) {
        return (
            <div>
                <Book name="처음 만난 파이썬" numOfPage={300} />
                <Book name="처음 만난 AWS" numOfPage={400} />
                <Book name="처음 만난 리액트" numOfPage={500} />
            </div>
        );
    }
    
    export default Library;
    ```
    
- index.js 파일 수정
    
    ```jsx
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './index.css';
    import App from './App';
    import reportWebVitals from './reportWebVitals';
    
    import Library from './chapter_03/Library'; //수정
    
    /*ReactDOM.render( //수정
      <React.StrictMode>
        <Library />  //수정
      </React.StrictMode>,
      document.getElementById('root') //추가
    ); --> 안돼서 아래 코드로 변경 */ 
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <Library />
      </React.StrictMode>
    );
    
    reportWebVitals();
    ```
    
- 새 터미널 열고 `npm start`

---

### Elements ⇒ 요소

- 리액트 앱을 구성하는 가장 작은 블록들
- DOM Elements 
  ⇒ html요소 (Browser DOM), 상대적으로 크고 무겁
- **리액트 Elements** 
  ⇒ virtual DOM에 있는 Elements (DOM Elements의 가상표현) , 
       화면에서 보이는 것들을 기술
    - 자바스크립트 객체 형태로 존재 (변경 불가 )
    - 컴포넌트 렌더링(rendering)을 하기 위해선 모든 컴포넌트가 createElement 함수를 통해 Elements로 변환된다!
    - ***특징***
        - 불변성(immutable)
            - Elements 생성 후에는 children, attributes를 바꿀 수 없다.
            - 그러므로 Elements 업데이트를 하기 위해서는 새로운 Elements를 만들어야 함

### **렌더링**

- virtual DOM → Browser DOM으로 이동하는 과정
- Root DOM Node
    
    ```jsx
    <div id="root"></div>
    // 위 div태그 안에 리액트Elements들이 렌더링 됨
    // div태그 안에 있는 모든 것이 리액트DOM에 의해 관리
    ```
    
- element생성 → root div에 렌더링 하는 코드
    
    ```jsx
    const element = <h1>안녕, 리액트!</h1>;
    ReactDOM.render(element, document.getElementById('root'));
    // 첫 번째 파라미터 -> 두 번째 파라미터(DOM Elements)에 렌더링
    ```
    

- my-app → src → 새 폴더 chapter_04 생성 → 새 파일 Clock.jsx 생성
    
    ```jsx
    import React from "react";
    
    function Clock(props) {
        return (
            <div>
                <h1>안녕, 리액트!</h1>
                <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
            </div>
        );
    }
    
    export default Clock;
    ```
    
    - index.js 파일 수정
        
        ```jsx
        import React from 'react';
        import ReactDOM from 'react-dom/client';
        import './index.css';
        import App from './App';
        import reportWebVitals from './reportWebVitals';
        
        import Library from './chapter_03/Library'; //수정
        import Clock from './chapter_04/Library';
        
        /*setInterval( () => {
          ReactDOM.render(
            <React.StrictMode>
              <Clock />
            </React.StrictMode>,
            document.getElementById('root')
          )
        }, 1000); --> 안돼서 아래 코드로 변경 */
        
        const root = ReactDOM.createRoot(document.getElementById('root'));
        setInterval(() => {
          root.render(
            <React.StrictMode>
              <Clock />
            </React.StrictMode>
          );
        }, 1000);
        
        reportWebVitals();
        ```
        
        - 새 터미널 열고 `npm start`

---

### **Components**

- 자바스크립트의 함수와 비슷하지만
- 입력 = props , 출력 = React element
    - 속성들을 입력 받아 React element로 출력 해준다. (객체 지향과 비슷한 개념)
- ***종류***
    - Function Component  (간단)
        
        ```jsx
        function Welcome(props) {
        	return <h1>안녕, {props.name}</h1>;
        }
        ```
        
    - Class Component
        
        ```jsx
        class Welcome extends React.Component {
        	render() {
        		return <h1>안녕, {this.props.name}</h1>;
        	}
        }
        ```
        
- ***이름***
    - 항상 대문자로 시작해야 한다. (소문자로 시작하면 dom태그로 인식함)
    - 예시
        
        ```jsx
        const element = <div />; //HTML div 태그로 인식
        const element = <Welcome name="인제" />; //Welcome이라는 리액트 Component로 인식
        ```
        
    - 예시 *렌더링*
        
        ```jsx
        function Welcome(props) { //props => {name:"인제"}
        	return <h1>안녕, {props.name}</h1>;
        }
        
        const element = <Welcome name="인제" />;
        ReactDOM.render(
        	element,
        	document.getElementById('root')
        );
        ```
        
- ***합성***
    - component 안에 다른 component 작성 가능
        - 복잡한 화면을 여러 component로 나눠서 구현 가능
    - 기능 단위로 재사용이 가능하게 추출하는 것이 좋음
- ***추출***
    - 합성과 반대로 복잡한 component를 쪼개서 여러 component로 나눔 (재사용성, 개발속도 up)
    1. Avatar 추출 
        - 예시
            
            ```jsx
            function Comment(props) {
            	return (
            		<div className="comment">
            			<div className="user-info">
            				 /*<img className="avatar"
            					src={props.author.avatarUrl}
            					alt={props.author.name}
            				/> 추출 */
            				<Avatar user={props.author} /> // 적용
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
            
            props = {
            	author: {
            		name: "소플",
            		avatarUrl: "https://...",
            	},
            	text: "댓글입니다.",
            	date: Date.now(),
            }
            ```
            
            ```jsx
            //추출
            function Avatar(props) {
            	return (
            		<img className="avatar"
            			src={props.user.avatarUrl}
            			alt={props.user.name}
            		/>
            	);
            }
            /* author 대신 보편적인 user 사용 */
            ```
            
    2. UserInfo 추출 
        - 예시
            
            ```jsx
            function Comment(props) {
            	return (
            		<div className="comment">
            			/* <div className="user-info">
            				<Avatar user={props.author} />
            				<div className="user-info-name">
            					{props.author.name}
            				</div>
            			</div> 추출 */
            			<UserInfo user={props.author} /> // 적용
            			<div className="comment-text">
            				{props.text}
            			</div>
            			<div className="comment-date">
            				{formatDate(props.date)}
            			</div>
            		</div>
            	);
            }
            
            props = {
            	author: {
            		name: "소플",
            		avatarUrl: "https://...",
            	},
            	text: "댓글입니다.",
            	date: Date.now(),
            }
            ```
            
            ```jsx
            function UserInfo(props) {
            	return (
            		<div className="user-info">
            				<Avatar user={props.user} />
            				<div className="user-info-name">
            					{props.user.name}
            				</div>
            	);
            }
            /* author 대신 보편적인 user 사용 */
            ```
            
    

### **Props (Property)**

- component의 속성
- components에 전달할 다양한 정보를 담고 있는 자바스크립트 객체
- ***특징***
    - Read-Only : 값 변경 불가
        - 같은 props ⇒ 항상 같은 element
    - 다른 값을 가진 component를 만들려면 새로운 값을 전달하여 새로운 element 생성
- ***사용법***
    - JSX  (실제 사용)
        
        ```jsx
        function App(props) {
        	return (
        		<Profile
        				name="소플"
        				introducion="안녕하세요, 소플입니다."
        				viewCount={1500} /* {}안에 있는 것은 자바스크립트 문법*/
        		/>
        	);
        }
        ```
        
    - createElement (참고)
        
        ```jsx
        React.creatElement(
        	Profile,
        	{
        		name: "소플",
        		introducion: "안녕하세요, 소플입니다.",
        		viewCount: 1500
        	},
        	null //하위 컴포넌트가 없기 때문에 children = null
        );
        ```
        

- my-app → src → 새 폴더 chapter_05 생성 → 새 파일 Comment.jsx 생성
    
    ```jsx
    import React from "react";
    
    function Comment(props) {
        return (
            <div>
                <h1>제가 만든 첫 컴포넌트입니다.</h1>
            </div>
        );
    }
    
    export default Comment;
    ```
    
    - 새 파일 CommentList.jsx 생성
        
        ```jsx
        import React from "react";
        import Comment from "./Comment";
        
        function CommentList(props) {
            return (
                <div>
                    <Comment />
                </div>
            );
        }
        
        export default CommentList;
        ```
        
    - index.js 파일 수정
        
        ```jsx
        import React from 'react';
        import ReactDOM from 'react-dom/client';
        import './index.css';
        import App from './App';
        import reportWebVitals from './reportWebVitals';
        
        import Library from './chapter_03/Library'; //수정
        import Clock from './chapter_04/Library';
        
        /*ReactDOM.render(
          <React.StrictMode>
            <CommentList />
          </React.StrictMode>,
          document.getElementById('root')
        ); 안돼서 아래 코드로 변경*/ 
        
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
          <React.StrictMode>
            <CommentList />
          </React.StrictMode>
        );
        
        reportWebVitals();
        ```
        
        - 새 터미널 열고 `npm start`
- Comment.jsx에 CSS 추가 + 코드 변경
    
    ```jsx
    const styles = {
        wrapper: {
            margin: 8,
            padding: 8,
            display: "flex",
            flexDirection: "row",
            border: "1px solid grey",
            borderRadius: 16,
        },
        imageContainer: {},
        image: {
            width: 50,
            height: 50,
            borderRadius: 25,
        },
        contentContainer: {
            marginLeft: 8,
            display: "flex",
            flexDirection: "column",
            jsutifyContent: "center",
        },
        nameText: {
            color: "black",
            fontSize: 16,
            fontWeight: "bold",
        },
        commentText: {
            color: "black",
            fontSize: 16,
        },
    }; //추가
    
    function Comment(props) {
        return (
            <div style={styles.wrapper}>
                <div style={styles.imageContainer}>
                    <img    
                        src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                        style={styles.image}    
                    />
                </div>
    
                <div style={styles.contentContainer}>
                    <span style={styles.nameText}>이인제</span>
                    <span style={styles.commentText}>
                        제가 만든 첫 컴포넌트입니다.
                    </span>
                </div>
            </div>
        );
    } //변경 (사람모양 프로필 이미지를 보여주고 댓글 작성자의 이름과 댓글 내용을 보여주도록)
    ```
    
- 작성자 이름, 댓글 내용 동적으로 바뀌도록
    
    ```jsx
    Comment.jsx
    /*<span style={styles.nameText}>이인제</span>
    <span style={styles.commentText}>
    	제가 만든 첫 컴포넌트입니다.
    </span> 수정*/
    
    <span style={styles.nameText}>{props.name}</span>
    <span style={styles.commentText}>{props.comment}</span>
    
    CommentList.jsx
    /*<Comment /> 추가*/
    
    <Comment name={"이인제"} comment={"안녕하세요, 소플입니다."} />
    
    <Comment name={"유재석"} comment={"리액트 재미있어요~!"} />
    // 새로 추가가능
    ```
    
- 데이터를 별도의 객체로 분리
    
    ```jsx
    CommentList.jsx 수정
    const comments = [
        {
            name: "이인제",
            comment: "안녕하세요, 소플입니다."
        },
        {
            name: "유재석",
            comment: "리액트 재미있어요~!"
        },
        {
            name: "강민경",
            comment: "저도 리액트 배워보고 싶어요!!"
        },
    ] // 배열 안 객체의 수만큼 화면에 렌더링 됨
    
    function CommentList(props) {
        return (
            <div>
                {comments.map((comment) => {
                    return(
                        <Comment name={comment.name} comment={comment.comment} />
                    );
                })}
            </div>
        );
    }
    ```