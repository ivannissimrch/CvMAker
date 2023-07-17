import classes from "./MainContainer.module.css";
import CaptureSection from "./CaptureSection";
import DisplaySection from "./DisplaySection";
import profileImage from "../images/profile.jpg";
import { useState } from "react";

const MainContainer = () => {
  //manage state in here
  const [updateImage, setUpdatedImage] = useState(profileImage);
  const handleImage = (newImage) => {
    setUpdatedImage(newImage);
  };
  const [updateFirstName, setUpdatedFirstName] = useState("First Name");
  const handleFirstName = (fName) => {
    if (!fName) {
      setUpdatedFirstName("First Name");
    } else {
      setUpdatedFirstName(fName);
    }
  };

  const [updateLastName, setUpdatedLastName] = useState("Last Name");
  const handleLastName = (lName) => {
    if (!lName) {
      setUpdatedLastName("Last Name");
    } else {
      setUpdatedLastName(lName);
    }
  };

  const [updateTitle, setUpdatedTitle] = useState("Title");
  const handleTitle = (newTitle) => {
    if (!newTitle) {
      setUpdatedTitle("Title");
    } else {
      setUpdatedTitle(newTitle);
    }
  };

  const [updateAbout, setUpdatedAbout] = useState(
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, excepturi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, excepturi."
  );
  const handleAbout = (newAbout) => {
    if (!newAbout) {
      setUpdatedAbout(
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, excepturi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, excepturi."
      );
    } else {
      setUpdatedAbout(newAbout);
    }
  };

  const [updatePhone, setUpdatedPhone] = useState("phone");
  const handlePhone = (newPhone) => {
    if (!newPhone) {
      setUpdatedPhone("phone");
    } else {
      setUpdatedPhone(newPhone);
    }
  };

  const [updateEmail, setUpdatedEmail] = useState("Email");
  const handleEmail = (newEmail) => {
    if (!newEmail) {
      setUpdatedEmail("Email");
    } else {
      setUpdatedEmail(newEmail);
    }
  };

  const [updateLocation, setUpdatedLocation] = useState("Location");
  const handleLocation = (newLocation) => {
    if (!newLocation) {
      setUpdatedLocation("Email");
    } else {
      setUpdatedLocation(newLocation);
    }
  };

  //Work Experience state declarations
  const [work, setWork] = useState([]);
  const handleOnWorkChange = (newWorkData) => {
    setWork((prev) => [...prev, { newWorkData }]);
  };

  //education
  const [education, setEducation] = useState([]);
  const handleOnEducationChange = (newEducationData) => {
    setEducation((prev) => [...prev, { newEducationData }]);
  };

  return (
    <div className={classes["main-container"]}>
      <CaptureSection
        firstNameChange={handleFirstName}
        lastNameChange={handleLastName}
        titleChange={handleTitle}
        aboutChange={handleAbout}
        phoneChange={handlePhone}
        emailChange={handleEmail}
        locationChange={handleLocation}
        imageChange={handleImage}
        onWorkchange={handleOnWorkChange}
        onEducationChange={handleOnEducationChange}
      />
      <DisplaySection
        firstNameChange={updateFirstName}
        lastNameChange={updateLastName}
        titleChange={updateTitle}
        aboutChange={updateAbout}
        phoneChange={updatePhone}
        emailChange={updateEmail}
        locationChange={updateLocation}
        imageChange={updateImage}
        onWorkAdd={work}
        onEducationAdd={education}
      />
    </div>
  );
};

export default MainContainer;
