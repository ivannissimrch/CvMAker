import CvSection from "./CvSection";
import EditSection from "./EditSection";
import classes from "./MainContainer.module.css";
const MainContainer = () => {
  //manage state in here
  return (
    <div className={classes["main-container"]}>
      <EditSection />
      <CvSection />
    </div>
  );
};

export default MainContainer;
