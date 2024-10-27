import gremlin from "gremlin";

const traversal = gremlin.process.AnonymousTraversalSource.traversal;
const DriverRemoteConnection = gremlin.driver.DriverRemoteConnection;
const g = traversal().withRemote(new DriverRemoteConnection("ws://localhost:8182/gremlin"));

export const retrieveVertices = async () => {
    return await g.V().toList();
};

export const retrieveEdges = async () => {
    return await g.E().toList();
};
