import CaptureAbout from "./CaptureAbout";
// import CaptureEducation from "./CaptureEducation";
import Form from "./Form";
// import CaptureWork from "./CaptureWork";
import classes from "./CaptureSection.module.css";
const CaptureSection = ({ onAboutChange, onWorkChange, onEducationChange }) => {
  return (
    <section className={classes["edit-section"]}>
      <CaptureAbout onAboutChange={onAboutChange} />
      <Form onWorkChange={onWorkChange} type="work" />
      <Form onEducationChange={onEducationChange} type="education" />
    </section>
  );
};

export default CaptureSection;
