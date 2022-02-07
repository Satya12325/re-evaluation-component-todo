import TodoInput from "./TodoInput";
import { useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuid } from "uuid";

export default function Todo() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Defalt",
      status: false
    }
  ]);
  const [showCompleted, setShowCompleted] = useState(false);
  const [checked, setChecked] = useState(true);

  const handleChanged = (event) => {
    setChecked(event.target.checked);
  };
  const handleTaskCreate = (title) => {
    const payload = {
      id: uuid(),
      title: title,
      status: false
    };
    setTodos([...todos, payload]);
  };
  // delete
  const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  // * toggle
  const handleToggle = (id) => {
    const updatedTodos = todos.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setTodos(updatedTodos);
  };
  return (
    <>
      <div className="MainContainer">
        <TodoInput onTask={handleTaskCreate} />
        <div>
          {todos
            .filter((item) => !item.status)
            .map((todo) => {
              return (
                <TodoList
                  key={todo.id}
                  {...todo}
                  handleDelete={handleDelete}
                  handleToggle={handleToggle}
                />
              );
            })}
        </div>
        <div>
          <button
            onClick={() => setShowCompleted(!showCompleted)}
            style={{
              background: "green",
              color: "white",
              borderRadius: "5px",
              margin: "10px"
            }}
          >
            SHOW COMPLETED TO-DOS
          </button>
        </div>
        <div>
          {showCompleted &&
            todos
              .filter((item) => item.status)
              .map((todo) => {
                return (
                  <TodoList
                    key={todo.id}
                    {...todo}
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}
                    checked={checked}
                    handleChanged={handleChanged}
                  />
                );
              })}
        </div>
      </div>
    </>
  );
}
