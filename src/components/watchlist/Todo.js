import { ListItemText, ListItem } from "@material-ui/core";
import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { ListItemSecondaryAction } from "@material-ui/core";
function Todo({ task, completed, removeTodo, id, toggleTodo }) {
  return (
    <ListItem>
      <Checkbox
        tabIndex={-1}
        checked={completed}
        onClick={() => toggleTodo(id)}
      />
      <ListItemText
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        {task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default Todo;
