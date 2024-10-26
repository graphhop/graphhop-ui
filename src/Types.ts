export interface ComponentNode {
  id: string;
  Name: string;
  Added: boolean;
  Deleted: boolean;
}

export interface Link {
  source: string;
  target: string;
  value: number;
}
