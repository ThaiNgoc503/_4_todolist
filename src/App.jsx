import { useEffect, useState } from "react";
import Control from "./components/Control";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { FaPlus } from "react-icons/fa";

function App() {
  const [todo, setToDo] = useState([]);
  const [hiden, setHiden] = useState(false);

  useEffect(() => {
    if (localStorage && localStorage.getItem("todo")) {
      var todo = JSON.parse(localStorage.getItem("todo"));
      setToDo(todo);
    }
  }, []);

  const onCloseFrom = () => {
    setHiden(false);
  };

  const onSubmit = (value) => {
    value.id = Id();
    if (value.name != "") {
      const up = [...todo, value];
      setToDo(up);
      localStorage.setItem("todo", JSON.stringify(up));
    }
  };

  const onHiden = hiden ? (
    <TaskForm onCloseFrom={onCloseFrom} onSubmit={onSubmit} />
  ) : (
    ""
  );

  const onHidenForm = () => {
    setHiden(!hiden);
  };

  const onDelete = (id) => {
    const value = todo.filter((todo) => todo.id !== id);
    setToDo(value);
    localStorage.setItem("todo", JSON.stringify(value));
  };

  const onChangeStatus = (id) => {
    const upValue = todo.map((value) => {
      if (id === value.id) {
        return {...value, status: !value.status}
      } else {
        return value;
      }
    });
    setToDo(upValue);
    localStorage.setItem("todo", JSON.stringify(upValue));

  };

  const generate = () => {
    var todo = [
      {
        name: "Homer Hoppe",
        status: true,
        id: Id(),
      },
      {
        name: "Lucille Russel IV",
        status: false,
        id: Id(),
      },
      {
        name: "Jonathan Abernathy",
        status: true,
        id: Id(),
      },
      {
        name: "Jonathan Bable",
        status: false,
        id: Id(),
      },
    ];
    localStorage.setItem("todo", JSON.stringify(todo));
  };

  const id = () =>
    Math.round((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  const Id = () => id() + "_" + id() + id() + "_" + id() + id() + "_" + id();
  return (
    <div className="container">
      <div>
        {/* Tiêu đề */}
        <h1 className="text-center">Quản Lý Công Việc</h1>
        {/* -- End Tiêu Đề -- */}
        <hr />
        <div className="row">
          <div className={hiden ? "col-4" : "col-0"}>
            {/* Task Form */}
            {onHiden}
            {/* -- End Task Form -- */}
          </div>

          <div className={hiden ? "col-8" : "col-12"}>
            <div className="text-start">
              {/* Add work bt */}
              <button
                className="btn btn-info mb-3"
                onClick={() => onHidenForm()}
              >
                <FaPlus className="mb-1" /> Thêm Công Việc
              </button>
              <button
                className="btn btn-danger mb-3"
                style={{ marginLeft: "5px" }}
                onClick={() => generate()}
              >
                Generate Data
              </button>
              {/* -- End add word bt --*/}
            </div>

            {/* Search and sort */}
            <Control />
            {/* -- End Search And Sort -- */}

            {/* Task List */}
            <TaskList
              todo={todo}
              onDelete={onDelete}
              onChangeStatus={onChangeStatus}
            />
            {/* -- End Task List -- */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
