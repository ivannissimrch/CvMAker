import { Fragment, useState } from "react";
import classes from "./AddWork.module.css";
import EditWork from "./EditWork";

const Work = ({ data, onDeleteWork, onEditWork }) => {
  const { id, position, company, description, city, from, to } = data;
  //use the following states to hide and show components
  const [showButton, setShowButton] = useState(false);
  const [showEditWork, setShowEditwork] = useState(false);
  const [showWork, setShowWork] = useState(true);
  //use the following states to hide and show components

  //functions to handle Delete, ShowEdit and Show/hide buttons on mouse enter and
  //mouse leave
  const handleDelete = (event) => {
    onDeleteWork(id);
  };
  const handleShowEdit = () => {
    setShowButton(!showButton);
    setShowEditwork(!showEditWork);
    setShowWork(!showWork);
  };
  const handleMouseEnter = () => {
    setShowButton(true);
  };
  const handleMouseLeave = () => {
    setShowButton(false);
  };
  //functions to handle Delete, ShowEdit and Show/hide buttons on mouse enter and
  //mouse leave

  const buttons = (
    <div>
      <button onClick={handleShowEdit}>Edit</button>{" "}
      <button onClick={handleDelete}>Delete</button>{" "}
    </div>
  );

  const work = (
    <div
      className={classes["work-container"]}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <label>{`${company.toUpperCase()} | ${from} - ${to}`}</label>
      <label className={classes.position}>{`${position}, ${city}`}</label>
      <p>{description}</p>

      {showButton && buttons}
    </div>
  );

  return (
    <Fragment>
      {showWork && work}
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

export default Work;
