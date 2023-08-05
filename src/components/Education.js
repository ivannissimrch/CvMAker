import classes from "./DisplayInformation.module.css";

const Education = ({ educationData }) => {
  const { university, degree, city, startDate, endDate } = educationData;

  return (
    <div className={classes["display-information"]}>
      <label>{`${startDate} - ${endDate},  ${city}`}</label>
      <label>{degree}</label>
      <label className={classes.university}>{university}</label>
    </div>
  );
};

export default Education;
