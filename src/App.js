<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";
import Header from "./components/Header";
import Home from "./components/Home";
import "./App.css";
import { Route,Routes } from "react-router-dom";
import Photos from "./components/Photos";

function App() {
  
;

  return (
    <div className="App">
      <Header />
      <Home />
      <Routes><Route path = "/photos" element = {Photos}></Route>
        </Routes>
    </div>
=======
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase-config';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Skymap from './components/Skymap';
=======
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Skymap from "./components/Skymap";
>>>>>>> 78e9cd0eb60eda989cf39d260bf5e30d29f205cb

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Home />} />
          <Route path="/photos" element={<Home />} />
          <Route path="/skymap" element={<Skymap />} />
          <Route path="/news" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
>>>>>>> 407d14b34246b4b22e4f56c59d04ed7650b6942a
  );
}

export default App;
