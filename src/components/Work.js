import classes from "./DisplayInformation.module.css";

const Work = ({ workData }) => {
  const { position, company, description, city, startDate, endDate } = workData;

  return (
    <div className={classes["display-information"]}>
      <label>{`${company.toUpperCase()} | ${startDate} - ${endDate}`}</label>
      <label className={classes.position}>{`${position}, ${city}`}</label>
      <p>{description}</p>
    </div>
  );
};

export default Work;
