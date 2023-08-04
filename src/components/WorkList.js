import { useState } from "react";
import classes from "./WorkList.module.css";
import Form from "./Form";
const Worklist = ({ workArray, onDeleteWork, onEditWork }) => {
  const [showForm, setShowForm] = useState(false);
  const [showWork, setShowWork] = useState(true);
  const [dataToBeEdited, setDataToBeEdited] = useState("");
  const handleClickDelete = (id) => {
    onDeleteWork(id);
  };

  const ExitEditMode = () => {
    setShowForm(!showForm);
    setShowWork(!showWork);
  };

  const handleClickEdit = (workObject) => {
    setShowForm(!showForm);
    setShowWork(!showWork);
    setDataToBeEdited(workObject);
  };

  return (
    <div className={classes["work-list"]}>
      {workArray.map(
        (item) =>
          showWork && (
            <div key={item.id}>
              <div>{`${item.position} ${item.company}`}</div>
              <div>
                <button onClick={() => handleClickEdit(item)}>edit</button>
                <button onClick={() => handleClickDelete(item.id)}>
                  delete
                </button>
              </div>
            </div>
          )
      )}
      {showForm && (
        <Form
          type="work-editing"
          data={dataToBeEdited}
          action={onEditWork}
          closeForm={ExitEditMode}
        />
      )}
    </div>
  );
};

export default Worklist;
