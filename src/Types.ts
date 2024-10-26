export interface ComponentNode {
  id: string;
  name: string;
  added: boolean;
  deleted: boolean;
  changed: boolean;
}

export interface ComponentLink {
  source: string;
  target: string;
  value: number;
}

export const RED = "#FF0000";
export const GREEN = "#00FF00";
export const GRAY = "#808080";

// this method should return a hex color for the link based on whether any of their nodes were added or removed
// if the link touches any deleted nodes, it should be red
// if the link touches any added nodes, it should be green
export const getLinkColor = (
  sourceNode: ComponentNode,
  targetNode: ComponentNode
) => {
  if (sourceNode.deleted || targetNode.deleted) {
    return RED;
  }

  if (sourceNode.added || targetNode.added) {
    return GREEN;
  }

  return GRAY;
};
