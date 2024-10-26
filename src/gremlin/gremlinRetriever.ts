import gremlin from "gremlin";

export const retrieveGraph = async () => {
    const traversal = gremlin.process.AnonymousTraversalSource.traversal;
    const DriverRemoteConnection = gremlin.driver.DriverRemoteConnection;
    return traversal().withRemote(new DriverRemoteConnection("ws://localhost:8182/gremlin"));
};
