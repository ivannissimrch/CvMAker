import classes from "./DisplaySection.module.css";
import DisplayAbout from "./DisplayAbout";
import DisplayEducation from "./DisplayEducation";
import DisplayWork from "./DisplayWork";
const DisplaySection = ({
  aboutData,
  onAddWork,
  onAddEducation,
  onDeleteEducation,
  onDeleteWork,
  onEditWork,
  onEditEducation,
}) => {
  return (
    <section className={classes["cv-section"]} id="display">
      <DisplayAbout aboutData={aboutData} />
      <main className={classes["experience"]}>
        <DisplayWork
          onAddWork={onAddWork}
          onDeleteWork={onDeleteWork}
          onEditWork={onEditWork}
        />
        <DisplayEducation
          onAddEducation={onAddEducation}
          onDeleteEducation={onDeleteEducation}
          onEditEducation={onEditEducation}
        />
      </main>
    </section>
  );
};

export default DisplaySection;
