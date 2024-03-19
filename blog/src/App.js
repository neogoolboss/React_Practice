/* eslint-disable */

import { useState } from 'react';
import './App.css';

{/*변수를 넣을 땐 중괄호 사용 -> 데이터 바인딩 */}
{/*style을 넣을땐 style={{스타일명: '값'}} */}
{/* font-size가 아닌 fontSize로 표현 */}
{/*useState 사용 시 [a, b]
  a는 state에 보관한 자료, b는 state변경을 도와주는 함수 */}
{/* 일반 변수는 갑자기 변경되면 html에 자동으로 반영 안됨 */}
{/* state는 갑자기 변경되면 state 쓰던 html은 자동으로 재렌더링 됨 */}
{/* state 카피할 땐 [...기존state]으로 만들어서 수정하자.*/}
function App() {

  const [title, setTitle] = useState(['자바스크립트', 'HTML', '리액트']);
  const [goodNumber, setGoodNumber] = useState(0);
  
  function onClickHandler() {
    setGoodNumber(goodNumber + 1);
  }

  function onClickHandler2(){
    const copy = [...title];
    copy[0] = 'CSS';
    setTitle(copy);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>리액트연습</h4>
      </div>
      <div className='list'>
        <h4>{ title[0] } <span onClick={onClickHandler}>👍</span> {goodNumber} </h4> 
        <p>3월 19일 화요일</p>
      </div>
      <div className='list'>
        <h4>{ title[1] }</h4> 
        <p>3월 19일 화요일</p>
      </div>
      <div className='list'>
        <h4>{ title[2] }</h4> 
        <p>3월 19일 화요일</p>
      </div>
      <button onClick={onClickHandler2}>글 내용 수정</button>
    </div>
  );
}

export default App;
