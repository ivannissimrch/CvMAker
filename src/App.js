import profileImage from "./images/profile.jpg";
import { Fragment } from "react";
import "./App.css";

function App() {
  return (
    <Fragment>
      <header>
        <h1 className="title">Cv Maker</h1>
      </header>
      <div className="main-container">
        <section className="edit-section">
          <form className="about-edit">
            <label>ABOUT ME</label>
            <label htmlFor="profile_pic" className="upload-picture-label">
              Upload Profile Picture
            </label>
            <input
              className="upload-picture"
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
          <form className="education-edit">
            <label>EDUCATION</label>
            <input type="text" placeholder="University" />
            <input type="text" placeholder="Degree" />
            <input type="text" placeholder="Subject" />
            <input type="number" placeholder="From" />
            <input type="number" placeholder="To" />
            <button type="submit" id="delete-edu">
              Delete
            </button>
            <button type="submit" id="add-edu">
              Add
            </button>
          </form>
          <form className="experience-edit">
            <label>WORK EXPERIENCE</label>
            <input type="text" placeholder="Position" />
            <input type="text" placeholder="Company" />
            <input type="text" placeholder="City" />
            <input type="number" placeholder="From" />
            <input type="number" placeholder="To" />
            <button type="submit" id="delete-work">
              Delete
            </button>
            <button type="submit" id="add-work">
              Add
            </button>
          </form>
        </section>

        <section className="cv-section">
          <aside className="about">
            <div className="about-header">
              <img
                className="profile-picture"
                src={profileImage}
                alt="profile_pic"
              />
              <h2>First Name</h2>
              <h2>Last Name</h2>
              <h4>Title</h4>
              <hr />
            </div>
            <div className="about-body">
              <h2>ABOUT ME</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Veritatis, excepturi. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Veritatis, excepturi.
              </p>
            </div>
            <div className="about-footer">
              <h2>CONTACT</h2>
              <h4>Phone</h4>
              <h4>email@email.com</h4>
              <h4>Location</h4>
            </div>
          </aside>
          <main className="experience">
            <div className="work-experience">
              <h2>WORK EXPERIENCE</h2>
              <div className="education-section">
                <label>Position</label>
                <label>Company</label>
                <label>City</label>
                <label>Year</label>
              </div>
            </div>
            <div className="education">
              <h2>EDUCATION</h2>
              <div className="education-section">
                <label>University</label>
                <label>Degree</label>
                <label>Subject</label>
                <label>Year</label>
              </div>
            </div>
          </main>
        </section>
      </div>
    </Fragment>
  );
}

export default App;
