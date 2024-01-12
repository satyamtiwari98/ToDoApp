import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoAction, RemoveTodoAction } from "./actions/TodoActions";

function App() {
  const [todo, setTodo] = useState();
  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);

  const { todos } = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  };

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));
  };

  return (
    <div>
      <header>
        <h2>ToDo List App in Redux</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Todo "
            style={{
              width: 350,
              padding: 10,
              borderRadius: 20,
              border: "none",
              fontSize: 20,
            }}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type="submit"
            style={{
              padding: 12,
              borderRadius: 25,
              fontSize: 15,
              marginLeft: 20,
            }}
          >
            Go
          </button>
        </form>

        <ul>
          {todos &&
            todos.map((t) => (
              <li key={t.id}>
                <span className="todotext">{t.todo}</span>
                <button
                  style={{
                    borderRadius: 25,
                    padding: 10,
                    border: "1px solid white",
                    backgroundColor: "orangered",
                  }}
                  onClick={() => removeHandler(t)}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
