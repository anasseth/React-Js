import React, { Component } from 'react';
import './App.css';
// import 'public/index.html';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {

            input: "",
            todos: [],
            date: new Date(),
            color:'blue',
        }
        this.handleChange = this.handleChange.bind(this)
        this.submitTodo = this.submitTodo.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
        this.assignColor=this.assignColor.bind(this)
    }

    handleChange(elementLocation) {
        this.setState({
            input: elementLocation.target.value,
        })
    }
    assignColor(){
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        this.setState({
            color: randomColor
        })

    }
    submitTodo() {
        const enteredTodo = this.state.input
        //checking that the input is received
        console.log(enteredTodo)
        const updatedTodoList = [...this.state.todos, enteredTodo]         // correct Approach
        //const t = this.state.todos.concat(itemsArray)    // correct Approach
        //const t = this.state.todos.push(itemsArray)      // Wrong Approach will throw an error first related to Array.push() then Array.map()

        //checking that updatedTodoList receives new item
        console.log(updatedTodoList)
        // t.push(itemsArray)
        this.setState({
            todos: updatedTodoList,
            input: "",


        });
        //checking that the state has been updated
        console.log(this.state.todos)

    }
    removeTodo(event) {
        let todoID = event.target.id
        let removedTodo = this.state.todos
        removedTodo.splice(todoID, 1);
        this.setState({
            todos: removedTodo,
        })
    }

    render() {
        // var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        // var now = new Date();
        // var theDay = now.getDay();
        // var nameOfToday = dayNames[theDay];
        // console.log(this.state.date)

        var itemsTodo = this.state.todos.map((i, index) => <div style={{borderLeftColor: this.state.color}} key={i} id={index} className='todoitem' onDoubleClick={this.removeTodo}>{i}</div>);
        return (

            <div className="abc">
               <div className='imgo'>
                <h2 className='head'>Keep Track Of What You Do !!!</h2>
                <input className="ab" onChange={this.handleChange} value={this.state.input} />
                <button onClick={this.submitTodo}><i class="fas fa-angle-right"></i></button>
                {/*<h3><i><b>your Todo Goes Here !!!</b></i></h3>*/}
                </div>
                <ul className='abcd'> {itemsTodo}</ul>

            </div>

        );
    }
}

export default App;



// mutation is very important concept and it should be taken under consideration
        // React does not allow you to mutate state directly, whan we use Array.push() method this method
        // mutate the state directly and therefore react return an error even you are using Array.map()
        // so instead of Array.push() we shall use either Array.concat() or [...Array, yourAdditionInTheArray]
        // to check it out below are 3 line uncomment one by one and see what you get in your console 
