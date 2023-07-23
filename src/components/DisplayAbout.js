import classes from "./DisplayAbout.module.css";

const DisplayAbout = ({ aboutData }) => {
  const { firstName, lastName, title, about, phone, email, location, image } =
    aboutData;
  return (
    <aside className={classes["about"]}>
      <div className={classes["about-header"]}>
        <img
          className={classes["profile-picture"]}
          src={`${image}`}
          alt="profile_pic"
        />
        <h2>{firstName}</h2>
        <h2>{lastName}</h2>
        <h4>{title}</h4>
        <hr />
      </div>
      <div className={classes["about-body"]}>
        <h2>ABOUT ME</h2>
        <p className={classes["about-description"]}>{about}</p>
      </div>
      <div className={classes["about-footer"]}>
        <h2>CONTACT</h2>
        <h4>{phone}</h4>
        <h4>{email}</h4>
        <h4>{location}</h4>
      </div>
    </aside>
  );
};

export default DisplayAbout;
