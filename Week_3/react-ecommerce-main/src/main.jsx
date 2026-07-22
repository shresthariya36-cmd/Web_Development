import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { mainRoute } from "./route/mainRoute";
import PageNotFound from "./component/pages/PageNotFound";
import MainLayout from "./layout/MainLayout";

createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {mainRoute.map((ele, ind) => (
            <Route path={ele.path} element={<ele.component />} />
          ))}
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter >
  </>,
);