import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { TaskProvider } from "./component/TaskContext";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";

const App = () => {
  return (
    <TaskProvider>
      <Container>
        <h1 className="text-center mt-5">Todo List</h1>
        <TodoForm/>
        <TodoList/>
      </Container>
    </TaskProvider>
  );
};

export default App;
