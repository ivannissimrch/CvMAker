import { useState } from "react";
import classes from "./Form.module.css";

const EditEducation = ({ educationData, closeEdit, onEditEducation }) => {
  //state value declaration and handlers to set new value while editing Work element
  const [university, setUniversity] = useState(educationData.university);
  const handleUniversity = (event) => {
    setUniversity(event.target.value);
  };

  const [degree, setDegree] = useState(educationData.degree);
  const handleDegree = (event) => {
    setDegree(event.target.value);
  };

  const [city, setCity] = useState(educationData.city);
  const handleCity = (event) => {
    setCity(event.target.value);
  };

  const [startDate, setStartDate] = useState(educationData.from);
  const handleStartDate = (event) => {
    setStartDate(event.target.value);
  };

  const [endDate, setEndDate] = useState(educationData.to);
  const handleEndDate = (event) => {
    setEndDate(event.target.value);
  };
  //state value declaration and handlers to set new value while editing Work element

  //use on editEducation to send new object values to parent elemet to update old object values
  const handleSubmit = (event) => {
    event.preventDefault();
    closeEdit();
    onEditEducation({
      id: educationData.id,
      university,
      degree,
      city,
      startDate,
      endDate,
    });
  };
  //use on editEducation to send new object values to parent elemet to update old object values
  return (
    <form className={classes["form"]} onSubmit={handleSubmit}>
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
      <input type="date" value={startDate} onChange={handleStartDate} />
      <input type="date" value={endDate} onChange={handleEndDate} />

      <button type="submit" id="add-education">
        Save Changes
      </button>
    </form>
  );
};

export default EditEducation;
