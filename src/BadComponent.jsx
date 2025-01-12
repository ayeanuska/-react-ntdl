import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

const BadComponent = ({ taskList }) => {
  return (
    <div>
      <div class="col-md">
        <h1 className="text-center">Bad List</h1>
        <hr />
        <table className="table border table-striped table-hover">
          <tbody id="bad-list">
            {taskList.map((item, index) => {
              return (
                <tr>
                  <th>{index}</th>
                  <td>{item.task}</td>
                  <td>{item.hr}</td>
                  <td className="text-end">
                    <button onClick="" className="btn btn-danger">
                      <FaRegTrashCan />
                    </button>
                    <button onClick="" className="btn btn-warning">
                      <FaArrowLeftLong />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div class="row p-5">
          <div className="alert alert-danger" role="alert">
            You could have saved <span id="badHour">0</span> hours
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadComponent;
