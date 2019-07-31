import React, { useState } from 'react';

const App = () => {
  const [itemList, setItemList] = useState([]);

  return (
    <div>
      <form>
        <label className="m1">
          Add item to list:

          <input
            className="ml05 mr05"
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
