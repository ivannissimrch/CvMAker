import CaptureAbout from "./CaptureAbout";
import CaptureEducation from "./CaptureEducation";
import CaptureWork from "./CaptureWork";
import classes from "./CaptureSection.module.css";
const CaptureSection = ({ onAboutChange, onWorkChange, onEducationChange }) => {
  return (
    <section className={classes["edit-section"]}>
      <CaptureAbout onAboutChange={onAboutChange} />
      <CaptureWork onWorkChange={onWorkChange} />
      <CaptureEducation onEducationChange={onEducationChange} />
    </section>
  );
};

export default CaptureSection;
