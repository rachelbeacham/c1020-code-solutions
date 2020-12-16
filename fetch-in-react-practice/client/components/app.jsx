import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    fetch('/api/todos')
      .then(res => res.json())
      .then(todos => this.setState({
        todos
      }));
  }

  addTodo(newTodo) {
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    })
      .then(res => res.json())
      .then(todo => {
        this.state.todos.push(todo);
        return this.setState({
          todos: this.state.todos
        });
      });
  }

  toggleCompleted(todoId) {
    const todoList = this.state.todos;
    const target = todoList.find(todo => {
      if (todo.todoId === todoId) {
        return { isCompleted: todo.isCompleted };
      }
    });
    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ isCompleted: !target.isCompleted })
    })
      .then(res => res.json())
      .then(data => {
        const updated = this.state.todos.slice();
        const index = updated.findIndex(todo => (todo.todoId === todoId));
        updated[index] = data;
        this.setState({
          todos: updated
        });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
