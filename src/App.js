
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";
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
    <div className="App">
      <header className="App-header">
        <button> Create profile </button>
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
      </header>
    </div>
  );
}

export default App;
