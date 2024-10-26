import { Guid } from "guid-typescript";
import "./App.css";
import NetworkGraph from "./NetworkGraph";
import NetworkGraph2 from "./NetworkGraph2";
import { ComponentNode, Link } from "./Types";

const idA = Guid.create().toString();
const idB = Guid.create().toString();
const idC = Guid.create().toString();
const idD = Guid.create().toString();

const nodes = [
  { id: idA, name: "A", added: false, deleted: false, changed: false },
  { id: idB, name: "B", added: true, deleted: false, changed: false },
  { id: idC, name: "C", added: false, deleted: true, changed: false },
  { id: idD, name: "D", added: false, deleted: false, changed: true },
] as ComponentNode[];

const links = [
  { source: idA, target: idB, value: 1 },
  { source: idA, target: idC, value: 1 },
  { source: idB, target: idD, value: 1 },
  { source: idC, target: idD, value: 20 },
] as Link[];

function App() {
  return (
    <>
      <h1>Graph Hopper</h1>
      <NetworkGraph nodes={nodes} links={links} />
      <NetworkGraph2 nodes={nodes} links={links} is3D={true} />
      <h4>Graph Hopper is a plugin</h4>
    </>
  );
}

export default App;
