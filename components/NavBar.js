import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect fixed='top' expand='sm' bg='light' variant='light' >
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav.Link className='text-dark fs-5' href='#'>CHASE4GOLD</Nav.Link>
                        <Nav className='navbar'>

                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/ListOfSports'>Sports</Nav.Link>
                            <Nav.Link href='/Facts'>Facts</Nav.Link>
                            <Nav.Link href='/AboutUs'>About Us</Nav.Link>
                            <Nav.Link href='/ContactUs'>Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

           
        </div>
    )
}

export default NavBar;
