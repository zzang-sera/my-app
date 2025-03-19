import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Library from './chapter_03/library';
//리액트는 index.js를 진입점으로 사용하므로 src에 있어야 함.



//index.html 안에 있는 <div id="root"></div>를 찾아서 React의 가상 DOM과 연결하는 과정
//document.getElementById('root') → HTML에서 <div id="root"></div> 요소를 찾음
//ReactDOM.createRoot(...) → 이 root 요소에 React 렌더링을 위한 Root를 생성
const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(...) → root 내 React 컴포넌트를 렌더링
root.render(
  <React.StrictMode>
    {/*react 돔을 사용해 root 돔 노드에 연결*/}
    <Library/>
    {/*
      App 컴포넌트를 최상위 요소로 렌더링합니다.
      React.StrictMode는 개발 중 잠재적인 문제를 감지하는 역할을 합니다.
    */}
    {/*<App /> {/* 여기에서 App 컴포넌트를 렌더링 */}
  </React.StrictMode>
);

