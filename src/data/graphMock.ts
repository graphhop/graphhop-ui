import { Guid } from "guid-typescript";
import { ComponentLink, ComponentNode, GhDefinition } from "../Types";

const idA = Guid.create().toString();
const idB = Guid.create().toString();
const idC = Guid.create().toString();
const idD = Guid.create().toString();

export const nodes = [
  {
    id: idA,
    name: "Gradient",
    category: "Geometry",
    description:"This is a line. This is a line.",
    added: false,
    deleted: false,
    changed: false,
    image: "https://grasshopperdocs.com/images/logo-icon.png",
  },
  {
    id: idB,
    name: "Read File",
    added: true,
    deleted: false,
    changed: false,
    image: "",
  },
  {
    id: idC,
    name: "Data Dam",
    added: false,
    deleted: true,
    changed: false,
    image: "",
  },
  {
    id: idD,
    name: "Mesh Point",
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

export const documents = [{ version: "1.0", nodes, links }] as GhDefinition[];
