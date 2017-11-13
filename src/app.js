import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const todo = ["Ani", "Aaru"];

class Hello extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleChange(e){
        console.log(e.target.value);
        this.props.onintext(e.target.value);
    }

    handleAdd(){
        console.log("todo");
    }

    render() {
        return ( 
            <div>
                Enter input <input type="text"
                             value={this.props.intext} 
                             onChange={this.handleChange} />
                <button onClick={this.handleAdd}>Add</button>
                
            </div>
        );
    }
}

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            intext:""
        }
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(intext){
        console.log(intext);
        this.setState({
            intext: intext
        });
    }

    render() {
            return (
                <div>
                    <Hello 
                    intext={this.state.intext}
                    onintext={this.handleFilterTextChange}/>
                    {this.props.list}
                </div>
            );


    }
}

ReactDOM.render(
    <Main list={todo} />,
    document.getElementById('root')
); 