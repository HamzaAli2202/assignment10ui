import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { OnePlus } from "./OnePlus";
import { Samsung } from "./Samsung";
import { Redmi } from "./Redmi";
import { Vivo } from "./Vivo";
import { Nav } from "./Nav";

export const Landing = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<OnePlus />} />
        <Route path="/sam" element={<Samsung />} />
        <Route path="/red" element={<Redmi />} />
        <Route path="/vivo" element={<Vivo />} />
      </Routes>
    </BrowserRouter>
  );
};
