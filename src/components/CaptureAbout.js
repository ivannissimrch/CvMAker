import { useState } from "react";
import classes from "./CaptureAbout.module.css";
const CaptureAbout = ({
  firstNameChange,
  lastNameChange,
  titleChange,
  aboutChange,
  phoneChange,
  emailChange,
  locationChange,
}) => {
  //use state declarations
  const [firstName, setFirstName] = useState("");
  const handleFirstName = (event) => {
    setFirstName(event.target.value);
    firstNameChange(event.target.value);
  };

  const [lastName, setLastName] = useState("");
  const handleLastName = (event) => {
    setLastName(event.target.value);
    lastNameChange(event.target.value);
  };

  const [title, setTitle] = useState("");
  const handleTitle = (event) => {
    setTitle(event.target.value);
    titleChange(event.target.value);
  };

  const [about, setAbout] = useState("");
  const handleAbout = (event) => {
    setAbout(event.target.value);
    aboutChange(event.target.value);
  };

  const [phone, setPhone] = useState("");
  const handlePhone = (event) => {
    setPhone(event.target.value);
    phoneChange(event.target.value);
  };

  const [email, setEmail] = useState("");
  const handleEmail = (event) => {
    setEmail(event.target.value);
    emailChange(event.target.value);
  };

  const [location, setLocation] = useState("");
  const handleLocation = (event) => {
    setLocation(event.target.value);
    locationChange(event.target.value);
  };

  return (
    <form className={classes["about-container"]}>
      <label>ABOUT ME</label>
      <label htmlFor="profile_pic" className={classes["upload-picture-label"]}>
        Upload Profile Picture
      </label>
      <input
        className={classes["upload-picture"]}
        type="file"
        id="profile_pic"
        name="profile_pic"
        accept=".jpg, .jpeg, .png"
      />
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={handleFirstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={handleLastName}
      />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitle}
      />
      <textarea
        type="text"
        placeholder="About me "
        // rows="3"
        value={about}
        onChange={handleAbout}
      ></textarea>

      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={handlePhone}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmail}
      />
      <input
        type="text"
        placeholder="Address"
        value={location}
        onChange={handleLocation}
      />
    </form>
  );
};

export default CaptureAbout;
