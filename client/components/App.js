import React, { useState, useEffect } from 'react';
import uuidv1 from 'uuid/v1';

import './App.scss';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodos, setNewTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    getTodos().then(todos => setTodos(todos));
  }, []);

  const getTodos = async () => {
    try {
      const results = await fetch('http://localhost:3001/todos');
      return await results.json();
    } catch(err) {
      console.log(err);
    }
  };

  const createTodo = async (todo) => {
    const results = await fetch('http://localhost:3001/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ todo }),
    });

    if (results.status === 422) {
      const error = await results.json();
      throw new Error(error);
    } else {
      const data = await results.json();
      return data;
    }
  };

  const createNewTodo = () => {
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

  const handleSomething = () => {
    const abc = newTodos;
    debugger;
  }

  // const submitForm = () => (evt) => {
  //   evt.preventDefault();

  //   createTodo(newTodo)
  //     .then(todo => {
  //       setTodos([...todos, todo]);
  //       setNewTodo('');
  //     })
  //     .catch(err => {
  //       setError(err);
  //     });
  // };

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
                  <button>Create</button>
                </td>
              </tr>
            ))
          }

          <tr>
            <td>
              <button
                className="add-todo-button"
                onClick={createNewTodo}
              >
                New Todo
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <button onClick={handleSomething}>Click me</button>

      {/* <form onSubmit={submitForm()}>
        <label className='m1'>
          Add todo to list:
          <input
            className='ml05 mr05'
            onChange={(evt) => setNewTodo(evt.target.value)}
            value={newTodo}
          />

          <button>Add!</button>
        </label>
      </form> */}
    </div>
  );
};

export default App;
