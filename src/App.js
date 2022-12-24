import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatPage from "./page/ChatPage.js";
import LoginPage from "./page/LoginPage.js";
import MainPage from "./page/MainPage.js";
import "./style.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="login" element={<LoginPage />}></Route>
          <Route index element={<MainPage />}></Route>
          <Route path="detail" element={<ChatPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
