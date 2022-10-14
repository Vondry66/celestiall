import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from "./logo.png";
import { Link } from 'react-router-dom'
import {UserAuth} from '../contexts/AuthContext'


function NavBar() {
    const {user, logOut} = UserAuth()

    const handleSignOut = async () => {
        try {
            await logOut()
        }catch(error) {
            console.log(error)
        }
    }
    
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src={logo}
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                        />{' '}
                        CelestiALL
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/events">Events</Nav.Link>
                            <Nav.Link href="/photos">Photos</Nav.Link>
                            <Nav.Link href="/skymap">Sky Map</Nav.Link>
                            <Nav.Link href="/news">News</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                            
                        </Form>
                        
                        <Navbar.Text>
                            {user?.displayName ? <Button onClick={handleSignOut}>Log Out?</Button> : <Link to={'/signin'}><Button className="user" >Sign in</Button></Link>}
                            <div>
                            <p>Welcome {user?.displayName} </p>
                            </div>
                        </Navbar.Text>
                    </Navbar.Collapse>
                    </Container>
            </Navbar>
        </>
    );
}

export default NavBar;