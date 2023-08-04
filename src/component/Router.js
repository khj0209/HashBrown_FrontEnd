import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstPage from "./FirstPage";
import RegisterPage from "./RegisterPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/RegisterPage/*" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;