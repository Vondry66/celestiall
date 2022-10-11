import logo from "/home/hedie/northcoders/celestiall/src/components/logo.png";
const Header = () => {
  return (
    <div className="Header">
      <header className="App-header">
        <img src={logo} alt="App logo" className="img" />
        <button> Create profile </button>
        <button className="user"> user</button>
      </header>
    </div>
  );
};

export default Header;
