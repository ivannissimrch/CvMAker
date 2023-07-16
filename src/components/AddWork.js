import classes from "./AddWork.module.css";

const AddWork = ({ data }) => {
  const { position, company, city, from, to } = data.newWorkData;
  return (
    <div className={classes["work-container"]}>
      <label>{position}</label>
      <label>{company}</label>
      <label>{city}</label>
      <label>{`from ${from} to ${to}`}</label>
    </div>
  );
};

export default AddWork;
