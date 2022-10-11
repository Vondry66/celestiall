import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Skymap from "./components/Skymap";

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
  );
}

export default App;
