import CaptureAbout from "./CaptureAbout";
import Form from "./Form";
import classes from "./CaptureSection.module.css";
import Worklist from "./WorkList";
import Educationlist from "./EducationList";
const CaptureSection = ({
  onAboutChange,
  onWorkChange,
  onEducationChange,
  onDeleteWork,
  onEditWork,
  workArray,
  educationArray,
  onDeleteEducation,
  onEditEducation,
}) => {
  return (
    <section className={classes["edit-section"]}>
      <CaptureAbout onAboutChange={onAboutChange} />
      <Form action={onWorkChange} type="work" />
      <Worklist
        workArray={workArray}
        onDeleteWork={onDeleteWork}
        onEditWork={onEditWork}
      />
      <Form action={onEducationChange} type="education" />
      <Educationlist
        educationArray={educationArray}
        onDeleteEducation={onDeleteEducation}
        onEditEducation={onEditEducation}
      />
    </section>
  );
};

export default CaptureSection;
