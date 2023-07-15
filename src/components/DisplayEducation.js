import classes from "./DisplayEducation.module.css";
const DisplayEducation = () => {
  return (
    <div className={classes["education"]}>
      <h2>EDUCATION</h2>
      <div className={classes["education-section"]}>
        <label>University</label>
        <label>Degree</label>
        <label>Subject</label>
        <label>Year</label>
      </div>
    </div>
  );
};

export default DisplayEducation;
