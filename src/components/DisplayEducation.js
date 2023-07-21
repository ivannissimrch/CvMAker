import AddEducation from "./AddEducation";
import classes from "./DisplayEducation.module.css";
const DisplayEducation = ({
  onAddEducation,
  onDeleteEducation,
  onEditEducation,
}) => {
  return (
    <div className={classes["education"]}>
      <h2>EDUCATION</h2>
      <div className={classes["education-section"]}>
        {onAddEducation.map((item, index) => (
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
