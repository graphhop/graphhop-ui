import { Container } from "react-bootstrap";
import { DropdownList } from "react-widgets/cjs";
import NetworkGraph2 from "../NetworkGraph2";
import { GhDefinition } from "../Types";

type NetworkViewProps = {
    definition: GhDefinition;
};

export const NetworkView = ({ definition }: NetworkViewProps) => {
    return (
        <Container>
            <div style={{ width: "300px", paddingBottom: "10px" }}>
                <div>Select a version</div>
                <DropdownList />
            </div>
            <NetworkGraph2 nodes={definition.nodes} links={definition.links} is3D={true} />
        </Container>
    );
};
