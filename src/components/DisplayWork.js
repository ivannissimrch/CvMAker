import AddWork from "./AddWork";
import classes from "./DisplayWork.module.css";
const DisplayWork = ({ onWorkAdd }) => {
  return (
    <div className={classes["work-experience"]}>
      <h2>WORK EXPERIENCE</h2>
      <div className={classes["work-section"]}>
        {onWorkAdd.map((item, index) => (
          <AddWork key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default DisplayWork;
