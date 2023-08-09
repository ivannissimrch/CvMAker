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
  const workInitialValues = {
    title: "WORK",
    company: "",
    position: "",
    description: "",
    city: "",
    startDate: "",
    endDate: "",
  };
  const eduInitialValues = {
    title: "EDUCATION",
    university: "",
    degree: "",
    city: "",
    startDate: "",
    endDate: "",
  };
  return (
    <section className={classes["edit-section"]}>
      <CaptureAbout onUpdateAbout={onUpdateAbout} />
      <Form data={workInitialValues} action={onAddWork} />
      <EditableList
        dataArray={workArray}
        onDeleteData={onDeleteWork}
        onEditData={onEditWork}
      />
      <Form data={eduInitialValues} action={onAddEducation} />
      <EditableList
        dataArray={educationArray}
        onDeleteData={onDeleteEducation}
        onEditData={onEditEducation}
      />
    </section>
  );
};

export default CaptureSection;
