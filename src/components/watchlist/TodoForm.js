import React from "react";
import { TextField } from "@material-ui/core";
import { Paper } from "@material-ui/core";
function TodoForm({ value, handleChange, addTodo, reset, toggleTodo }) {
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField
          fullWidth
          margin="noraml"
          label="add new episode"
          value={value}
          onChange={(e) => handleChange(e)}
        />
      </form>
    </Paper>
  );
}

export default TodoForm;
