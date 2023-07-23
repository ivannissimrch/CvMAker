import { useState } from "react";
import classes from "./CaptureWork.module.css";

const CaptureWork = ({ onWorkChange }) => {
  //Declare state management variables  and their corresponding functions
  // to set new state on new values on inputs
  const [position, setPosition] = useState("");
  const handlePosition = (event) => {
    setPosition(event.target.value);
  };

  const [company, setCompany] = useState("");
  const handleCompany = (event) => {
    setCompany(event.target.value);
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
  //Declare state management variables  and their corresponding functions
  // to set new state on new values on inputs

  //handleSubmit function sends a new object to the parent element using the onWorkChange function
  const handleSubmit = (event) => {
    event.preventDefault();
    onWorkChange({
      id: `${position}${company}`,
      position,
      company,
      city,
      from,
      to,
    });
    setPosition("");
    setCompany("");
    setCity("");
    setFrom("");
    setTo("");
  };
  //handleSubmit function sends a new object to the parent element using the onWorkChange function
  return (
    <form className={classes["experience-edit"]} onSubmit={handleSubmit}>
      <label>WORK EXPERIENCE</label>
      <input
        type="text"
        placeholder="Position"
        onChange={handlePosition}
        value={position}
      />
      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={handleCompany}
      />
      <input
        type="text"
        placeholder="City"
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

      <button type="submit" id="add-work">
        Add
      </button>
    </form>
  );
};

export default CaptureWork;
