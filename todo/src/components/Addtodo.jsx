import { useState } from "react";

const Addtodo = () => {
  const [input, setInput ] = useState("")
  const addbutton = () => {
    if (input === !"") {
      const newtodo = {
        id: Date.now(),
        text: input,
        completed: false
      }

    }
  };
  return (
    <div>
      <input type="text" value={input} onChange={(e) => {setInput(e.target.value)}} />
      <button ></button>
    </div>
  );
};

export default Addtodo;
