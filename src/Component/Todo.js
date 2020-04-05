// import
import React from 'react';
import TodoItem from './TodoItem';


// class
class Todo extends React.Component {

    // view
    render(){
        return(
            <div className="todo-item">
                <TodoItem name="掃除" priority="1"/>
                <TodoItem name="勉強" priority="2"/>
                <TodoItem name="ランニング" priority="3"/>
            </div>
        );
    }
}

// export
export default Todo;