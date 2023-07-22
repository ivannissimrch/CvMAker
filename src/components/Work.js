import { Fragment, useState } from "react";
import classes from "./AddWork.module.css";
import EditWork from "./EditWork";

const Work = ({ data, onDeleteWork, onEditWork }) => {
  const { id, position, company, city, from, to } = data;
  const [showButton, setShowButton] = useState(false);
  const [showEditWork, setShowEditwork] = useState(false);
  const [showWork, setShowWork] = useState(true);

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
      <label>{`${position}, ${city}`}</label>

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
