import * as React from "react";

const { Component } = React;

export interface Props {
  title: string;
}

export default class Page extends Component<Props> {
  render() {
    return (
      <article>
        <h1 className="text-3xl">{this.props.title}</h1>
        {this.props.children}
      </article>
    );
  }
}
