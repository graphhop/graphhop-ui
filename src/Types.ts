export interface ComponentNode {
  id: string;
  name: string;
  added: boolean;
  deleted: boolean;
  changed: boolean;
}

export interface Link {
  source: string;
  target: string;
  value: number;
}
