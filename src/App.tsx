import { Guid } from "guid-typescript";
import "./App.css";
import "./Fonts.css";
import NetworkGraph from "./NetworkGraph";
import NetworkGraph2 from "./NetworkGraph2";
import * as React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { ComponentLink, ComponentNode } from "./Types";

import ProjectDescription from "./component/ProjectDescription";
import ProjectTeam from "./component/ProjectTeam";

const idA = Guid.create().toString();
const idB = Guid.create().toString();
const idC = Guid.create().toString();
const idD = Guid.create().toString();

const nodes = [
  {
    id: idA,
    name: "Line",
    added: false,
    deleted: false,
    changed: false,
    image: "https://grasshopperdocs.com/images/logo-icon.png",
  },
  {
    id: idB,
    name: "Point3D",
    added: true,
    deleted: false,
    changed: false,
    image: "",
  },
  {
    id: idC,
    name: "Point3D",
    added: false,
    deleted: true,
    changed: false,
    image: "",
  },
  {
    id: idD,
    name: "Point3D",
    added: false,
    deleted: false,
    changed: true,
    image: "",
  },
] as ComponentNode[];

const links = [
  { source: idA, target: idB, value: 1 },
  { source: idA, target: idC, value: 1 },
  { source: idB, target: idD, value: 1 },
  { source: idC, target: idD, value: 20 },
] as ComponentLink[];

function App() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                <Col sm={6}>
                        <Navbar.Brand className="nova-mono-regular" href="#home">
                            GraphHopper</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Col>
                <Col sm={6}>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="ibm-plex-sans-light" href="#project-description">Project Description</Nav.Link>
                            <Nav.Link className="ibm-plex-sans-light" href="#network-graph">Network Graph</Nav.Link>
                            <Nav.Link className="ibm-plex-sans-light" href="#project-team">Project Team</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Col>
                </Container>
            </Navbar>

            {/* Section 1 */}
            <section id="project-description" style={{ paddingTop: "3rem" }}>
                <ProjectDescription/>
            </section>

            {/* Section 2 */}
            <section id="network-graph" style={{ paddingTop: "3rem" }}>
                <NetworkGraph className="centered" nodes={nodes} links={links} />
                <NetworkGraph2 nodes={nodes} links={links} is3D={true} />
            </section>

            {/* Section 3 */}
            <section id="project-team" style={{ paddingTop: "3rem" }}>
                <ProjectTeam />
            </section>
        </>
    );
}

export default App;
