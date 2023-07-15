import classes from "./CaptureExperience.module.css";

const CaptureExperience = () => {
  return (
    <form className={classes["experience-edit"]}>
      <label>WORK EXPERIENCE</label>
      <input type="text" placeholder="Position" />
      <input type="text" placeholder="Company" />
      <input type="text" placeholder="City" />
      <input type="number" placeholder="From" />
      <input type="number" placeholder="To" />
      {/* <button type="submit" id="delete-work">
        Delete
      </button> */}
      <button type="submit" id="add-work">
        Add
      </button>
    </form>
  );
};

export default CaptureExperience;
