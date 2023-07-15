import classes from "./CaptureAbout.module.css";
const CaptureAbout = () => {
  return (
    <form className={classes["about-edit"]}>
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
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <input type="text" placeholder="Title" />
      <textarea type="text" placeholder="About me " rows="3"></textarea>

      <input type="number" placeholder="Phone Number" />
      <input type="email" placeholder="Email" />
      <input type="text" placeholder="Address" />
    </form>
  );
};

export default CaptureAbout;
