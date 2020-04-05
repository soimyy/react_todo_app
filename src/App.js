import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Todo from './Component/Todo';

class App extends React.Component {

  render(){
    const title = 'Todo Manager';

    return(
      <div>
        <div className="title">{title}</div>
        <div className="todo">
          <Todo />
        </div>
      </div>
    )
  }
}

export default App;
