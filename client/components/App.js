import React, { useState, useEffect } from 'react';

import './App.scss';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

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

  const createTodo = async () => {
    try {
      const results = await fetch('http://localhost:3001/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ a: 'Booyah!' })
      });
      const data = await results.json();
    } catch(err) {
      console.log(err);
    }
  }

  // const submitForm = () => (evt) => {
  //   evt.preventDefault();

  //   setTodos([...todos, todo]);
  //   setTodo('');
  // };

  return (
    <div>
      <form onSubmit={createTodo}>
        <label className='m1'>
          Add todo to list:
          <input
            className='ml05 mr05'
            onChange={(evt) => setTodo(evt.target.value)}
            value={todo}
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
