import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Dogs from "./Dogs";
import Whiskey from "./Whiskey";
import Duke from "./Duke";
import Perry from "./Perry";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/dogs" element={<Dogs/>} />
        <Route path="/dogs/whiskey" element={<Whiskey/>} />
        <Route path="/dogs/duke" element={<Duke/>} />
        <Route path="/dogs/perry" element={<Perry/>} />
        <Route path="*" element={<Dogs/>} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
