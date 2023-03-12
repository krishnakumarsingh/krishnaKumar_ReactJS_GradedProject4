import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Badge } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import "./style.css";

export default function Header({ searchData, moviesList }: { searchData: any, moviesList?: number }) {
    const [activeKey, setActiveKey] = useState("home");
    const [searchText, setSearchText] = useState<string>("");
    const [curentPage, setCurrentPage] = useState<string>("");
    useEffect(() => {
        const comingSoonUrl = window.location.pathname.match(/^\/coming-soon/) ? "active" : "";
        const moviesInTheatersUrl = window.location.pathname.match(/^\/movies-in-theaters/) ? "active" : "";
        const topRatedIndianUrl = window.location.pathname.match(/^\/top-rated-indian/) ? "active" : "";
        const topRatedMoviesUrl = window.location.pathname.match(/^\/top-rated-movies/) ? "active" : "";
        
        setCurrentPage(
            comingSoonUrl ? "coming-soon" :
            moviesInTheatersUrl ? "movies-in-theaters" :
            topRatedIndianUrl ? "top-rated-indian" :
            topRatedMoviesUrl ? "top-rated-movies" : "home");
    }, [window.location.href]);

    useEffect(() => {
        setActiveKey(curentPage);
    }, [curentPage]);
    
    if (searchData) searchData(searchText);
    return (
        <Navbar fixed="top" bg="light" variant="light" id="header" onSelect={(eventKey) => setActiveKey(`${eventKey}`)}>
            <Container>
                <Navbar.Brand href="/"><span>Movies</span><span>On The Tip</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav defaultActiveKey="home" as="ul" className="me-auto">
                        <Nav.Item as="li"><Nav.Link active={activeKey === "home"} eventKey="home" as={Link} to={"home"}>Home</Nav.Link></Nav.Item>
                        <Nav.Item as="li"><Nav.Link active={activeKey === "coming-soon"} eventKey="coming-soon" as={Link} to="coming-soon">Coming Soon</Nav.Link></Nav.Item>
                        <Nav.Item as="li"><Nav.Link active={activeKey === "movies-in-theaters"} eventKey="movies-in-theaters" as={Link} to="movies-in-theaters">Movies In Theaters</Nav.Link></Nav.Item>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item active={activeKey === "top-rated-indian"} eventKey="top-rated-indian" as={Link} to="top-rated-indian">Top Rated Indian</NavDropdown.Item>
                            <NavDropdown.Item active={activeKey === "top-rated-movies"} eventKey="top-rated-movies" as={Link} to="top-rated-movies">Top Rated Movies</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Button variant="outline-success btnic">
                            <Nav.Link active={activeKey === "add-to-cart"} eventKey="add-to-cart" as={Link} to="add-to-cart">
                            <FontAwesomeIcon icon={faCartShopping} /> 
                            {" "}<Badge pill bg="warning" text="dark" className='badge-cart'>{moviesList}</Badge>Watchlist</Nav.Link>
                        </Button>&nbsp;&nbsp;
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
