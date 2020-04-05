// import
import React from 'react';

// function
function TodoItem(props) {

    return (
        <p id={props.name} onClick={() => {document.getElementById(props.name).remove();}}>
            項目:{props.name},  優先順位:{props.priority}
        </p>
    );
}


// exoprt
export default TodoItem;