import { useState } from "react";

// let todos = [
//   { id: 1, text: "Learn React", completed: false },
//   { id: 2, text: "Build a project", completed: false },
// ]; orrignal way was doing but i should use usesate to watch it so it can update it later

const Modal = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a project", completed: false },
    { id: 3, text: "hello", completed: false },
    { id: 4, text: "bye", completed: false },
  ]);

  function addToDo() {
    const newToDo = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTodo([...todo, newToDo])
    setInput("")
  }
  return (
    <>
      <div>
        <ul>
          {todo.map((todo) => {
            return <li key={todo.id}>{`${todo.text}`}</li>;
          })}
        </ul>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            addToDo();
            console.log()
          }}
        >
          add
        </button>
      </div>
    </>
  );
};

export default Modal;
