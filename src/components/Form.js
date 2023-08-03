import { useEffect, useState } from "react";
import classes from "./Form.module.css";
//import v4 mthod from the euuid library to use it to generate an unique id.
import { v4 as uuidv4 } from "uuid";
const Form = ({ type, action }) => {
  //TODO  I need to update all this comments...

  //states to conditionaly render inputs on form
  const [isWorkForm, setIsWorkForm] = useState(false);
  const [isEducationForm, setIsEducationForm] = useState(true);
  // states to conditionaly render inputs on form

  useEffect(() => {
    if (type === "work") {
      setIsEducationForm(false);
      setIsWorkForm(true);
    }
  }, [type]);

  //default values migth change this latter on.
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
  //default values migth change this latter on.
  //set form state to default values nad destructure values
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
  //set form state to default values nad destructure values

  //handle changes on input values
  const handleFormDataChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  //handle changes on input values

  //handleSubmit function sends a new object to the parent element using the onEducationChange function
  const handleSubmit = (event) => {
    event.preventDefault();
    //call uuidv4 method to generate a unique id and asing that value to the id variable
    const id = uuidv4();
    action({ id, ...formData });

    setFormData(defaultValues);
  };
  //handleSubmit function sends a new object to the parent element using the onEducationChange function

  return (
    <form className={classes["form"]} onSubmit={handleSubmit}>
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
