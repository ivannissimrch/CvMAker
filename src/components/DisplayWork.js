import AddWork from "./AddWork";
import classes from "./DisplayWork.module.css";
const DisplayWork = ({ onWorkAdd }) => {
  return (
    <div className={classes["work-experience"]}>
      <h2>WORK EXPERIENCE</h2>
      <div className={classes["work-section"]}>
        <AddWork onWorkAdd={onWorkAdd} />
      </div>
    </div>
  );
};

export default DisplayWork;
