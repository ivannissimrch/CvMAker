import classes from "./DisplaySection.module.css";
import DisplayAbout from "./DisplayAbout";
import DisplayEducation from "./DisplayEducation";
import DisplayWork from "./DisplayWork";
const DisplaySection = ({ aboutData, workArray, educationArray }) => {
  return (
    <section className={classes["cv-section"]} id="display">
      <DisplayAbout aboutData={aboutData} />
      <main className={classes["experience"]}>
        <DisplayWork workArray={workArray} />
        <DisplayEducation educationArray={educationArray} />
      </main>
    </section>
  );
};

export default DisplaySection;
