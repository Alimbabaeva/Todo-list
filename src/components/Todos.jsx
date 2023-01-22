import React, { Component } from "react";

export class Todos extends Component {
  constructor() {
    super();
    this.state = {
      todos: "",
      actualTodo: ""
    };
  }
  render() {
    return (
      <>
        <h1>Todos</h1>
        <form>
          <input
            type="text"
            className="input"
            placeholder="add your todo"
            value={this.state.actualTodo}
            onChange={(e) => this.setState({ actualTodo: e.target.value })}
          />
          <button>Add todo</button>
        </form>
      </>
    );
  }
}
