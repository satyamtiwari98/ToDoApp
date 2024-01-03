import { useState, useRef } from "react";
import Display from "../Display/Display";

const Todo = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  const inputRef = useRef(null);

  const inputText = (event) => {
    setText(event.target.value);
  };

  const add = () => {
    if (inputRef.current.value != "") {
      setTodo([...todo, text]);
      reset();
    }
  };

  const reset = () => {
    // Resetting the input value using useRef
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleRemoveElement = (indexToRemove) => {
    const updatedArray = todo.filter((_, index) => index !== indexToRemove);
    setTodo(updatedArray);
  };

  const handleElement = (indexToEdit, newText) => {
    setTodo((prevTodos) =>
      prevTodos.map((todo, index) => (index === indexToEdit ? newText : todo))
    );
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <div>Todo App</div>
      <div className="flex flex-row p-5 m-4 space-x-4">
        <input
          type="text"
          className="rounded-lg bg-slate-500 my-2 p-4"
          ref={inputRef}
          onChange={inputText}
        />
        <button onClick={add} className="rounded-full bg-gray-800 p-4 my-2">
          Add
        </button>
        <button onClick={reset} className="rounded-full bg-red-500 p-4 my-2">
          Reset
        </button>
      </div>
      <Display
        todo={todo}
        onRemoveElement={handleRemoveElement}
        onHandleElement={handleElement}
      />
    </div>
  );
};

export default Todo;
