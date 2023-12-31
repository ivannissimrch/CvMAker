import classes from "./EditableList.module.css";
import { useState } from "react";
import Form from "./Form";

const EditableList = ({ dataArray, onDeleteData, onEditData }) => {
  const [showForm, setShowForm] = useState(false);
  const [showList, setShowList] = useState(true);
  const [dataToBeEdited, setDataToBeEdited] = useState("");
  const handleClickDelete = (id) => {
    onDeleteData(id);
  };

  const ExitEditMode = () => {
    setShowForm(!showForm);
    setShowList(!showList);
  };

  const handleClickEdit = (workObject) => {
    setShowForm(!showForm);
    setShowList(!showList);
    setDataToBeEdited(workObject);
  };

  return (
    <div className={classes.mainContainer}>
      {dataArray.map(
        (item) =>
          showList && (
            <div key={item.id} className={classes.prevContainer}>
              <div className={classes.prevDescription}>
                {item.degree && `${item.degree} `}
                {item.position && `${item.position} `}
                {item.university && `${item.university}`}
                {item.company && `${item.company}`}
              </div>
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
          data={dataToBeEdited}
          action={onEditData}
          closeForm={ExitEditMode}
        />
      )}
    </div>
  );
};

export default EditableList;
