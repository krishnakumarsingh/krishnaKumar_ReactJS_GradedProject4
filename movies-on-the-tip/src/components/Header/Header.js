import { useState, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import "./Header.css";
import DataContext from '../../Context/Data';
import NoPage from "../pages/NoPage";
import Home from "../pages/Home";
import ComingSoon from "../pages/ComingSoon";
import MoviesInTheaters from "../pages/MoviesInTheaters";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    const user = useContext(DataContext);
    const [active, setActive] = useState('home');
    console.log(user);
    return (
        <>
            <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
            {/* <Nav
                variant="pills"
                activeKey={active}
                class="navbar navbar-expand-sm bg-light navbar-light"
                id="header"
                onSelect={(selectedKey) => setActive(selectedKey)}
            >{active}
                <Container>
                    <Navbar.Brand href="./"><span>Movies</span><span>On The Tip</span></Navbar.Brand>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul class="navbar-nav">
                        <Nav.Item>
                            <Nav.Link exact as={NavLink} href="/" eventKey="home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={NavLink} href="coming-soon" eventKey="Coming Soon">Coming Soon</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={NavLink} href="movies-in-theaters" eventKey="Movies In Theaters">Movies In Theaters</Nav.Link>
                        </Nav.Item>
                    </ul>
                    </Container>
            </Nav> */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/coming-soon" element={<ComingSoon />} />
                    <Route path="/movies-in-theaters" element={<MoviesInTheaters />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Header;