import CaptureAbout from "./CaptureAbout";
import Form from "./Form";
import classes from "./CaptureSection.module.css";
import EditableList from "./EditableList";

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
      <EditableList
        type="work"
        dataArray={workArray}
        onDeleteData={onDeleteWork}
        onEditData={onEditWork}
      />
      <Form action={onEducationChange} type="education" />
      <EditableList
        type="education"
        dataArray={educationArray}
        onDeleteData={onDeleteEducation}
        onEditData={onEditEducation}
      />
    </section>
  );
};

export default CaptureSection;
