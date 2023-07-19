import { useState } from "react";
import classes from "./AddWork.module.css";

const AddWork = ({ data, onDeleteWork }) => {
  const { id, position, company, city, from, to } = data.newWorkData;
  const [showButton, setShowButton] = useState(false);

  const handleDelete = (event) => {
    onDeleteWork(id);
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
      <label>{position}</label>
      <label>{company}</label>
      <label>{city}</label>
      <label>{`from ${from} to ${to}`}</label>
      {showButton && buttons}
    </div>
  );
};

export default AddWork;
