import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { DropdownList } from "react-widgets/cjs";
import NetworkGraph2 from "../NetworkGraph2";
import { GhDefinition } from "../Types";

type NetworkViewProps = {
    definitions: GhDefinition[];
    definitionIndex: number;
    setDocuments: (definition: GhDefinition[]) => void;
};

export const NetworkView = (props: NetworkViewProps) => {
    const { definitions, definitionIndex } = props;

    const [selectedVersion1, setSelectedVersion1] = useState<string>("1.1");
    const [selectedVersion2, setSelectedVersion2] = useState<string>("1.1");
    const [activeDefinitionIndex, setActiveDefinitionIndex] = useState<number>(0);

    const versions = ["1.1", "1.2"];
    const activeDefinition = definitions[activeDefinitionIndex];

    useEffect(() => {
        changeDefinition();
    }, [selectedVersion1, selectedVersion2]);

    const changeDefinition = () => {
        if (selectedVersion1 === selectedVersion2) {
            setActiveDefinitionIndex(0);
            return;
        }
        setActiveDefinitionIndex(1);
    };

    const changeDefinition1 = (selectedVersion: string) => {
        setSelectedVersion1(selectedVersion);
    };

    const changeDefinition2 = (selectedVersion: string) => {
        setSelectedVersion2(selectedVersion);
    };

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
                    data={versions}
                    value={selectedVersion1}
                    textField="version"
                    onChange={changeDefinition1}
                />
                <DropdownList
                    data={versions}
                    value={selectedVersion2}
                    textField="version"
                    onChange={changeDefinition2}
                />
            </div>
            <NetworkGraph2
                nodes={activeDefinition.nodes}
                links={activeDefinition.links}
                is3D={true}
            />
        </Container>
    );
};
