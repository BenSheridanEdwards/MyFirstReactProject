// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React component
const App = () => {
  function getTime() {
    return (new Date()).toLocaleTimeString()
  }


  const buttonText = { text: 'Click me' };
  const labelText = 'Enter name:';
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white'}}>
        {buttonText.text}
      </button>
      <p>The time is: {getTime()}</p>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));