import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// function DisplayTodos(props){
//         console.log(props);
//         return (
//         <div>{props.forEach(todo => <span>{todo}</span>)}</div>);
//     }

class DisplayTodos extends Component {
    render() {
        let a = this.props.inp;
        return(
            <div>
                {/* {a.forEach(a=>(<div>{a}</div>))} */}
                a.map=(item,i)=>{
                    
                }
                </div>
                );
    }
}


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
        let c = this.state.todo;
        if (a.length == 0) {
            alert("Please enter a value");
        } else {
            c.push(this.state.input);
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
    }

    render() {
        return (
            <div>
                Enter input <input type="text"
                    onChange={this.handleChange} />
                <button onClick={this.handleAdd}>Add</button>
                <button onClick={this.handleRemove}>Remove</button>
                <DisplayTodos inp={this.state.todo} />
            </div>
        );
    }
}


ReactDOM.render(
    <Hello />,
    document.getElementById('root')
); 