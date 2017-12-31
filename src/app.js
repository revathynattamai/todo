import { render } from 'react-dom'
import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { throws } from 'assert';

class App extends Component {

  getTodos() {
    const state_todos = this.props.store.getState().todos;
    return state_todos.map((todo, i) => {
      return (<div key={i}>
        <input type="checkbox" onClick={() => this.props.store.dispatch({ type: 'toggle', payload: i })} />
        <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}> {todo.value}</span>
      </div>);
    });
  }

  getAll() {
    let visibility = this.props.store.getState().visibility;
    const state_todos = this.props.store.getState().todos;
    return visibility ? state_todos.map((todo, i) => {
      return (
        <div key={i}>
          {todo.value}
        </div>
      );
    }) : []
  }
  render() {
    let input;
    return (
      <div>
        <input type="text" ref={node => { input = node }} />
        <button type="submit" onClick={() => this.props.store.dispatch({ type: 'add', payload: { value: input.value, done: false } })}>Add</button>
        {this.getTodos()}
        <a href='#' onClick={() => this.props.store.dispatch({ type: 'visit_toggle' })}>SHOWALL</a>
        {this.getAll()}
      </div>
    );
  }
}

const store = require('./data/store');
const render_1 = () => render(<App store={store} />, document.getElementById('root'))
render_1();
store.subscribe(render_1);