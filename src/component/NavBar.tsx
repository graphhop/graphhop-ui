import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Nav, Navbar } from "react-bootstrap";
import "../Fonts.css";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-widgets/styles.css";

const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Col>
                    <Navbar.Brand className="nova-mono-regular" href="#home">
                        GraphHop
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Col>
                <Col>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link
                                className="ibm-plex-sans-light"
                                href="#project-description"
                            >
                                Project Description
                            </Nav.Link>
                            <Nav.Link className="ibm-plex-sans-light" href="#network-graph">
                                Network Graph
                            </Nav.Link>
                            <Nav.Link className="ibm-plex-sans-light" href="#project-team">
                                Project Team
                            </Nav.Link>
                            <Nav.Link className="ibm-plex-sans-light" href="https://github.com/graphhop" target="_blank">
                                Github
                            </Nav.Link>
                            <Nav.Link className="ibm-plex-sans-light" href="https://docs.google.com/presentation/d/13uiSQHGUmDvQxC-HgN1CTBe-dE1qSZfjv3pY12AlPv4/edit?usp=sharing" target="_blank">
                                Presentation
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    
                </Col>
            </Container>
        </Navbar>
    );
};

export default NavBar;
