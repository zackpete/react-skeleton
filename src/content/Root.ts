import { Tree } from "./Tree";
import { ComponentClass, FunctionComponent } from "react";
import Architecture from "./page/Architecture";

export class Root implements Tree {
  paths = {
    "/": Architecture,
  };

  enumerate(fn: (path: string) => void): void {
    Object.keys(paths).forEach(fn);
  }

  resolve(path: string): FunctionComponent | ComponentClass {
    return undefined;
  }
}
