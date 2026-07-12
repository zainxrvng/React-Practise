const todos = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Build a project", completed: false },
];

const Modal = () => {
  return (
    <>
      <div>
        <ul>
          {todos.map((todo) => {
           return <li key={todo.id}>{todo.text}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default Modal;
