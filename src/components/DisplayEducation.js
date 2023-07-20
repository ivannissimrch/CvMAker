import AddEducation from "./AddEducation";
import classes from "./DisplayEducation.module.css";
const DisplayEducation = ({
  onEducationAdd,
  onDeleteEducation,
  onEditEducation,
}) => {
  return (
    <div className={classes["education"]}>
      <h2>EDUCATION</h2>
      <div className={classes["education-section"]}>
        {onEducationAdd.map((item, index) => (
          <AddEducation
            key={index}
            data={item}
            onDeleteEducation={onDeleteEducation}
            onEditEducation={onEditEducation}
          />
        ))}
      </div>
    </div>
  );
};

export default DisplayEducation;
