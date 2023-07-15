import CaptureAbout from "./CaptureAbout";
import CaptureEducation from "./CaptureEducation";
import CaptureExperience from "./CaptureExperience";
import classes from "./EditSection.module.css";
const EditSection = () => {
  return (
    <section className={classes["edit-section"]}>
      <CaptureAbout />
      <CaptureEducation />
      <CaptureExperience />
    </section>
  );
};

export default EditSection;
