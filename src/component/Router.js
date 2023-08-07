import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstPage from "./FirstPage";
import RegisterPage from "./RegisterPage";
import RecievePage from "./RecievePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/RegisterPage/*" element={<RegisterPage />} />
        <Route path="/RecievePage/*" element={<RecievePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;