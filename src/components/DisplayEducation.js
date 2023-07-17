import AddEducation from "./AddEducation";
import classes from "./DisplayEducation.module.css";
const DisplayEducation = ({ onEducationAdd }) => {
  console.log(onEducationAdd);
  return (
    <div className={classes["education"]}>
      <h2>EDUCATION</h2>
      <div className={classes["education-section"]}>
        {onEducationAdd.map((item, index) => (
          <AddEducation key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default DisplayEducation;
