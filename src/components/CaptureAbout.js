import { Fragment } from "react";
import classes from "./CaptureAbout.module.css";
const CaptureAbout = ({ onUpdateAbout }) => {
  const inputNames = {
    firstName: "First Name",
    lastName: "Last Name",
    title: "Title",
    about:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, excepturi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, excepturi.",
    phone: "Phone",
    email: "Email",
    location: "Location",
  };

  //handles value changes on inputs
  const handleChange = (event) => {
    const key = event.target.name;
    let value = event.target.value;
    if (key === "image") {
      value = URL.createObjectURL(event.target.files[0]);
    }
    onUpdateAbout(key, value);
  };
  //handles value changes on inputs

  return (
    <Fragment>
      <label>ABOUT ME</label>
      <form className={classes["about-container"]}>
        {/* input to upload profile picture*/}
        <label
          htmlFor="profile_pic"
          className={classes["upload-picture-label"]}
        >
          Upload Profile Picture
        </label>
        <input
          className={classes["upload-picture"]}
          type="file"
          id="profile_pic"
          name="image"
          accept=".jpg, .jpeg, .png"
          onChange={handleChange}
        />
        {/* input to upload profile picture */}
        {/* Iterates throught inputNames Object keys to create input elements*/}

        {Object.keys(inputNames).map((input, index) => (
          <input
            key={index}
            type="text"
            placeholder={input}
            name={input}
            onChange={handleChange}
          />
        ))}
        {/* Iterates throught inputNames Object keys to create input elements */}
      </form>
    </Fragment>
  );
};

export default CaptureAbout;
