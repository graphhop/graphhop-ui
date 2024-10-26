import { ComponentNode, Link } from "./Types";

declare function NetworkGraph(props: {
  nodes: ComponentNode[];
  links: Link[];
}): JSX.Element;

export default NetworkGraph;
