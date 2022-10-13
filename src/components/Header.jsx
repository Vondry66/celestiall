import logo from "./logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar";
import { signInWithGoogle } from "../firebase-config";
const Header = () => {
  return (
    <div className="Header">
      <header className="App-header">
        <img src={logo} alt="App logo" className="img" />
        <Button> Create profile </Button>
        <button className="user"> user</button>
        <NavBar />
      </header>
    </div>
  );
};

export default Header;
