import Work from "./Work";
import classes from "./DisplayWork.module.css";
const DisplayWork = ({ onAddWork, onDeleteWork, onEditWork }) => {
  return (
    <div className={classes["work-experience"]}>
      <h2>WORK EXPERIENCE</h2>
      <div className={classes["work-section"]}>
        {onAddWork.map((item, index) => (
          <Work
            key={index}
            data={item}
            onDeleteWork={onDeleteWork}
            onEditWork={onEditWork}
          />
        ))}
      </div>
    </div>
  );
};

export default DisplayWork;
