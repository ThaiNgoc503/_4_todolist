import React from "react";

const Sort = () => {
  return (
      <div className="col-3">
        <div className="input-group">
          <button
            className="btn btn-info dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Sắp xếp
          </button>
          <ul className="dropdown-menu">
            <li className="dropdown-item" href="#">
              Tên A-Z
            </li>
            <li className="dropdown-item" href="#">
              Tên Z-A
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="dropdown-item" href="#">
              Active
            </li>
            <li className="dropdown-item" href="#">
              Hiden
            </li>
          </ul>
        </div>
      </div>
  );
};

export default Sort;
