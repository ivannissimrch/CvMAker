import { useState } from "react";
import classes from "./CaptureAbout.module.css";
const CaptureAbout = ({ onAboutChange }) => {
  //TODO refactor this code

  //use state declarations
  const handleImage = (event) => {
    const key = event.target.name;
    //create an URL link to the image selected from ope file input and store it to the variable image
    const image = URL.createObjectURL(event.target.files[0]);
    onAboutChange(key, image);
  };

  const [firstName, setFirstName] = useState("");
  const handleFirstName = (event) => {
    setFirstName(event.target.value);
    const key = event.target.name;
    const value = event.target.value;
    onAboutChange(key, value);
  };

  const [lastName, setLastName] = useState("");
  const handleLastName = (event) => {
    setLastName(event.target.value);
    const key = event.target.name;
    const value = event.target.value;
    onAboutChange(key, value);
  };

  const [title, setTitle] = useState("");
  const handleTitle = (event) => {
    setTitle(event.target.value);
    const key = event.target.name;
    const value = event.target.value;
    onAboutChange(key, value);
  };

  const [about, setAbout] = useState("");
  const handleAbout = (event) => {
    setAbout(event.target.value);
    const key = event.target.name;
    const value = event.target.value;
    onAboutChange(key, value);
  };

  const [phone, setPhone] = useState("");
  const handlePhone = (event) => {
    setPhone(event.target.value);
    const key = event.target.name;
    const value = event.target.value;
    onAboutChange(key, value);
  };

  const [email, setEmail] = useState("");
  const handleEmail = (event) => {
    setEmail(event.target.value);
    const key = event.target.name;
    const value = event.target.value;
    onAboutChange(key, value);
  };

  const [location, setLocation] = useState("");
  const handleLocation = (event) => {
    setLocation(event.target.value);
    const key = event.target.name;
    const value = event.target.value;
    onAboutChange(key, value);
  };

  return (
    <form className={classes["about-container"]}>
      <label>ABOUT ME</label>
      <label htmlFor="profile_pic" className={classes["upload-picture-label"]}>
        Upload Profile Picture
      </label>
      <input
        onChange={handleImage}
        className={classes["upload-picture"]}
        type="file"
        id="profile_pic"
        name="image"
        accept=".jpg, .jpeg, .png"
      />
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        value={firstName}
        onChange={handleFirstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        value={lastName}
        onChange={handleLastName}
      />
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={title}
        onChange={handleTitle}
      />
      <textarea
        type="text"
        placeholder="About me"
        name="about"
        value={about}
        onChange={handleAbout}
      ></textarea>

      <input
        type="text"
        placeholder="Phone Number"
        name="phone"
        value={phone}
        onChange={handlePhone}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={handleEmail}
      />
      <input
        type="text"
        placeholder="Address"
        name="location"
        value={location}
        onChange={handleLocation}
      />
    </form>
  );
};

export default CaptureAbout;
