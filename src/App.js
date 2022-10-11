import Header from "./components/Header";
import Home from "./components/Home";
import Skymap from "./components/Skymap";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Photos from "./components/Photos";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Home />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/skymap" element={<Skymap />} />
          <Route path="/news" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
