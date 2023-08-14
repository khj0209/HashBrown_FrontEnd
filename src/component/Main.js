import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstPage from "./FirstPage";
import RegisterPage from "./RegisterPage";
import RecievePage from "./RecievePage";


// React 라우터를 사용하여 앱의 주요 경로를 관리하는 컴포넌트
const Main = () => {
  return (
    //BrowserRouter는 HTML5 히스토리 API를 사용하여 페이지를 새로 고치지 않고 UI를 업데이트함
    
    <BrowserRouter>

      {/* Routes 컴포넌트는 앱의 경로를 정의*/}
      <Routes>
        
        {/* Route 컴포넌트는 특정 경로에 어떤 컴포넌트가 렌더링될지 정의 */}
        <Route path="/" element={<FirstPage />} />
        {/* 루트 경로로 이동하면 FirstPage 컴포넌트가 렌더링됨 */}

        <Route path="/RegisterPage/*" element={<RegisterPage />} />
        {/* "/RegisterPage" 경로로 이동하면 RegisterPage 컴포넌트가 렌더링됨 */}

        <Route path="/RecievePage/*" element={<RecievePage />} />
        {/* "/RecievePage" 경로로 이동하면 RecievePage 컴포넌트가 렌더링됨 */}
      
      </Routes>
    </BrowserRouter>
  );
};

export default Main;