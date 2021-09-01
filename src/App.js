import React from "react";
import "./App.css";
import Form from "./components/Form";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";

const App = () => {
  const [inputText, setInputText] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  return (
    <div className="App">
      <header>
        <h1>Let's do Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
      />
      <TodoList todos={todos} />
      <Todo />
    </div>
  );
};

export default App;
