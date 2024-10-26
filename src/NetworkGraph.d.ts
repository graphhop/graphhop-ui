import { ComponentLink, ComponentNode } from "./Types";

declare function NetworkGraph(props: {
  nodes: ComponentNode[];
  links: ComponentLink[];
}): JSX.Element;

export default NetworkGraph;
