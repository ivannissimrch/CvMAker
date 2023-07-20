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
  onDeleteEducation,
  onDeleteWork,
  onEditWork,
  onEditEducation,
}) => {
  return (
    <section className={classes["cv-section"]} id="display">
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
        <DisplayWork
          onWorkAdd={onWorkAdd}
          onDeleteWork={onDeleteWork}
          onEditWork={onEditWork}
        />
        <DisplayEducation
          onEducationAdd={onEducationAdd}
          onDeleteEducation={onDeleteEducation}
          onEditEducation={onEditEducation}
        />
      </main>
    </section>
  );
};

export default DisplaySection;
