import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { TaskProvider } from "./component/TaskContext";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";
import Filter from "./component/Filter";

const App = () => {
  return (
    <TaskProvider>
      <Container>
        <Row className="justify-content-center">
          <Col className="md-6">
            <h1 className="text-center mb-4">Todo list with context</h1>
            <Filter />
            <TodoForm />
            <TodoList />
          </Col>
        </Row>
      </Container>
    </TaskProvider>
  );
};

export default App;
