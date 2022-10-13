import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
const Header = () => {
  return (
    <div className='Header'>
      <header className='App-header'>
        <img src={logo} alt='App logo' className='img' />
      </header>
      <NavBar />
    </div>
  );
};
export default Header;







