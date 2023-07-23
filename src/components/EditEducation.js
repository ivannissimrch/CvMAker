import { useState } from "react";
import classes from "./CaptureExperience.module.css";

const EditEducation = ({ data, closeEdit, onEditEducation }) => {
  //state value declaration and handlers to set new value while editing Work element
  const [university, setUniversity] = useState(data.university);
  const handleUniversity = (event) => {
    setUniversity(event.target.value);
  };

  const [degree, setDegree] = useState(data.degree);
  const handleDegree = (event) => {
    setDegree(event.target.value);
  };

  const [city, setCity] = useState(data.city);
  const handleCity = (event) => {
    setCity(event.target.value);
  };

  const [from, setFrom] = useState(data.from);
  const handleFrom = (event) => {
    setFrom(event.target.value);
  };

  const [to, setTo] = useState(data.to);
  const handleTo = (event) => {
    setTo(event.target.value);
  };
  //state value declaration and handlers to set new value while editing Work element

  //use on editEducation to send new object to parent elemet to update old object
  const handleSubmit = (event) => {
    event.preventDefault();
    closeEdit();
    onEditEducation({
      id: data.id,
      university,
      degree,
      city,
      from,
      to,
    });
  };
  return (
    <form className={classes["experience-edit"]} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="University"
        onChange={handleUniversity}
        value={university}
      />
      <input
        type="text"
        placeholder="Degree"
        value={degree}
        onChange={handleDegree}
      />
      <input
        type="text"
        placeholder="city"
        value={city}
        onChange={handleCity}
      />
      <input
        type="number"
        placeholder="From"
        value={from}
        onChange={handleFrom}
      />
      <input type="number" placeholder="To" value={to} onChange={handleTo} />

      <button type="submit" id="add-education">
        Save Changes
      </button>
    </form>
  );
};

export default EditEducation;
