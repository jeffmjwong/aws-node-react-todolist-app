import React from 'react';

const App = () => {
  const returnButton = () => {
    if (true) {
      const exclaimationMarks = '!!!';
      return <button className='ml2'>{`Click me${exclaimationMarks}`}</button>
    } else {
      return <button className='ml2'>Click me!</button>
    }
  };

  return (
    <div>
      <p>Hello world!</p>
      {returnButton()}
    </div>
  );
};

export default App;
