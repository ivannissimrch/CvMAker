import classes from "./DisplaySection.module.css";

import DisplayAbout from "./DisplayAbout";
import DisplayEducation from "./DisplayEducation";
import DisplayWork from "./DisplayWork";
const DisplaySection = ({
  firstNameChange,
  lastNameChange,
  titleChange,
  aboutChange,
  phoneChange,
  emailChange,
  locationChange,
  imageChange,
  onWorkAdd,
  onEducationAdd,
}) => {
  return (
    <section className={classes["cv-section"]}>
      <DisplayAbout
        firstNameChange={firstNameChange}
        lastNameChange={lastNameChange}
        titleChange={titleChange}
        aboutChange={aboutChange}
        phoneChange={phoneChange}
        emailChange={emailChange}
        locationChange={locationChange}
        imageChange={imageChange}
      />
      <main className={classes["experience"]}>
        <DisplayWork onWorkAdd={onWorkAdd} />
        <DisplayEducation onEducationAdd={onEducationAdd} />
      </main>
    </section>
  );
};

export default DisplaySection;
