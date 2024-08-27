import React, { Component } from "react";
import ComponentThree from "../Component/ComponentThree";
import ComponentFive from "../Component/ComponentFive";

class ComponentOne extends Component {
  render() {
    return (
      <>
        <h1>Hello This is Component One </h1>
        <ComponentThree />
        <ComponentFive />
      </>
    );
  }
}
export default ComponentOne;
