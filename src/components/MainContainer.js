import classes from "./MainContainer.module.css";
import CaptureSection from "./CaptureSection";
import DisplaySection from "./DisplaySection";
import profileImage from "../images/profile.jpg";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const MainContainer = () => {
  //Using this component  to store state and functions to update the about object,
  // work and education array of objects

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
  //about object stores informantion entered by the user in the about section, then I send this as props into the DisplaySection to display
  //the values inside the object

  const [aboutData, setAboutData] = useState(defaultValues);

  //handle about changes to update values  entered by user on the capture about section.
  const handleAboutDataUpdates = (key, value) => {
    if (value.length <= 0) {
      value = defaultValues[key];
    }
    setAboutData((prev) => ({ ...prev, [key]: value }));
  };
  //About section state and handlers

  //Work Experience state and handlers
  //use state initialize the value of work to an emtpy array
  const [workData, setWorkData] = useState([]);
  //add element to work array, it receives an object from captureWork Element and
  //updates work array to include that object then we can use the work array to update the work display on
  //DisplayWork
  const handleAddWork = (newWorkData) => {
    const id = uuidv4();
    const newDataWithID = { ...newWorkData, id };
    console.log(newWorkData);
    console.log(newDataWithID);
    setWorkData((prev) => [...prev, newDataWithID]);
  };
  //delete element on work array
  const handleDeleteWork = (id) => {
    const updateWork = workData.filter((wrk) => {
      return wrk.id !== id;
    });
    setWorkData(updateWork);
  };
  //edit element on work array
  const handleEditWork = (updatedValues) => {
    const updateWork = workData.map((wrk) => {
      if (wrk.id === updatedValues.id) {
        return { ...wrk, ...updatedValues };
      }
      return wrk;
    });

    setWorkData(updateWork);
  };
  //Work Experience state and handlers

  //Education state and handlers
  const [educationData, setEducationData] = useState([]);
  //add element to education array
  const handleAddEducation = (newEducationData) => {
    const id = uuidv4();
    const newDataWithID = { ...newEducationData, id };
    setEducationData((prev) => [...prev, newDataWithID]);
  };
  //delete element on education array
  const handleDeleteEducation = (id) => {
    const updateEducation = educationData.filter((edu) => {
      return edu.id !== id;
    });
    setEducationData(updateEducation);
  };
  //edit element on education array
  const handleEditEducation = (updatedValues) => {
    const updateEducation = educationData.map((edu) => {
      if (edu.id === updatedValues.id) {
        return { ...edu, ...updatedValues };
      }
      return edu;
    });

    setEducationData(updateEducation);
  };
  //Education state and handlers

  return (
    <div className={classes["main-container"]}>
      <CaptureSection
        aboutData={aboutData}
        workArray={workData}
        onDeleteWork={handleDeleteWork}
        onEditWork={handleEditWork}
        onAddWork={handleAddWork}
        educationArray={educationData}
        onDeleteEducation={handleDeleteEducation}
        onEditEducation={handleEditEducation}
        onAddEducation={handleAddEducation}
        onUpdateAbout={handleAboutDataUpdates}
      />
      <DisplaySection
        aboutData={aboutData}
        workArray={workData}
        educationArray={educationData}
      />
    </div>
  );
};

export default MainContainer;
