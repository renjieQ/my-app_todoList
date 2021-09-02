import React from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {
  const [inputText, setInputText] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  const [status, setStatus] = React.useState("all");
  const [filteredTodos, setFilteredTodos] = React.useState([]);

  React.useEffect(() => {
    const handleFilter = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "uncomplete":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };

    handleFilter();
  }, [status, todos]);

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
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
};

export default App;
