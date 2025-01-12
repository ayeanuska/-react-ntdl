import React, { useState } from "react";

const Form = ({ taskList, setTaskList }) => {
  const [taskInput, setTaskInput] = useState("");
  const [hourInput, setHourInput] = useState(0);

  const handleOnChangeTaskInput = (e) => {
    setTaskInput(e.target.value);
  };

  const handleOnChangeHourInput = (e) => {
    setHourInput(parseInt(e.target.value));
  };

  const handleOnSubmit = (event) => {
    const taskObj = {
      task: taskInput,
      hr: hourInput,
      type: "entry",
      id: "TEST",
    };

    const tempList = [...taskList];
    tempList.push(taskObj);

    setTaskList(tempList);
    event.preventDefault();
  };
  return (
    <>
      <form action="javascript:void(0)" onSubmit={handleOnSubmit}>
        <div className="row g-2 mt-5 shadow-lg border p-5 rounded">
          <div className="col-md-7">
            <input
              type="text"
              className="form-control"
              placeholder="Task"
              aria-label="Task"
              id="task"
              name="task"
              required
              value={taskInput}
              onChange={handleOnChangeTaskInput}
            />
          </div>
          <div className="col-md-2">
            <input
              name="hr"
              type="number"
              className="form-control"
              placeholder="hours"
              aria-label="hours"
              required
              min="1"
              value={hourInput}
              onChange={handleOnChangeHourInput}
            />
          </div>
          <div className="col-md-3 d-grid">
            <button className="btn btn-primary" type="submit">
              Add New Task
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
