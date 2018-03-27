import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import TodoList from './TodoList/TodoList'
import Header from './Header/Header'
import CreateTodo from './CreateTodo/CreateTodo'
import Popup from '../Components/Popup/Popup'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
        todos: [{
            id: 1,
            name: "Buy Milk",
            description: "We need milk to make coffee!"
        },{
            id: 2,
            name: "Buy Bread",
            description: "For breakfast!"
        }
        ]
    };

    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleDeleteTodo(id) {
    this.setState({
        todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

    handleAddTodo(todo) {
        this.setState({
            todos: [...this.state.todos, todo]
        });
    }

  render() {
    return (
        <BrowserRouter>
            <section className="container-fluid">
                <Header />
                <Popup>
                    {close => (
                        <CreateTodo onAddTodo={this.handleAddTodo} close={close}/>
                    )}
                </Popup>
                <div>
                    <Switch>
                        <Redirect exact from="/" to="/home" />
                        <Route path="/home" render={() => {
                            return <TodoList todos={this.state.todos} onDeleteTodo={this.handleDeleteTodo}/>
                        }}/>
                    </Switch>
                </div>
            </section>
        </BrowserRouter>
    );
  }
}

export default App;
