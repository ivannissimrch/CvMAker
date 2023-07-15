import classes from "./CvSection.module.css";

import Displayabout from "./DisplayAbout";
import DisplayEducation from "./DisplayEducation";
import DisplayWork from "./DisplayWork";
const CvSection = () => {
  return (
    <section className={classes["cv-section"]}>
      <Displayabout />
      <main className={classes["experience"]}>
        <DisplayWork />
        <DisplayEducation />
      </main>
    </section>
  );
};

export default CvSection;
