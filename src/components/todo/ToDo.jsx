import { Component } from 'react';
import { Form } from './ToDoForm';
import { nanoid } from 'nanoid';

export class Todo extends Component {
  state = {
    todos: [
      { text: 'todo 1', id: 'qwe' },
      { text: 'todo 2', id: 'ewq' },
    ],
  };

  handleSubmit = text => {
    const todo = {
      text,
      id: nanoid(),
    };

    this.setState(prevState => ({ todos: [...prevState.todos, todo] }));
  };

  handlDelet = id =>
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id),
    }));

  render() {
    const { todos } = this.state;
    return (
      <>
        <h2>Todos</h2>
        <Form handleSubmit={this.handleSubmit} />
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              {todo.text}{' '}
              <button type="button" onClick={() => this.handlDelet(todo.id)}>
                Delete todo
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
