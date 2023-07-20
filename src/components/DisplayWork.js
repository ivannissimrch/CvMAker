import AddWork from "./AddWork";
import classes from "./DisplayWork.module.css";
const DisplayWork = ({ onWorkAdd, onDeleteWork, onEditWork }) => {
  return (
    <div className={classes["work-experience"]}>
      <h2>WORK EXPERIENCE</h2>
      <div className={classes["work-section"]}>
        {onWorkAdd.map((item, index) => (
          <AddWork
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
