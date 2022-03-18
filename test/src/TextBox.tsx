import React from 'react';
import './App.css';

function TextBox(props: any) {
  const myHandler = (event: any) => {
    props.stateFunction(event.target.value)
    // event has the change
  }
  return (
    <div className="TextBox">
      <input type={'text'} onChange={myHandler}/>
      <header className="TextBox-header">
        <p>
            {props.label}
        </p>
      </header>
    </div>
  );
}

export default TextBox;
