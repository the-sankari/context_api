/* eslint-disable react/prop-types */
import React from "react";
import { Button, Container, Form, ListGroup } from "react-bootstrap";

const TodoItem = ({ task, deleteTask, toggleTaskCompleted }) => {
  return (
    <ListGroup.Item
      style={{ textDecoration: task.completed ? "line-through" : "none" }}
    >
      <Form.Check
        type="checkbox"
        checked={task.completed}
        onChange={toggleTaskCompleted}
      />
      {task.task}
      <Button variant="outline-danger" onClick={deleteTask}>
        Delete
      </Button>
    </ListGroup.Item>
  );
};

export default TodoItem;
