import { useEffect, useState } from "react";
import classes from "./Form.module.css";
//import v4 mthod from the euuid library to use it to generate an unique id.
import { v4 as uuidv4 } from "uuid";
const Form = ({ type, data = {}, action, closeForm }) => {
  //TODO  I need to update all this comments... and refactor this code, it works but I can improve it

  //states to conditionaly render inputs on form
  const [isWorkForm, setIsWorkForm] = useState(false);
  const [isEducationForm, setIsEducationForm] = useState(true);
  // states to conditionaly render inputs on form
  let btnMessage = "Add";
  if (type === "work-editing" || type === "education-editing") {
    btnMessage = "Save";
  }

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
  //set form state to default values and  destructure values
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
  //set form state to default values and destructure values

  useEffect(() => {
    if (type === "work" || type === "work-editing") {
      setIsEducationForm(false);
      setIsWorkForm(true);
    }
    if (type === "work-editing") {
      setFormData(data);
    }

    if (type === "education" || type === "education-editing") {
      setIsEducationForm(true);
      setIsWorkForm(false);
    }
    if (type === "education-editing") {
      setFormData(data);
    }
  }, [type, data]);

  //handle changes on input values
  const handleFormDataChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  //handle changes on input values

  //handleSubmit function sends a new object to the parent element using the action function
  const handleSubmit = (event) => {
    event.preventDefault();

    //if i'm editing a form don't add new id
    if (type === "work-editing" || type === "education-editing") {
      action(formData);
      closeForm();
    }
    //if i'm editing a form don't add new id
    //else call uuidv4 method to generate a unique id and asing that value to the id variable
    const id = uuidv4();
    action({ id, ...formData });

    setFormData(defaultValues);
  };
  //handleSubmit function sends a new object to the parent element using the action function

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
      <button type="submit">{btnMessage}</button>
    </form>
  );
};

export default Form;
