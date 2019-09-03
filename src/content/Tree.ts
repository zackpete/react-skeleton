import { ComponentClass, FunctionComponent } from "react";

/**
 * A route structure that is used to dynamically render pages based on the
 * URL path, and to render each path to a file for static site generation.
 */
export interface Tree {
  resolve(path: string): FunctionComponent | ComponentClass;
  enumerate(fn: (path: string) => void): void;
}
