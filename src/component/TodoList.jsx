/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import { TaskContext } from "./TaskContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  // Access tasks and deleteTask via useContext
  const { tasks, deleteTask } = useContext(TaskContext);
  return (
    <Container>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            deleteTask={() => deleteTask(index)}
          />
        ))
      )}
    </Container>
  );
};

export default TodoList;
