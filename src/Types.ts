import { Guid } from "guid-typescript";

export interface ComponentNode {
  UniqueId: Guid;
  Name: string;
  Added: boolean;
  Deleted: boolean;
}

export interface Link {
  Source: Guid;
  Target: Guid;
  Thickness: number;
}
