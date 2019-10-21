import React from "react";

function TextInput(props) {
  const { nameValue, nameChange, TextChange, TextValue, newTodo } = props;
  return (
    <div className="my-1 text-center bg-dark pb-5 corner bord">
      <label className="display-4  mb-4 p-2 text-white" htmlFor="user">
        Name
      </label>
      <input
        type="text"
        className="form-control"
        value={nameValue}
        onBlur={nameChange}
        id="user"
        placeholder="Enter Your Name and make the todo yours"
      />

      <label className="display-4 mb-4 p-2 mt-3 text-white" htmlFor="todoTask">
        Enter Task{" "}
      </label>
      <input
        type="text"
        className="form-control "
        id="todoTask"
        value={TextValue}
        onChange={TextChange}
      />

      <button className="btn btn-outline-warning mt-3" onClick={newTodo}>
        Add Task
      </button>
    </div>
  );
}

export default TextInput;
