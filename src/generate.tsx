import * as React from "react";
import Page from "component/Hello";
import { renderToString } from "react-dom/server";

console.log(renderToString(<Page />));
