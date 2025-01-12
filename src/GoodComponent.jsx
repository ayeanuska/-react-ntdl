import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const GoodComponent = ({ taskList }) => {
  return (
    <div>
      <div className="col-md">
        <h1>Entry List</h1>
        <hr />
        <table className="table border table-striped table-hover">
          <tbody id="entry-list">
            {taskList.map((item, index) => {
              return (
                <tr>
                  <th>{index}</th>
                  <td>{item.task}</td>
                  <td>{item.hr}hrs</td>
                  <td className="text-end">
                    <button onClick={""} className="btn btn-danger btn-sm">
                      <FaRegTrashCan />
                    </button>
                    <button onClick={""} className="btn btn-success btn-sm">
                      <FaArrowRight />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GoodComponent;
