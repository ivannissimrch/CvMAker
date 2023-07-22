import { useState } from "react";
import classes from "./CaptureEducation.module.css";
const CaptureEducation = ({ onEducationChange }) => {
  const [university, setUniversity] = useState("");
  const handleUniversity = (event) => {
    setUniversity(event.target.value);
  };

  const [degree, setDegree] = useState("");
  const handleDegree = (event) => {
    setDegree(event.target.value);
  };

  const [city, setCity] = useState("");
  const handleCity = (event) => {
    setCity(event.target.value);
  };

  const [from, setFrom] = useState("");
  const handleFrom = (event) => {
    setFrom(event.target.value);
  };

  const [to, setTo] = useState("");
  const handleTo = (event) => {
    setTo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onEducationChange({
      id: `${university}${degree}`,
      university,
      degree,
      city,
      from,
      to,
    });
    setUniversity("");
    setDegree("");
    setCity("");
    setFrom("");
    setTo("");
  };

  return (
    <form className={classes["education-edit"]} onSubmit={handleSubmit}>
      <label>EDUCATION</label>
      <input
        type="text"
        placeholder="University"
        onChange={handleUniversity}
        value={university}
      />
      <input
        type="text"
        placeholder="Degree"
        onChange={handleDegree}
        value={degree}
      />
      <input
        type="text"
        placeholder="city"
        onChange={handleCity}
        value={city}
      />
      <input
        type="number"
        placeholder="From"
        onChange={handleFrom}
        value={from}
      />
      <input type="number" placeholder="To" onChange={handleTo} value={to} />

      <button type="submit" id="add-edu">
        Add
      </button>
    </form>
  );
};

export default CaptureEducation;
