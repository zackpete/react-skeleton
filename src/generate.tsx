import * as React from "react";
import Hello from "component/Hello";
import { renderToString } from "react-dom/server";

console.log(renderToString(<Hello />));
