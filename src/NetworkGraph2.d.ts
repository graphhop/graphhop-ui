import { ComponentNode, Link } from "./Types";

interface NetworkGraph2Props {
  nodes: ComponentNode[];
  links: Link[];
  is3D: boolean;
}

declare const NetworkGraph2: React.FC<NetworkGraph2Props>;

export default NetworkGraph2;
