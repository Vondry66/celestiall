import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from "./logo.png";
import { Link } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext';


function NavBar() {
    const { user, logOut } = UserAuth();

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" className='navbar'>
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src={logo}
                            width="auto"
                            height="100%"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link className='nav-link' href="/">Home</Nav.Link>
                            <Nav.Link className='nav-link' href="/events">Events</Nav.Link>
                            <Nav.Link className='nav-link' href="/photos">Photos</Nav.Link>
                            <Nav.Link className='nav-link' href="/skymap">Sky Map</Nav.Link>
                            <Nav.Link className='nav-link' href="/news">News</Nav.Link>
                            <Nav.Link className='nav-link' href="/chat">Chat</Nav.Link>
                        </Nav>

                        <Navbar.Text className='nav-link'>
                            {user?.displayName ? <Button variant='outline-light' onClick={handleSignOut}>Log Out</Button> : <Link to={'/signin'}><Button className="user" variant='outline-light' >Log in</Button></Link>}
                            <div>
                                <p id='welcome'>Welcome {user?.displayName} </p>
                            </div>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;