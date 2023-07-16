import CaptureAbout from "./CaptureAbout";
import CaptureEducation from "./CaptureEducation";
import CaptureExperience from "./CaptureExperience";
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
  onWorkchange,
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
      <CaptureExperience onWorkchange={onWorkchange} />
      <CaptureEducation />
    </section>
  );
};

export default CaptureSection;
