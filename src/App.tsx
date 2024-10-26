import { Guid } from "guid-typescript";
import "./App.css";
import NetworkGraph from "./NetworkGraph";
import { ComponentNode, Link } from "./Types";

const idA = Guid.create().toString();
const idB = Guid.create().toString();
const idC = Guid.create().toString();
const idD = Guid.create().toString();

const nodes = [
  { id: idA, Name: "A" },
  { id: idB, Name: "B" },
  { id: idC, Name: "C" },
  { id: idD, Name: "D" },
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
      <h4>Graph Hopper is a plugin</h4>
    </>
  );
}

export default App;
