import Work from "./Work";
import classes from "./DisplayWork.module.css";
const DisplayWork = ({ workArray }) => {
  return (
    <div className={classes["work"]}>
      <div className={classes["work-section"]}>
        <h2>WORK EXPERIENCE</h2>
        {/* uses the array onAddWork recived from Parent component to look over with map an
      and the creates one Work element per each object inside that array. 
      the pass data as props in here data is and object with the correcsponding data from
       onAddwork array*/}
        {workArray.map((item) => (
          <Work key={item.id} workData={item} />
        ))}
      </div>
    </div>
  );
};

export default DisplayWork;
