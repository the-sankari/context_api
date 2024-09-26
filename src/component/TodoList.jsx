/* eslint-disable react/prop-types */
import React from "react";
import { Button } from "react-bootstrap";

const TodoList = ({ task, deleteTask }) => {
  return (
    <div>
      <p>{task.task}</p>
      <Button onClick={deleteTask}>Delete</Button>
    </div>
  );
};

export default TodoList;
