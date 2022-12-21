import React from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import ChatPage from "./page/ChatPage.js";
import LoginPage from "./page/LoginPage.js";
import MainPage from "./page/MainPage.js";
import "./style.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/detail",
    element: <ChatPage />,
  },
]);

export default function App() {
  // return <RouterProvider router={router} />;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<MainPage />}></Route>
          <Route path="detail/:id" element={<ChatPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
