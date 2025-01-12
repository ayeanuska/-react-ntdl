import React from "react";
import GoodComponent from "./GoodComponent";
import BadComponent from "./BadComponent";

const TaskTableComponent = ({ taskList }) => {
  return (
    <div className="row mt-5 gap-2">
      <GoodComponent taskList={taskList} />
      <BadComponent taskList={taskList} />
    </div>
  );
};

export default TaskTableComponent;
