import React, { useState } from "react";
import PropTypes from "prop-types";

const TodoFrom = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleFromSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("No Blank Todo");
      return;
    }

    addTodo(value);

    alert(value);
    setValue("");
  };

  console.log("value", value);

  return (
    <section className="add">
      <form className="add-form" onSubmit={handleFromSubmit}>
        <input
          type="text"
          name=""
          className="add-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="add-btn main-black-color">Add</button>
      </form>
    </section>
  );
};

TodoFrom.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default TodoFrom;
