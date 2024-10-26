import { Col, Container, Row } from "react-bootstrap";
import { DropdownList } from "react-widgets/cjs";
import NetworkGraph2 from "../NetworkGraph2";
import { GhDefinition } from "../Types";

type NetworkViewProps = {
    definition: GhDefinition;
};

export const NetworkView = ({ definition }: NetworkViewProps) => {
    return (
        <Container>
            <Row>
                <Col sm={3}>
                    <DropdownList />
                </Col>
                <Col sm={9}>
                    <NetworkGraph2 nodes={definition.nodes} links={definition.links} is3D={true} />
                </Col>
            </Row>
        </Container>
    );
};
