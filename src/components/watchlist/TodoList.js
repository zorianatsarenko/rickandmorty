import { ListItemText } from "@material-ui/core";
import React from "react";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import Todo from "./Todo";
function TodoList({ todos, removeTodo, toggleTodo }) {
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <>
            <Todo
              toggleTodo={toggleTodo}
              id={todo.id}
              removeTodo={removeTodo}
              task={todo.task}
              key={todo.id}
              completed={todo.completed}
            />

            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
