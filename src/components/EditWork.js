import { useState } from "react";
import classes from "./CaptureWork.module.css";

const EditWork = ({ data, closeEdit, onEditWork }) => {
  //state value declaration and handlers to set new value while editing Work element
  const [position, setPosition] = useState(data.position);
  const handlePosition = (event) => {
    setPosition(event.target.value);
  };
  const [company, setCompany] = useState(data.company);
  const handleCompany = (event) => {
    setCompany(event.target.value);
  };
  const [description, setDescription] = useState(data.description);
  const handleDescription = (event) => {
    setDescription(event.target.value);
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

  //use on editWork to send new object to parent elemet to update old object
  const handleSubmit = (event) => {
    event.preventDefault();
    closeEdit();
    onEditWork({
      id: data.id,
      position,
      company,
      description,
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
        placeholder="Job Description"
        value={description}
        onChange={handleDescription}
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

export default EditWork;
