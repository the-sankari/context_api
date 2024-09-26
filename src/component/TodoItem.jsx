/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Button, Container, Form, ListGroup } from "react-bootstrap";

const TodoItem = ({ task, deleteTask, toggleTaskCompleted, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task.task);
  const handleEdit = () => {
    if (isEditing) {
      editTask(newTask);
    }
    setIsEditing(!isEditing);
  };
  return (
    <ListGroup.Item
      style={{ textDecoration: task.completed ? "line-through" : "none" }}
    >
      {isEditing ? (
        <Form.Control
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      ) : (
        <Form.Check
          type="checkbox"
          checked={task.completed}
          onChange={toggleTaskCompleted}
          label={task.task}
        />
      )}
      <div>
        <Button
        variant={isEditing ? "Succes": "warning"}
        onClick={handleEdit}

        >
            {isEditing ? "Save": "Edit"}
        </Button>
        <Button
        variant="danger"
        onClick={deleteTask}
        className="ml-2 m-2"
        >
            Delete
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default TodoItem;
