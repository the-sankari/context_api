import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { TaskContext } from "./TaskContext";

const TodoForm = () => {
  const [input, setInput] = useState("");

  // use useContext to access addTask
  const {addTask} = useContext(TaskContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(input);
    setInput("");
    console.log("Submit button clicked", input);
  };
  return (
    <Container className="fluid">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Add Task</Form.Label>
          <Form.Control
            type="text"
            placeholder="Write a task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </Form.Group>
        <Button variant="outline-secondary" type="submit">
          Add{" "}
        </Button>
      </Form>
    </Container>
  );
};

export default TodoForm;
