import Header from "./components/Header";
import Home from "./components/Home";
import Skymap from "./components/Skymap";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Photos from "./components/Photos";
import News from "./components/News";
import { AuthContextProvider } from "./contexts/AuthContext";
import SignIn from "./components/SignIn";
import Chat from "./components/Chat";
import Events from "./components/Events";
import Event from "./components/Event";


function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/events" element={< Events />} />
            <Route path="/events/:id" element={< Event />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/skymap" element={<Skymap />} />
            <Route path="/news" element={<News />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
