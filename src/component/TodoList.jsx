/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { Container, ListGroup } from "react-bootstrap";
import { TaskContext } from "./TaskContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  // Access tasks and deleteTask via useContext
  const { tasks, deleteTask, toggleTaskCompleted, editTask } =
    useContext(TaskContext);
  return (
    <Container>
      <ListGroup>
        {tasks.length === 0 ? (
          <p>No tasks available</p>
        ) : (
          tasks.map((task, index) => (
            <TodoItem
              key={index}
              task={task}
              toggleTaskCompleted={() => toggleTaskCompleted(index)}
              deleteTask={() => deleteTask(index)}
              editTask={(newTask) => editTask(index, newTask)}
            />
          ))
        )}
      </ListGroup>
    </Container>
  );
};

export default TodoList;
