import classes from "./DisplayWork.module.css";
const DisplayWork = () => {
  return (
    <div className={classes["work-experience"]}>
      <h2>WORK EXPERIENCE</h2>
      <div className={classes["work-section"]}>
        <label>Position</label>
        <label>Company</label>
        <label>City</label>
        <label>Year</label>
      </div>
    </div>
  );
};

export default DisplayWork;
