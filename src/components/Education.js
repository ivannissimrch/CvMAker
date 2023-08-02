import classes from "./AddWork.module.css";
import { Fragment, useState } from "react";
import EditEducation from "./EditEducation";
const Education = ({ educationData, onDeleteEducation, onEditEducation }) => {
  const { id, university, degree, city, startDate, endDate } = educationData;
  //use the following states to hide and show components
  const [showButton, setShowButton] = useState(false);
  const [showEditEducation, setShowEditEducation] = useState(false);
  const [showEducation, setShowEducation] = useState(true);
  //use the following states to hide and show components

  //functions to handle Delete, ShowEdit and Show/hide buttons on mouse enter and
  //mouse leave
  const handleDelete = (event) => {
    onDeleteEducation(id);
  };
  const handleShowEdit = () => {
    setShowButton(!showButton);
    setShowEditEducation(!showEditEducation);
    setShowEducation(!showEducation);
  };
  const handleMouseEnter = () => {
    setShowButton(true);
  };
  const handleMouseLeave = () => {
    setShowButton(false);
  };
  //functions to handle Delete, ShowEdit and Show/hide buttons on mouse enter and
  //mouse leave

  //buttons to be display on mouseover
  const buttons = (
    <div>
      <button onClick={handleShowEdit}>Edit</button>{" "}
      <button onClick={handleDelete}>Delete</button>{" "}
    </div>
  );
  //buttons to be display on mouseover

  const education = (
    <div
      className={classes["work-container"]}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <label>{`${startDate} - ${endDate},  ${city}`}</label>
      <label>{degree}</label>
      <label className={classes.university}>{university}</label>

      {showButton && buttons}
    </div>
  );

  return (
    <Fragment>
      {showEducation && education}
      {showEditEducation && (
        <EditEducation
          educationData={educationData}
          closeEdit={handleShowEdit}
          onEditEducation={onEditEducation}
        />
      )}
    </Fragment>
  );
};

export default Education;
