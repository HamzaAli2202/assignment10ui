import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Customers } from "./Customers";
import { Employees } from "./Employees";
import { Students } from "./Students";
import { Teachers } from "./Teachers";
import { Nav11 } from "./Nav11";
import { Classes } from "../practice261023/Classes";
import { Dvis } from "../practice261023/Divs";
import { Allstudents } from "../practice261023/Allstudents";
import { Houses } from "../practice261023/Houses";

export const Landing11 = () => {
  return (
    <BrowserRouter>
      <Nav11 />
      <Routes>
        <Route path="/" element={<Customers />} />
        <Route path="/emp" element={<Employees />} />
        <Route path="/tea" element={<Teachers />} />
        <Route path="/std" element={<Students />} />
        <Route path="/cls" element={<Classes />} />
        <Route path="/divs" element={<Dvis />} />
        <Route path="/allstd" element={<Allstudents />} />
        <Route path="/house" element={<Houses />} />
      </Routes>
    </BrowserRouter>
  );
};
