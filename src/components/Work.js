import classes from "./AddWork.module.css";

const Work = ({ workData }) => {
  const { id, position, company, description, city, startDate, endDate } =
    workData;

  return (
    <div className={classes["work-container"]}>
      <label>{`${company.toUpperCase()} | ${startDate} - ${endDate}`}</label>
      <label className={classes.position}>{`${position}, ${city}`}</label>
      <p>{description}</p>
    </div>
  );
};

export default Work;
