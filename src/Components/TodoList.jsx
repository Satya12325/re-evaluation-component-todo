import { useState } from "react";

export default function TodoList({
  id,
  status,
  title,
  handleDelete,
  handleToggle,
  handleChanged,
  checked
}) {
  var listNumber = id;

  if (listNumber === 1) {
    return "";
  }
  if (status === true) {
    var Style = {
      color: "green",
      textDecoration: "line-through"
    };
  }
  return (
    <div
      style={{
        Maxwidth: "300px",
        background: "transparent",
        border: "1px solid black",
        margin: "1rem",
        display: "flex",
        justifyContent: "space-between",
        padding: "0 1rem"
      }}
    >
      <div onClick={() => handleToggle(id)} style={Style}>
        <input
          type="checkbox"
          style={{ width: "30px", height: "15px" }}
          checked={checked}
          onChange={handleChanged}
        />
        {title}
      </div>
      <button onClick={() => handleDelete(id)}>X</button>
    </div>
  );
}
