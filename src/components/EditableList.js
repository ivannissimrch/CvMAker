import classes from "./EditableList.module.css";
import { useState } from "react";
import Form from "./Form";

const EditableList = ({ type, dataArray, onDeleteData, onEditData }) => {
  const formEditType = `${type}-editing`;
  const [showForm, setShowForm] = useState(false);
  const [showWork, setShowWork] = useState(true);
  const [dataToBeEdited, setDataToBeEdited] = useState("");
  const handleClickDelete = (id) => {
    onDeleteData(id);
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
    <div className={classes.mainContainer}>
      {dataArray.map(
        (item) =>
          showWork && (
            <div key={item.id} className={classes.prevContainer}>
              <div className={classes.prevDescription}>{`${
                item.position || item.degree
              } ${item.company || item.university}`}</div>
              <div className={classes.btnContainer}>
                <button
                  className={classes.buttons}
                  onClick={() => handleClickEdit(item)}
                >
                  edit
                </button>
                <button
                  className={classes.buttons}
                  onClick={() => handleClickDelete(item.id)}
                >
                  delete
                </button>
              </div>
            </div>
          )
      )}
      {showForm && (
        <Form
          type={formEditType}
          data={dataToBeEdited}
          action={onEditData}
          closeForm={ExitEditMode}
        />
      )}
    </div>
  );
};

export default EditableList;
