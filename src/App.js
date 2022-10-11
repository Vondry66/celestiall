import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [profile, setProfile] = useState([]);
  const profileCollectionRef = collection(db, "Profile");
  useEffect(() => {
    const getProfiles = async () => {
      const data = await getDocs(profileCollectionRef);
      setProfile(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProfiles();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ol>
          {profile.map((prof) => {
            return (
              <li>
                {prof.name}
                {prof.email}
              </li>
            );
          })}
        </ol>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Home />} />
          <Route path="/photos" element={<Home />} />
          <Route path="/skymap" element={<Home />} />
          <Route path="/news" element={<Home />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
