// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCVeqfwuOd40DwK1z64eHZ200fr3uFyF0",
  authDomain: "celestiall-f4d6d.firebaseapp.com",
  projectId: "celestiall-f4d6d",
  storageBucket: "celestiall-f4d6d.appspot.com",
  messagingSenderId: "549876388287",
  appId: "1:549876388287:web:103b9e5b67e0a27726110a",
  measurementId: "G-JHDQ36JB8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
     
      </header>
    </div>
  );
}

export default App;
