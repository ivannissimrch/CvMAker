import { useState } from "react";
import classes from "./CaptureExperience.module.css";

const CaptureExperience = ({ data, closeEdit, onEditWork }) => {
  //use an objec t to pass new data values
  const [position, setPosition] = useState(data.position);
  const handlePosition = (event) => {
    setPosition(event.target.value);
  };

  const [company, setCompany] = useState(data.company);
  const handleCompany = (event) => {
    setCompany(event.target.value);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    closeEdit();
    onEditWork({
      id: data.id,
      position,
      company,
      city,
      from,
      to,
    });
  };
  return (
    <form className={classes["experience-edit"]} onSubmit={handleSubmit}>
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
        Save Changes
      </button>
    </form>
  );
};

export default CaptureExperience;
