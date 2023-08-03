import { useState } from "react";
import classes from "./WorkList.module.css";
import Form from "./Form";
const Worklist = ({ workArray, onDeleteWork, onEditWork }) => {
  const [showForm, setShowForm] = useState(false);
  const [showWork, setShowWork] = useState(true);
  const handleClickDelete = (id) => {
    onDeleteWork(id);
  };

  const handleClickEdit = (workObject) => {
    console.log(workObject);
    setShowForm(!showForm);
    setShowWork(!showWork);
    // onEditWork(workObject);
    // i need to send this object to the form and then call onEdi work when submiting the form
  };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     closeEdit();
  //     onEditWork({
  //       id: workData.id,
  //       position,
  //       company,
  //       description,
  //       city,
  //       startDate,
  //       endDate,
  //     });
  //   };
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
      {showForm && <Form action={onEditWork} type="work" />}
    </div>
  );
};

export default Worklist;
