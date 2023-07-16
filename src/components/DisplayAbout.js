import classes from "./DisplayAbout.module.css";

const DisplayAbout = ({
  firstNameChange,
  lastNameChange,
  titleChange,
  aboutChange,
  phoneChange,
  emailChange,
  locationChange,
  imageChange,
}) => {
  return (
    <aside className={classes["about"]}>
      <div className={classes["about-header"]}>
        <img
          className={classes["profile-picture"]}
          src={`${imageChange}`}
          alt="profile_pic"
        />
        <h2>{firstNameChange}</h2>
        <h2>{lastNameChange}</h2>
        <h4>{titleChange}</h4>
        <hr />
      </div>
      <div className={classes["about-body"]}>
        <h2>ABOUT ME</h2>
        <p className={classes["about-description"]}>{aboutChange}</p>
      </div>
      <div className={classes["about-footer"]}>
        <h2>CONTACT</h2>
        <h4>{phoneChange}</h4>
        <h4>{emailChange}</h4>
        <h4>{locationChange}</h4>
      </div>
    </aside>
  );
};

export default DisplayAbout;
