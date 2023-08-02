import { useState } from "react";
import classes from "./CaptureWork.module.css";

const EditWork = ({ workData, closeEdit, onEditWork }) => {
  //state value declaration and handlers to set new value while editing Work element

  const [position, setPosition] = useState(workData.position);
  const handlePosition = (event) => {
    setPosition(event.target.value);
  };
  const [company, setCompany] = useState(workData.company);
  const handleCompany = (event) => {
    setCompany(event.target.value);
  };
  const [description, setDescription] = useState(workData.description);
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };
  const [city, setCity] = useState(workData.city);
  const handleCity = (event) => {
    setCity(event.target.value);
  };

  const [startDate, setStartDate] = useState(workData.from);
  const handleStartDate = (event) => {
    setStartDate(event.target.value);
  };

  const [endDate, setEndDate] = useState(workData.to);
  const handleEndDate = (event) => {
    setEndDate(event.target.value);
  };
  //state value declaration and handlers to set new value while editing Work element

  //use on editWork to send new object values to parent element to update old object values
  const handleSubmit = (event) => {
    event.preventDefault();
    closeEdit();
    onEditWork({
      id: workData.id,
      position,
      company,
      description,
      city,
      startDate,
      endDate,
    });
  };
  //use on editWork to send new object values to parent element to update old object values
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
      <input type="date" value={startDate} onChange={handleStartDate} />
      <input type="date" value={endDate} onChange={handleEndDate} />

      <button type="submit" id="add-work">
        Save Changes
      </button>
    </form>
  );
};

export default EditWork;
