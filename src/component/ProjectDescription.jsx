import "../Fonts.css";
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const ProjectTeam = () => {
    return (
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
    )
}

export default ProjectTeam;