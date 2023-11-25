import React from "react";
import TaskForm from "./TaskForm";
import TasksList from "./TasksList";

const ToDo = () => {
  return (
    <section>
      <TaskForm />
      <TasksList />
    </section>
  );
};

export default ToDo;
