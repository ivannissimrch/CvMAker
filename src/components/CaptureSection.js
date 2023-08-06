import CaptureAbout from "./CaptureAbout";
import Form from "./Form";
import classes from "./CaptureSection.module.css";
import EditableList from "./EditableList";

const CaptureSection = ({
  onUpdateAbout,
  onAddWork,
  onAddEducation,
  onDeleteWork,
  onEditWork,
  onDeleteEducation,
  onEditEducation,
  workArray,
  educationArray,
}) => {
  return (
    <section className={classes["edit-section"]}>
      <CaptureAbout onUpdateAbout={onUpdateAbout} />
      <Form action={onAddWork} formType="work" />
      <EditableList
        formType="work-editing"
        dataArray={workArray}
        onDeleteData={onDeleteWork}
        onEditData={onEditWork}
      />
      <Form action={onAddEducation} formType="education" />
      <EditableList
        formType="education-editing"
        dataArray={educationArray}
        onDeleteData={onDeleteEducation}
        onEditData={onEditEducation}
      />
    </section>
  );
};

export default CaptureSection;
