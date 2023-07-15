import classes from "./DisplayAbout.module.css";
import profileImage from "../images/profile.jpg";
const Displayabout = () => {
  return (
    <aside className={classes["about"]}>
      <div className={classes["about-header"]}>
        <img
          className={classes["profile-picture"]}
          src={profileImage}
          alt="profile_pic"
        />
        <h2>First Name</h2>
        <h2>Last Name</h2>
        <h4>Title</h4>
        <hr />
      </div>
      <div className={classes["about-body"]}>
        <h2>ABOUT ME</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis,
          excepturi. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Veritatis, excepturi.
        </p>
      </div>
      <div className={classes["about-footer"]}>
        <h2>CONTACT</h2>
        <h4>Phone</h4>
        <h4>email@email.com</h4>
        <h4>Location</h4>
      </div>
    </aside>
  );
};

export default Displayabout;
