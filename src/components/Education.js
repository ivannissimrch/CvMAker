import classes from "./AddWork.module.css";

const Education = ({ educationData }) => {
  const { id, university, degree, city, startDate, endDate } = educationData;

  return (
    <div className={classes["work-container"]}>
      <label>{`${startDate} - ${endDate},  ${city}`}</label>
      <label>{degree}</label>
      <label className={classes.university}>{university}</label>
    </div>
  );
};

export default Education;
