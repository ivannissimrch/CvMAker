import Education from "./Education";
import classes from "./DisplayEducation.module.css";
const DisplayEducation = ({
  onAddEducation,
  onDeleteEducation,
  onEditEducation,
}) => {
  return (
    <div className={classes["education"]}>
      <div className={classes["education-section"]}>
        <h2>EDUCATION</h2>
        {/* uses the array onAddWork recived from Parent component to look over with map an
      and the creates one Work element per each object inside that array. 
      the pass data as props in here data is and object with the correcsponding data from
       onAddwork array*/}
        {onAddEducation.map((item) => (
          <Education
            key={item.id}
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
