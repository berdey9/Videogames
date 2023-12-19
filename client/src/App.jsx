import { useState } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Detail from "./Components/Detail/Detail";
import Form from "./Components/Form/Form";
import Home from "./Components/Home/Home";
import Landing from "./Components/Landing/landing";
import NavBar from "./Components/NavBar/NavBar";
function App() {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/" ? <NavBar /> : null}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
