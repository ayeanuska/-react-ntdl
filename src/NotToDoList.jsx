import React, { useState } from "react";

import TaskTableComponent from "./TaskTableComponent";
import Footer from "./Footer";
import Form from "./Form";

const NotToDoList = () => {
  const [taskList, setTaskList] = useState([
    {
      task: "Task 1",
      hr: 12,
      type: "entry",
      id: "test",
    },
    {
      task: "Task 2",
      hr: 120,
      type: "entry",
      id: "test",
    },
  ]);

  return (
    <>
      <div className="wrapper  pt-5">
        <div className="container">
          <h1 className="text-center pt-5">Not To Do List</h1>

          <Form taskList={taskList} setTaskList={setTaskList} />
          <TaskTableComponent taskList={taskList}  />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default NotToDoList;
