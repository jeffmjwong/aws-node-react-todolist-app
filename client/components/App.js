import React, { useState, useEffect } from 'react';

import './App.scss';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

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
  }

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
  }

  const submitForm = () => (evt) => {
    evt.preventDefault();

    createTodo(newTodo)
      .then(todo => {
        setTodos([...todos, todo]);
        setNewTodo('');
      })
      .catch(err => {
        debugger;
      });
  };

  return (
    <div>
      <form onSubmit={submitForm()}>
        <label className='m1'>
          Add todo to list:
          <input
            className='ml05 mr05'
            onChange={(evt) => setNewTodo(evt.target.value)}
            value={newTodo}
          />

          <button>Add!</button>
        </label>
      </form>

      {/* <div className="mt1">
        <button onClick={sendRequest}>Send request to /todos</button>
      </div> */}

      <ul className="todo-list">
        {
          todos.map(todo =>
            <li key={todo.id}>{todo.name}</li>
          )
        }
      </ul>
    </div>
  );
};

export default App;
