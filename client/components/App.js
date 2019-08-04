import React, { useState, useEffect } from 'react';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState(null);

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

  const submitForm = () => (evt) => {
    evt.preventDefault();
    setTodos([...todos, todo]);
    setTodo(null);
  };

  return (
    <div>
      <form onSubmit={submitForm()}>
        <label className='m1'>
          Add todo to list:
          <input
            className='ml05 mr05'
            onChange={(evt) => setTodo({ name: evt.target.value })}
            value={todo}
          />

          <button>Add!</button>
        </label>
      </form>

      {/* <div className="mt1">
        <button onClick={sendRequest}>Send request to /todos</button>
      </div> */}

      <ul>
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
