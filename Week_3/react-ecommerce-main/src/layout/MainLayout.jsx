import React from "react";
import Header from "../component/common/Header";
import { Outlet } from "react-router-dom";
import Footer from "../component/common/Footer";

export default function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
