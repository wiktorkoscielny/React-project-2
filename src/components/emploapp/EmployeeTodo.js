import './EmployeeTodo.css';
import React, { Component } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import axios from 'axios'


export class EmployeeApp extends Component {
  state = {
    message: "ADD EMPLOYEE",
    name1: '',
    name2: '',
    name3: '',
    name4: '',
    todos: [
      {
        id: '',
        firstName: '',
        lastName: '',
        department: '',
        salary: '',
        done: false
      }
    ]
  }




  fetchTodos = () => {
    axios.get(`http://localhost:3000/todos`)
      .then(res => {
        // console.log(res)
        const todos = res.data;
        // console.log(todos)
        this.setState({
          ...todos,
          todos
        });
      })
  }


  componentDidMount() {
    this.fetchTodos()
  }

  handleChange = (e, name) => {
    // console.log(event.target.value)
    this.setState({
      [name]: e.target.value,
      
      // id: event.target.value
    })
  }

  handleOnChange = (e, name) => {
    // console.log(event.target.value)
    this.setState({
      [name]: e.target.value
      // id: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    // Save data on to json db
    axios.post(`http://localhost:3000/todos`, {
      firstName: this.state.name1,
      lastName: this.state.name2,
      department: this.state.name3,
      salary: this.state.name4,
      done: false
    })
      .then(res => {
        // console.log(res.data);
        this.setState({
          name1: '',
          name2: '',
          name3: '',
          name4: '',
          todos: [
            ...this.state.todos,
            {
              firstName: res.data.firstName,
              lastName: res.data.lastName,
              department: res.data.department,
              salary: res.data.salary,
              done: res.data.done,
              id: res.data.id
            }
          ]
        })
      })
  }


  toggleTodoDone = (id, status) => {
    // // Delete data from backend 
    axios.patch(`http://localhost:3000/todos/${id}`, {
      done: !status
    }).then(res => {
      this.fetchTodos()
    })

  };

  removeTodo = id => {
    // Remove item from UI 
    const todos = this.state.todos.filter(item => item.id !== id);
    this.setState({ todos });

    // Delete data from backend 
    axios.delete(`http://localhost:3000/todos/${id}`)
      .then(res => {
        console.log(res.data);

      })
  };

  allDone = (event) => {
    const todos = this.state.todos.map(todo => {
      return {
        ...todo,
        done: true
      }
    })
    this.setState({
      todos
    })
  }


  render() {

    return (
      <div className="App-container-pt-4">
        <h1 className='header-text'>{this.state.message}</h1>
        <TodoForm
          handleSubmit={this.handleSubmit}
          handleOnChange={this.handleOnChange}
          newName1Value={this.state.name1}
          newName2Value={this.state.name2}
          newName3Value={this.state.name3}
          newName4Value={this.state.name4}
        />
        <TodoList
            toggleTodoDone={this.toggleTodoDone}
            todos={this.state.todos}
            removeTodo={this.removeTodo}

          />
        
      </div >
    )
  }
}

export default EmployeeApp