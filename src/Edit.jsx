import { Component } from "react";

export default class Edit extends Component {
  constructor() {
    super();
    this.state = {
      editMode: false
    };
  }
  render() {
    return <h1>Edit</h1>;
  }
}
