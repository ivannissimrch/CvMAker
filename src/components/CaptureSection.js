import CaptureAbout from "./CaptureAbout";
import CaptureEducation from "./CaptureEducation";
import CaptureWork from "./CaptureWork";
import classes from "./CaptureSection.module.css";
const CaptureSection = ({
  firstNameChange,
  lastNameChange,
  titleChange,
  aboutChange,
  phoneChange,
  emailChange,
  locationChange,
  imageChange,
  onWorkChange,
  onEducationChange,
}) => {
  return (
    <section className={classes["edit-section"]}>
      <CaptureAbout
        firstNameChange={firstNameChange}
        lastNameChange={lastNameChange}
        titleChange={titleChange}
        aboutChange={aboutChange}
        phoneChange={phoneChange}
        emailChange={emailChange}
        locationChange={locationChange}
        imageChange={imageChange}
      />
      <CaptureWork onWorkChange={onWorkChange} />
      <CaptureEducation onEducationChange={onEducationChange} />
    </section>
  );
};

export default CaptureSection;
