import classes from "./AddWork.module.css";
import { useState } from "react";
const AddEducation = ({ data, onDeleteEducation }) => {
  const { id, university, degree, subject, from, to } = data.newEducationData;
  const [showButton, setShowButton] = useState(false);

  const handleDelete = (event) => {
    onDeleteEducation(id);
    console.log("delet");
  };
  const handleEdit = () => {
    console.log("editing");
  };
  const handleMouseEnter = () => {
    setShowButton(true);
  };
  const handleMouseLeave = () => {
    setShowButton(false);
  };
  const buttons = (
    <div>
      <button onClick={handleEdit}>Edit</button>{" "}
      <button onClick={handleDelete}>Delete</button>{" "}
    </div>
  );
  return (
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
  );
};

export default AddEducation;
