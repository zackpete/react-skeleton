import * as React from "react";
import {Root} from "../content/TreeRoot";

const { Component } = React;

export default class Dynamic extends Component {
  render() {
    const Node = Root[window.location.pathname];
    if (!Node) {
      return <h1>404</h1>;
    } else {
      return <Node />;
    }
  }
}
