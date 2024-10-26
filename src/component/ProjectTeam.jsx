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
    )
}

export default ProjectTeam;