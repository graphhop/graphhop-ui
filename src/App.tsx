import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Nav, Navbar } from "react-bootstrap";
import "./App.css";
import "./Fonts.css";
import NetworkGraph2 from "./NetworkGraph2";

import ProjectDescription from "./component/ProjectDescription";
import ProjectTeam from "./component/ProjectTeam";
import { links, nodes } from "./data/graphMock";
import { retrieveGraph } from "./gremlin/gremlinRetriever";

const graph = await retrieveGraph();
console.log("graph", graph);

function App() {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Col sm={6}>
                        <Navbar.Brand className="nova-mono-regular" href="#home">
                            GraphHopper
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    </Col>
                    <Col sm={6}>
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
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                </Container>
            </Navbar>

            {/* Section 1 */}
            <section id="project-description" style={{ paddingTop: "3rem" }}>
                <ProjectDescription />
            </section>

            {/* Section 2 */}
            <section id="network-graph" style={{ paddingTop: "3rem" }}>
                <NetworkGraph2 nodes={nodes} links={links} is3D={true} />
            </section>

            {/* Section 3 */}
            <section id="project-team" style={{ paddingTop: "3rem" }}>
                <ProjectTeam />
            </section>
        </div>
    );
}

export default App;
