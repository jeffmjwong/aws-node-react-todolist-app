import React, { useState, useEffect } from 'react';
import uuidv1 from 'uuid/v1';

import { getTodos, createTodo } from '../api/todos';
import './App.scss';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodos, setNewTodos] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getTodos()
      .then(todos => setTodos(todos))
      .catch(err => setError(err.message));
  }, []);

  const placeNewTodo = () => {
    setNewTodos([...newTodos, { id: uuidv1(), name: '', completed: false, number: '' }]);
  };

  const handleNewTodoFieldChange = (newTodoId, field) => (evt) => {
    setNewTodos(
      newTodos.map(newTodo => {
        if (newTodo.id === newTodoId) {
          return { ...newTodo, [field]: evt.target.value};
        } else {
          return { ...newTodo };
        }
      })
    );
  };

  const handleNewTodoCheckboxChange = (newTodoId) => (evt) => {
    setNewTodos(
      newTodos.map(newTodo => {
        if (newTodo.id === newTodoId) {
          return { ...newTodo, completed: evt.target.checked};
        } else {
          return { ...newTodo };
        }
      })
    );
  };

  const createNewTodo = (newTodoId) => () => {
    const targetTodo = newTodos.find(newTodo => newTodo.id === newTodoId);
    if (!targetTodo) { setError('Something went wrong!') }

    createTodo(targetTodo)
      .then(successTodo => {
        setTodos([...todos, successTodo]);
        setNewTodos(newTodos.filter(newTodo => newTodo.id !== newTodoId))
      })
      .catch(err => setError(err.message));
  };

  const removeNewTodo = (newTodoId) => () => {
    setNewTodos(newTodos.filter(newTodo => newTodo.id !== newTodoId));
  }

  return (
    <div className="app-container">
      <h1 className="todo-title">Todo List</h1>

      <table className="todo-table">
        <thead>
          <tr>
            <td className="w30">Name</td>
            <td className="w20">Completed</td>
            <td className="w20">Number</td>
            <td className="w30">Date Created</td>
          </tr>
        </thead>

        <tbody>
          {
            todos.map(todo => (
              <tr key={todo.id}>
                <td>
                  {todo.name}
                </td>

                <td>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    disabled
                  />
                </td>

                <td>
                  {todo.number}
                </td>

                <td>
                  {todo.created_at}
                </td>
              </tr>
            ))
          }

          {
            newTodos.map(newTodo => (
              <tr key={newTodo.id}>
                <td>
                  <input
                    type="text"
                    onChange={handleNewTodoFieldChange(newTodo.id, "name")}
                  />
                </td>

                <td>
                  <input
                    type="checkbox"
                    onChange={handleNewTodoCheckboxChange(newTodo.id)}
                  />
                </td>

                <td>
                  <input
                    type="number"
                    onChange={handleNewTodoFieldChange(newTodo.id, "number")}
                  />
                </td>

                <td>
                  <div>
                    <button
                      className="create-todo-button"
                      onClick={createNewTodo(newTodo.id)}
                    >
                      Create
                    </button>

                    <button
                      className="create-todo-button"
                      onClick={removeNewTodo(newTodo.id)}
                    >
                      Remove
                    </button>
                  </div>
                </td>
              </tr>
            ))
          }

          <tr>
            <td>
              <button
                className="add-todo-button"
                onClick={placeNewTodo}
              >
                New Todo
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {
        error && <div className="error-message">{error}</div>
      }
    </div>
  );
};

export default App;
