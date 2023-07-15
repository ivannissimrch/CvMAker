import classes from "./CaptureEducation.module.css";
const CaptureEducation = () => {
  return (
    <form className={classes["education-edit"]}>
      <label>EDUCATION</label>
      <input type="text" placeholder="University" />
      <input type="text" placeholder="Degree" />
      <input type="text" placeholder="Subject" />
      <input type="number" placeholder="From" />
      <input type="number" placeholder="To" />
      <button type="submit" id="delete-edu">
        Delete
      </button>
      <button type="submit" id="add-edu">
        Add
      </button>
    </form>
  );
};

export default CaptureEducation;
