import React from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {
  const [inputText, setInputText] = React.useState("");

  return (
    <div className="App">
      <header>
        <h1>Let's do Todo List</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} />
      <TodoList />
    </div>
  );
};

export default App;
