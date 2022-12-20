import React from "react";
import { Routes, Route } from "react-router";
import { PageLogin } from "../pages/Auth/Login";
import { PageRegister } from "../pages/Auth/Register/Register";
import { PageRegisterType } from "../pages/Auth/Register/RegisterType";
import { RegisterContent } from "../pages/Content/Register";
import { HomeScreen } from "../pages/Home";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLogin />} />
      <Route path="/register" element={<PageRegister />} />
      <Route path="/registerType" element={<PageRegisterType />} />
      <Route path="/home" element={<HomeScreen />} />
      <Route path="/registerContent" element={<RegisterContent />} />
    </Routes>
  );
};

export default Routers;
