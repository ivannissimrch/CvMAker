import classes from "./AddWork.module.css";
const AddEducation = ({ data }) => {
  console.log(data);
  const { university, degree, subject, from, to } = data.newEducationData;
  return (
    <div className={classes["work-container"]}>
      <label>{university}</label>
      <label>{degree}</label>
      <label>{subject}</label>
      <label>{`from ${from} to ${to}`}</label>
    </div>
  );
};

export default AddEducation;
