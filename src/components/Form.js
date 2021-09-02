import React from "react";

const Form = ({ todos, setTodos, inputText, setInputText, setStatus }) => {
  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmitTodo = (e) => {
    e.preventDefault();
    if (inputText) {
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Math.random() * 1000 },
      ]);
      setInputText("");
    }
    return;
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={handleInputText}
        type="text"
        className="todo-input"
      />
      <button onClick={handleSubmitTodo} className="todo-button" type="submit">
        <i className="fas fa-plus-square"> i am Form</i>
      </button>
      <div className="select">
        <select onChange={handleStatus} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncomplete">Uncomplete</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
