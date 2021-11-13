// import React, { useState } from 'react';
// import "./app.css";

// function ToDoList(props) {
//     return <>
//         <button className="cross" onClick={() => {
//             props.onSelect(props.id)
//         }}>X</button>
//         <li>{" " + props.text}</li>
//         <br />
//         <br />
//         </>
// }

// export default ToDoList;





import React from "react";
import "./app.css"

const ToDoLists = (props) => {
    return <>
        <button
            className="cross"
            onClick={()=>{
            props.onSelect(props.id)
            }}>X</button>
        <li>{" "}{props.text}</li>
        <br/>
        <br/>
        </>
}

export default ToDoLists;
