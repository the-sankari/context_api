import React, { useContext } from "react";
import { TaskContext } from "./TaskContext";
import { Button, ButtonGroup } from "react-bootstrap";

function Filter() {
  const { setFilter } = useContext(TaskContext);

  return (
    <ButtonGroup className="mb-3 d-flex justify-content-center">
      <Button variant="outline-secondary" onClick={() => setFilter("All")}>
        All
      </Button>
      <Button
        variant="outline-secondary"
        onClick={() => setFilter("Completed")}
      >
        Completed
      </Button>
      <Button
        variant="outline-secondary"
        onClick={() => setFilter("Incomplete")}
      >
        Incomplete
      </Button>
    </ButtonGroup>
  );
}

export default Filter;
