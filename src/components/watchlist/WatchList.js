import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Grid from "@material-ui/core/Grid";
import { v4 as uuidv4 } from "uuid";
import { ukUAGrid } from "@material-ui/data-grid";
function WatchList() {
  const initialTodos = JSON.parse(window.localStorage.getItem("todos") || []);
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState(initialTodos);
  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const reset = () => {
    setValue("");
  };
  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }]);
  };
  const toggleTodo = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };
  const removeTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };
  return (
    <div style={{ marginTop: "4rem" }}>
      <Grid container justify="center">
        <Grid item sx={11} md={8} lg={4}>
          <TodoForm
            addTodo={addTodo}
            value={value}
            handleChange={handleChange}
            reset={reset}
          />
          <TodoList
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
            todos={todos}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default WatchList;
