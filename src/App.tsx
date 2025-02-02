import axios from "axios";
import { useState } from "react";

import NavBar from "./component/NavBar";
import ProjectDescription from "./component/ProjectDescription";
import ProjectTeam from "./component/ProjectTeam";

import { NetworkView } from "./component/NetworkView";
// import { documents } from "./data/graphMock";
import { mapDefinitions } from "./gremlin/gremlinConverter";
import { retrieveEdges, retrieveVertices } from "./gremlin/gremlinRetriever";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-widgets/styles.css";
import "./App.css";
import "./Fonts.css";

const vertices = await retrieveVertices();
console.log("vertices", vertices);

const edges = await retrieveEdges();
console.log("edges", edges);

const openaiApiKey = process.env.REACT_APP_OPENAI_API_KEY;

const describeGrasshopperFile = async (jsonContent: any) => {
    const prompt = `This is a grasshopper file for rhino, give me two or three sentences to describe the overall function: ${JSON.stringify(
        jsonContent
    )}`;

    try {
        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-4o",
                messages: [
                    {
                        role: "user",
                        content: prompt,
                    },
                ],
                max_tokens: 150,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${openaiApiKey}`,
                },
            }
        );
        console.log(response);
        return response.data.choices[0].message.content;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Error calling OpenAI API:", error.response?.data || error.message);
        } else {
            console.error("Unexpected error:", error);
        }
        return "Error describing the file.";
    }
};

function App() {
    // index of the selected version in the definitions array
    const [description, setDescription] = useState<string>("");
    const [documents, setDocuments] = useState(mapDefinitions(vertices, edges));
    console.log("documents", documents);

    const handleDescribeFile = async () => {
        const description = await describeGrasshopperFile(documents);
        setDescription(description);
    };

    return (
        <div>
            <NavBar />
            {/* Section 1 */}
            <section id="project-description" style={{ paddingTop: "3rem" }}>
                <ProjectDescription />
            </section>

            {/* Section 2 */}
            <section id="network-graph" style={{ paddingTop: "3rem" }}>
                <NetworkView
                    definitions={documents}
                    definitionIndex={0}
                    setDocuments={setDocuments}
                />
            </section>

            {/* Section 3: Describe Grasshopper File */}
            <section id="describe-file" style={{ paddingTop: "3rem" }}>
                <div className="container">
                    <button
                        className="subtitle nova-mono-regular"
                        style={{
                            backgroundColor: "white",
                            border: "none",
                            padding: "0px",
                            color: "black",
                        }}
                        onClick={handleDescribeFile}
                    >
                        Describe Grasshopper File
                    </button>
                    {description && (
                        <div>
                            <div className="primary-txt ibm-plex-sans-light">
                                {description.split("\n").map((line, index) => (
                                    <p key={index}>{line}</p>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Section 4 */}
            <section id="project-team" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
                <ProjectTeam />
            </section>
        </div>
    );
}

export default App;
