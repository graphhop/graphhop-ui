import { Guid } from "guid-typescript";
import "./App.css";
import "./Fonts.css";
import NetworkGraph from "./NetworkGraph";
import NetworkGraph2 from "./NetworkGraph2";
import { ComponentNode, Link } from "./Types";
import * as React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { ComponentLink, ComponentNode } from "./Types";

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
                    <Navbar.Brand className="nova-mono-regular" href="#home">Graph Hopper</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ibm-plex-sans-light" className="me-auto">
                            <Nav.Link href="#project-description">Project Description</Nav.Link>
                            <Nav.Link href="#network-graph">Network Graph</Nav.Link>
                            <Nav.Link href="#project-team">Project Team</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Section 1 */}
            <section id="project-description" style={{ paddingTop: "3rem" }}>
                <Container>
                    <Row>
                        <Col sm={6}></Col>
                        <Col sm={6}>
                            <hr />
                            <h4 className="subtitle nova-mono-regular">Description</h4>
                            <h4 className="primary-txt ibm-plex-sans-light">
                                "Graph Hopper" is a version control tool specifically designed
                                for Grasshopper, enabling streamlined management of design iterations
                                and collaborative workflows. By integrating version tracking into Grasshopper,
                                Graph Hopper allows users to efficiently save, review, and revert to previous
                                versions of their visual scripts, improving organization and reducing the risk
                                of losing valuable work. It offers features for annotating changes, comparing
                                different versions visually, and seamlessly synchronizing updates across teams.
                                Graph Hopper empowers designers, architects, and engineers to collaborate
                                effectively within Grasshopper, enhancing the creative process through improved
                                project tracking and collaboration.
                            </h4>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Section 2 */}
            <section id="network-graph" style={{ paddingTop: "3rem" }}>
                <NetworkGraph className="centered" nodes={nodes} links={links} />
                <NetworkGraph2 nodes={nodes} links={links} is3D={true} />
            </section>

            {/* Section 3 */}
            <section id="project-team" style={{ paddingTop: "3rem" }}>
                <Container>
                    <Row>
                        <Col sm={6}></Col>
                        <Col sm={6}>
                            <hr />
                            <h4 className="subtitle nova-mono-regular">Project Team</h4>
                            <h4 className="primary-txt ibm-plex-sans-light">
                                Alexander Schiftner <br />
                                Alexis Kotzambasis <br />
                                Colin Matthews <br />
                                Cullen Sarles <br />
                                Justin Jao <br />
                                K Chiu <br />
                                Karen Kuo <br />
                                Konrad Zaremba <br />
                                Nicholas Martino <br />
                                Peter Zhang <br />
                            </h4>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default App;
