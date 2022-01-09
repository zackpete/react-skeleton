import * as React from "react";

const { Component } = React;

export default class Hello extends Component {
  render() {
    return (
      <div className="text-center">
        <header className="bg-black m-6 p-6 rounded shadow-lg">
          <h1 className="text-white text-4xl">Hello, World!</h1>
        </header>
      </div>
    );
  }
}
