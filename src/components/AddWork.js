import { Fragment, useState } from "react";
import classes from "./AddWork.module.css";
import EditWork from "./EditWork";

const AddWork = ({ data, onDeleteWork, onEditWork }) => {
  const { id, position, company, city, from, to } = data;
  const [showButton, setShowButton] = useState(false);
  const [showEditWork, setShowEditwork] = useState(false);

  const handleDelete = (event) => {
    onDeleteWork(id);
  };
  const handleShowEdit = () => {
    setShowButton(!showButton);
    setShowEditwork(!showEditWork);
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
        <label>{position}</label>
        <label>{company}</label>
        <label>{city}</label>
        <label>{`from ${from} to ${to}`}</label>

        {showButton && buttons}
      </div>
      {showEditWork && (
        <EditWork
          data={data}
          closeEdit={handleShowEdit}
          onEditWork={onEditWork}
        />
      )}
    </Fragment>
  );
};

export default AddWork;
