import { Guid } from "guid-typescript";
import "./App.css";
import NetworkGraph from "./NetworkGraph";
import NetworkGraph2 from "./NetworkGraph2";
import { ComponentLink, ComponentNode } from "./Types";

const idA = Guid.create().toString();
const idB = Guid.create().toString();
const idC = Guid.create().toString();
const idD = Guid.create().toString();

const nodes = [
  {
    id: idA,
    name: "Line",
    added: false,
    deleted: false,
    changed: false,
    image: "",
  },
  {
    id: idB,
    name: "Point3D",
    added: true,
    deleted: false,
    changed: false,
    image: "",
  },
  {
    id: idC,
    name: "Point3D",
    added: false,
    deleted: true,
    changed: false,
    image: "",
  },
  {
    id: idD,
    name: "Point3D",
    added: false,
    deleted: false,
    changed: true,
    image: "",
  },
] as ComponentNode[];

const links = [
  { source: idA, target: idB, value: 1 },
  { source: idA, target: idC, value: 1 },
  { source: idB, target: idD, value: 1 },
  { source: idC, target: idD, value: 20 },
] as ComponentLink[];

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
