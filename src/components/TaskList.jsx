import React, { useEffect, useState } from "react";

const TaskList = ({ todo, onDelete, onChangeStatus }) => {
  return (
    <div>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th style={{ backgroundColor: "yellow" }} scope="col">
              STT
            </th>
            <th style={{ backgroundColor: "yellow" }} scope="col">
              Tên
            </th>
            <th style={{ backgroundColor: "yellow" }} scope="col">
              Trạng Thái
            </th>
            <th style={{ backgroundColor: "yellow" }} scope="col">
              Hành Động
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td>
              <div className="input-group">
                <input className="form-control" />
              </div>
            </td>
            <td>
              <div className="input-group">
                <button
                  className="btn dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Sắp xếp
                </button>
                <ul className="dropdown-menu">
                  <li className="dropdown-item" href="#">
                    Tất Cả
                  </li>
                  <li className="dropdown-item" href="#">
                    Active
                  </li>
                  <li className="dropdown-item" href="#">
                    Hiden
                  </li>
                </ul>
              </div>
            </td>
            <td></td>
          </tr>

          {todo.map((value, index) => (
              <tr key={ value.id }>
                <th scope="row">{ index + 1 }</th>
                <td>{value.name}</td>
                <td>
                  <button
                    className={value.status ? "btn btn-info" : "btn btn-danger"}
                    onClick={() => onChangeStatus(value.id)}
                  >
                    {value.status?"Active":"hiden"}
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-warning"
                    style={{ marginRight: "3px" }}
                  >
                    Sữa
                  </button>
                  <button className="btn btn-danger" onClick={() => onDelete(value.id)}>Xóa</button>
                </td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
