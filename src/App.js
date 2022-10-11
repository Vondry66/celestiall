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
  );
}

export default App;
