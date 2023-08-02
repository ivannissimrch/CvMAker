import { useEffect, useState } from "react";
import classes from "./CaptureEducation.module.css";
//import v4 mthod from the euuid library to use it to generate an unique id.
import { v4 as uuidv4 } from "uuid";
const Form = ({ onWorkChange, type, onEducationChange, ...data }) => {
  //Declare state management variables  and their corresponding functions
  // to set new state on new values on inputs
  const [isWorkForm, setIsWorkForm] = useState(false);
  const [isEducationForm, setIsEducationForm] = useState(true);

  useEffect(() => {
    if (type === "work") {
      setIsEducationForm(false);
      setIsWorkForm(true);
    }
  }, [type]);

  const defaultValues = {
    position: "",
    company: "",
    description: "",
    university: "",
    degree: "",
    city: "",
    startDate: "",
    endDate: "",
  };

  const [formData, setFormData] = useState(defaultValues);
  const {
    university,
    degree,
    city,
    startDate,
    endDate,
    position,
    company,
    description,
  } = formData;

  const handleFormDataChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  //Declare state management variables  and their corresponding functions
  // to set new state on new values on inputs

  //handleSubmit function sends a new object to the parent element using the onEducationChange function
  const handleSubmit = (event) => {
    event.preventDefault();
    //call uuidv4 method to generate a unique id and asing that value to the id variable
    const id = uuidv4();
    if (type === "education") {
      onEducationChange({
        id,
        ...formData,
      });
    }
    if (type === "work") {
      onWorkChange({
        id,
        ...formData,
      });
    }

    setFormData(defaultValues);
  };
  //handleSubmit function sends a new object to the parent element using the onEducationChange function

  return (
    <form className={classes["education-edit"]} onSubmit={handleSubmit}>
      {isEducationForm && <label>EDUCATION</label>}
      {isWorkForm && <label>WORK EXPERIENCE</label>}

      {isEducationForm && (
        <input
          type="text"
          placeholder="University"
          onChange={handleFormDataChange}
          name="university"
          value={university}
        />
      )}
      {isWorkForm && (
        <input
          type="text"
          placeholder="Position"
          onChange={handleFormDataChange}
          name="position"
          value={position}
        />
      )}
      {isEducationForm && (
        <input
          type="text"
          placeholder="Degree"
          onChange={handleFormDataChange}
          name="degree"
          value={degree}
        />
      )}
      {isWorkForm && (
        <input
          type="text"
          placeholder="Company"
          name="company"
          value={company}
          onChange={handleFormDataChange}
        />
      )}
      {isWorkForm && (
        <input
          type="text"
          placeholder="Job Description"
          name="description"
          value={description}
          onChange={handleFormDataChange}
        />
      )}
      <input
        type="text"
        placeholder="city"
        onChange={handleFormDataChange}
        name="city"
        value={city}
      />
      <input
        type="date"
        onChange={handleFormDataChange}
        name="startDate"
        value={startDate}
      />
      <input
        type="date"
        onChange={handleFormDataChange}
        name="endDate"
        value={endDate}
      />
      <button type="submit" id="add-edu">
        Add
      </button>
    </form>
  );
};

export default Form;
