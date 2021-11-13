// import React, { useState } from 'react';
// import "./app.css";
// import ToDoList from './ToDoList';

// function App() {
  
//   const [inputList, setInputList] = useState("");
//   const [items, setItems] = useState([]);

//   const InputChange = (event) => {
//     setInputList(event.target.value)
//   }

//   const AddItem = () => {
//     setItems((oldItems) => {
//       return [...oldItems, inputList]
//     });
//     setInputList("");
//   }

//   const deleteItem = (id) => {
//     setItems((oldItems) => {
//       return oldItems.filter((arrElement, index) => {
//         return index != id;
//       })
//     })
//   }

//   return (
//     <>
//       <div className="parent">
//         <div className="center-div">
//           <br />
//           <h1>ToDo List</h1>
//           <br />
//           <input type="text" placeholder="Add an Item" value={ inputList } onChange={ InputChange }/>
//           <button onClick={AddItem}>+</button>
//           <br />
//           <ol>
//             {items.map((element, index) => {
//               return <ToDoList
//                 text= {element}
//                 key= {index}
//                 id={index}
//                 onSelect= {deleteItem}
//               />
//             }) }
//           </ol>
//         </div>
//       </div>
//       </>
//   )
// }

// export default App;

import { useState } from "react";
import "./app.css";
import ToDoLists from "./ToDoList.js";

function App() {

  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const InputChange = (event) => {
    setInputList(event.target.value)
  }

  const addItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]
    })
    setInputList("")
  }

  const deleteItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <>
      <div className="parent">
        <div className="center-div">
          <br/>
          <h1>ToDo List</h1>
          <br />
          {/* <input type="text" placeholder="Add an Item" onChange={InputChange} /> */}
          <input
            type="text"
            placeholder="Add an Item"
            onChange={InputChange}
            value={inputList}
          />
          <button onClick={addItem}>+</button>
          <ul>
            {items.map((itemval, index) => {
              return <ToDoLists
                text={itemval}
                key={index}
                id={index}
                onSelect={deleteItem}
              />
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;