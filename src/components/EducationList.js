import { useState } from "react";
import classes from "./WorkList.module.css";
//change this css module to education list or remane the css module
import Form from "./Form";
const Educationlist = ({
  educationArray,
  onDeleteEducation,
  onEditEducation,
}) => {
  const [showForm, setShowForm] = useState(false);
  const [showEducation, setShowEducation] = useState(true);
  const [dataToBeEdited, setDataToBeEdited] = useState("");
  const handleClickDelete = (id) => {
    onDeleteEducation(id);
  };

  const ExitEditMode = () => {
    setShowForm(!showForm);
    setShowEducation(!showEducation);
  };

  const handleClickEdit = (educationObject) => {
    setShowForm(!showForm);
    setShowEducation(!showEducation);
    setDataToBeEdited(educationObject);
  };

  return (
    <div className={classes["work-list"]}>
      {educationArray.map(
        (item) =>
          showEducation && (
            <div key={item.id}>
              <div>{`${item.university} ${item.degree}`}</div>
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
          type="education-editing"
          data={dataToBeEdited}
          action={onEditEducation}
          closeForm={ExitEditMode}
        />
      )}
    </div>
  );
};

export default Educationlist;
