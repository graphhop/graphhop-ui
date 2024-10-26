import { Guid } from "guid-typescript";
import { ComponentLink, ComponentNode } from "../Types";

const idA = Guid.create().toString();
const idB = Guid.create().toString();
const idC = Guid.create().toString();
const idD = Guid.create().toString();

export const nodes = [
  {
    id: idA,
    name: "Line",
    added: false,
    deleted: false,
    changed: false,
    image: "https://grasshopperdocs.com/images/logo-icon.png",
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

export const links = [
  { source: idA, target: idB, value: 1 },
  { source: idA, target: idC, value: 1 },
  { source: idB, target: idD, value: 1 },
  { source: idC, target: idD, value: 20 },
] as ComponentLink[];
