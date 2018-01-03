import { render } from 'react-dom'
import React, { Component } from 'react'
import { Provider } from 'react-redux';

class App extends Component {
  getTodos() {
    let visibility = this.props.store.getState().visibility;
    const state_todos = this.props.store.getState().todos;
    return state_todos.map((todo, i) => {
      switch (visibility) {
        case false:
          return (<div key={i}>
            <input type="checkbox" onClick={() => this.props.store.dispatch({ type: 'toggle', payload: i })} />
            <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}> {todo.value}</span>
          </div>);
        case 'all':
          return (<div key={i}>
            {todo.value}
          </div>);
        case 'active':
          return !todo.done && (<div key={i}>
            {todo.value}
          </div>);
        case 'completed':
          return todo.done && (<div key={i}>
            {todo.value}
          </div>);
        case 'none':
          return null;
      }
    });
  }

  render() {
    let input;
    return (
      <div>
        <input type="text" ref={node => { input = node }} />
        <button type="submit" onClick={() => this.props.store.dispatch({ type: 'add', payload: { value: input.value, done: false } })}>Add</button>
        {this.getTodos()} <br />
        <a href='#' onClick={() => this.props.store.dispatch({ type: 'visibility', payload: 'all' })}>SHOWALL</a> <br />
        <a href='#' onClick={() => this.props.store.dispatch({ type: 'visibility', payload: 'active' })}>SHOWACTIVE</a> <br />
        <a href='#' onClick={() => this.props.store.dispatch({ type: 'visibility', payload: 'none' })}>SHOWNONE</a> <br />
        <a href='#' onClick={() => this.props.store.dispatch({ type: 'visibility', payload: 'completed' })}>SHOWDONE</a> <br />
      </div>
    );
  }
}

const store = require('./data/store');
const render_1 = () => render(<App store={store} />, document.getElementById('root'))
render_1();
store.subscribe(render_1);