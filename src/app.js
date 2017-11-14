import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ["Ani", "Aaru"],
      input: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleChange(e) {
  this.setState({ input: e.target.value })
  }

  handleAdd() {
    let a = this.state.input;
    if (a.length == 0) {
      alert("Please enter a value");
    } else {
      // this.state.todo.push(this.state.input);
      let newTodo = this.state.todo;
      newTodo.push(a);
      this.setState({
        todo: newTodo
      });
    }
  }

  handleRemove() {
    let b = this.state.input;
    let c = this.state.todo;
    let index = c.indexOf(b);
    if (index > -1) {
      c.splice(index, 1);
    }
    else {
      alert("Element not found");
    }
    console.log(c);
  }

  render() {
  return (
      <div>
        Enter input <input type="text" onChange={this.handleChange} />
        <button onClick={this.handleAdd}>Add</button>
        <button onClick={this.handleRemove}>Remove</button>
        {this.state.todo.map(todo => <li>{todo}</li>)}
      </div>
    );
  }
}

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);