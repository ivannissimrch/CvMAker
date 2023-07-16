import { Fragment } from "react";

const AddWork = ({ onWorkAdd }) => {
  return (
    <Fragment>
      <label>{onWorkAdd.Position}</label>
      <label>{onWorkAdd.Company}</label>
      <label>{onWorkAdd.City}</label>
      <label>{onWorkAdd.Year}</label>
    </Fragment>
  );
};

export default AddWork;
