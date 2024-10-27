import { GhDefinition } from "../Types";

export const mapDefinitions = (vertices: any[], edges: any[]): GhDefinition[] => {
    const mappedNodes = vertices.map((vertex: any) => {
        const nodeId = vertex.id;
        const name = vertex.properties.Name?.[0]?.value;
        const description = vertex.properties.Description?.[0]?.value;
        const image = vertex.properties.Icon?.[0]?.value;

        return {
            id: nodeId ?? "",
            name: name ?? "",
            description: description ?? "",
            added: false,
            deleted: false,
            changed: false,
            image: image ?? "",
        };
    });
    console.log("mappedNodes", mappedNodes);

    const mappedEdges = edges.map((edge: any) => {
        const source = edge.inV.id;
        const target = edge.outV.id;

        return {
            source: source,
            target: target,
        };
    });

    return [
        {
            nodes: mappedNodes,
            links: mappedEdges,
            version: "1.0",
        } as GhDefinition,
    ] as GhDefinition[];
};
