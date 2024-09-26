import React from "react";
import { Button, Container } from "react-bootstrap";

const TodoItem = ({ task, deleteTask }) => {
  return (
    <Container>
      <p>{task.task}</p>
      <Button variant="outline-danger" onClick={deleteTask}>Delete</Button>
    </Container>
  );
};

export default TodoItem;
