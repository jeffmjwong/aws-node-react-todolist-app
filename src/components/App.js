import React, { useState } from 'react';

const App = () => {
  const [itemList, setItemList] = useState([]);
  const [item, setItem] = useState('');

  const submitForm = () => (evt) => {
    evt.preventDefault();
    setItemList([...itemList, item]);
    setItem('');
  };

  return (
    <div>
      <form onSubmit={submitForm()}>
        <label className='m1'>
          Add item to list:

          <input
            className='ml05 mr05'
            onChange={(evt) => setItem(evt.target.value)}
            value={item}
          />

          <button>Add!</button>
        </label>
      </form>

      <ul>
        {
          itemList.map(item =>
            <li>{item}</li>
          )
        }
      </ul>
    </div>
  );
};

export default App;
