import React, { useState } from "react";
import { TiDelete } from "react-icons/ti";

const TaskForm = (props) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState(true);
  
  const onClose = () => {
    props.onCloseFrom();
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeStatus = (e) => {
    setStatus(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(name);
    // console.log(status);
    var state = {name: name, status: status === 'true' ? true : false};
    props.onSubmit(state)
  };

  const onCancel = () => {
    // props.onCancelData();
    setName("");
    setStatus(true)
  }

  return (
    <div>
      <div className="card">
        <div
          style={{
            background: "red",
            justifyContent: "space-between",
            display: "flex",
          }}
          className="card-img-top p-2"
        >
          <p className="text-start mt-2">Thêm Công Viêc</p>
          <p className="fs-4 mb-1" onClick={() => onClose()}>
            <TiDelete />
          </p>
        </div>
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <div className="input-group mb-3">
              <span className="input-group-text">Tên</span>
              <input
                className="form-control form-control-sm"
                name="name"
                value={name}
                onChange={onChangeName}
              />
            </div>

            <div className="input-group">
              <span className="input-group-text" style={{ height: "37.33px" }}>
                Trạng Thái
              </span>
              <select
                className="form-select mb-3"
                aria-label="Default select example"
                name="status"
                value={status}
                onChange={onChangeStatus}
              >
                <option value={true}>Active</option>
                <option value={false}>Hiden</option>
              </select>
            </div>
            <div className="text-center">
              <button className="btn btn-warning" type="submit">
                Lưu Lại
              </button>
              <button
                className="btn btn-success"
                type="reset"
                style={{ marginLeft: "5px" }}
                onClick={() => onCancel()}
              >
                Hủy Bỏ
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
