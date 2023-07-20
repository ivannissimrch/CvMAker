import classes from "./AddWork.module.css";
import { Fragment, useState } from "react";
import EditEducation from "./EditEducation";
const AddEducation = ({ data, onDeleteEducation, onEditEducation }) => {
  const { id, university, degree, subject, from, to } = data;
  const [showButton, setShowButton] = useState(false);
  const [showEditEducation, setShowEditEducation] = useState(false);

  const handleDelete = (event) => {
    onDeleteEducation(id);
  };
  const handleShowEdit = () => {
    setShowButton(!showButton);
    setShowEditEducation(!showEditEducation);
  };
  const handleMouseEnter = () => {
    setShowButton(true);
  };
  const handleMouseLeave = () => {
    setShowButton(false);
  };
  const buttons = (
    <div>
      <button onClick={handleShowEdit}>Edit</button>{" "}
      <button onClick={handleDelete}>Delete</button>{" "}
    </div>
  );
  return (
    <Fragment>
      <div
        className={classes["work-container"]}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <label>{university}</label>
        <label>{degree}</label>
        <label>{subject}</label>
        <label>{`from ${from} to ${to}`}</label>
        {showButton && buttons}
      </div>
      {showEditEducation && (
        <EditEducation
          data={data}
          closeEdit={handleShowEdit}
          onEditEducation={onEditEducation}
        />
      )}
    </Fragment>
  );
};

export default AddEducation;
