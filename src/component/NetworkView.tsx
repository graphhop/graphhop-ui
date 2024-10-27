import { Container } from "react-bootstrap";
import { DropdownList } from "react-widgets/cjs";
import NetworkGraph2 from "../NetworkGraph2";
import { GhDefinition } from "../Types";

type NetworkViewProps = {
    definitions: GhDefinition[];
    definitionIndex: number;
    changeDefinition?: (definition: GhDefinition) => void;
};

export const NetworkView = (props: NetworkViewProps) => {
    const { definitions, definitionIndex, changeDefinition } = props;
    const definition = definitions[definitionIndex];

    return (
        <Container>
            <div className="ibm-plex-sans-regular">Select versions to compare:</div>
            <div
                style={{
                    width: "300px",
                    paddingTop: "5px",
                    paddingBottom: "10px",
                    display: "flex",
                    gap: "0.5rem",
                    justifyContent: "center",
                }}
            >
                <DropdownList
                    data={definitions}
                    value={definition}
                    textField="version"
                    onChange={changeDefinition}
                />
                <DropdownList
                    data={definitions}
                    value={definition}
                    textField="version"
                    onChange={changeDefinition}
                />
            </div>
            <NetworkGraph2 nodes={definition.nodes} links={definition.links} is3D={true} />
        </Container>
    );
};
