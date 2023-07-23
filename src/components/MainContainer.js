import classes from "./MainContainer.module.css";
import CaptureSection from "./CaptureSection";
import DisplaySection from "./DisplaySection";
import profileImage from "../images/profile.jpg";
import { useState } from "react";

const MainContainer = () => {
  //About section state and handler
  const defaultValues = {
    image: profileImage,
    firstName: "First Name",
    lastName: "Last Name",
    title: "Title",
    about:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, excepturi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, excepturi.",
    phone: "Phone",
    email: "Email",
    location: "Location",
  };

  const [about, setAbout] = useState(defaultValues);

  const handleAboutChange = (key, value) => {
    if (value.length <= 0) {
      value = defaultValues[key];
    }
    setAbout((prev) => ({ ...prev, [key]: value }));
  };
  //About section state and handlers

  //Work Experience state and handlers
  //use state initialize the value of work to an aempy array
  const [work, setWork] = useState([]);
  //add element to work array, it recives an object from captureWork Element and
  //update the array then we can use the work array to update the work display on
  //DisplayWork
  const handleOnWorkChange = (newWorkData) => {
    setWork((prev) => [...prev, newWorkData]);
  };
  //delete element on work array
  const deleteWork = (id) => {
    const updateWork = work.filter((wrk) => {
      return wrk.id !== id;
    });
    setWork(updateWork);
  };
  //edit element on work array
  const editWork = (updatedValues) => {
    const updateWork = work.map((wrk) => {
      if (wrk.id === updatedValues.id) {
        return { ...wrk, ...updatedValues };
      }
      return wrk;
    });

    setWork(updateWork);
  };
  //Work Experience state and handlers

  //Education state and handlers
  const [education, setEducation] = useState([]);
  //add element to education array
  const handleOnEducationChange = (newEducationData) => {
    setEducation((prev) => [...prev, newEducationData]);
  };
  //delete element on education array
  const deleteEducation = (id) => {
    const updateEducation = education.filter((edu) => {
      return edu.id !== id;
    });
    setEducation(updateEducation);
  };
  //edit element on education array
  const editEducation = (updatedValues) => {
    console.log(updatedValues);
    const updateEducation = education.map((edu) => {
      if (edu.id === updatedValues.id) {
        return { ...edu, ...updatedValues };
      }
      return edu;
    });

    setEducation(updateEducation);
  };
  //Education state and handlers

  return (
    <div className={classes["main-container"]}>
      <CaptureSection
        onAboutChange={handleAboutChange}
        onWorkChange={handleOnWorkChange}
        onEducationChange={handleOnEducationChange}
      />
      <DisplaySection
        aboutData={about}
        onAddWork={work}
        onAddEducation={education}
        onDeleteWork={deleteWork}
        onEditWork={editWork}
        onDeleteEducation={deleteEducation}
        onEditEducation={editEducation}
      />
    </div>
  );
};

export default MainContainer;
