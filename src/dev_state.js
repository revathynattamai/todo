import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Display extends Component{
    render(){
        return(
            <div>
                {this.props.todo}
                </div>
        );
    }
}


class Input extends Component {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd(e) {
        console.log("value", e.target.value);
        this.props.onInput(e.target.value);
    }

    render() {
        return (
            <div>
                Enter input <input type="text" onChange={this.handleAdd} />
            </div>
        );
    }
}

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ["Ani", "Aaru"],
            input: ""
        }
        this.handleFilterAdd = this.handleFilterAdd.bind(this);
    }

    handleFilterAdd(input) {
        this.state.todo.push(input);
        let newTodo = this.state.todo;
        this.setState({
            todo: newTodo
        })
    }


    render() {
        return (
            <div>
                <Input
                    input={this.state.input}
                    onInput={this.handleFilterAdd} />
                    <Display 
                        todo = {this.state.todo} />
            </div>
        );
    }
}



ReactDOM.render(
    <Main />,
    document.getElementById('root')
);