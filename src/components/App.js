import React, { useState } from 'react';

const App = () => {
  const [itemList, setItemList] = useState([]);

  return (
    <div>
      <label className="m1">
        Add item to list:
        <input />
        <button>Add!</button>
      </label>
    </div>
  );
};

export default App;
