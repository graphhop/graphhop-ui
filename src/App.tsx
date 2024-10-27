import { useState } from "react";
import { Col, Container, Nav, Navbar } from "react-bootstrap";

import ProjectDescription from "./component/ProjectDescription";
import ProjectTeam from "./component/ProjectTeam";
import NavBar from "./component/NavBar"

import { NetworkView } from "./component/NetworkView";
import { documents } from "./data/graphMock";
import { retrieveDocuments } from "./gremlin/gremlinRetriever";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-widgets/styles.css";
import "./App.css";
import "./Fonts.css";

const graph = await retrieveDocuments();
console.log("graph", graph);

function App() {
    const [selectedDefinition, setSelectedDefinition] = useState<number>(0);

    return (
        <div>
            <NavBar />
            {/* Section 1 */}
            <section id="project-description" style={{ paddingTop: "3rem" }}>
                <ProjectDescription />
            </section>

            {/* Section 2 */}
            <section id="network-graph" style={{ paddingTop: "3rem" }}>
                <NetworkView definitions={documents} definitionIndex={selectedDefinition} />
            </section>

            {/* Section 3 */}
            <section id="project-team" style={{ paddingTop: "3rem" }}>
                <ProjectTeam />
            </section>
        </div>
    );
}

export default App;
