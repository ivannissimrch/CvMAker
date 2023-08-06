import { useState } from "react";
import classes from "./Form.module.css";
//import v4 mthod from the euuid library to use it to generate an unique id.
import { v4 as uuidv4 } from "uuid";
const Form = ({ formType, data = {}, action, closeForm }) => {
  let inputValues = {};
  //Initialize text display in button
  let btnMessage = "Add";
  //TODO change the props name type to formType
  let formTitle = formType;
  //Check to see if this is a form that is editing an exiting object
  if (formType === "work-editing" || formType === "education-editing") {
    btnMessage = "Save";
    inputValues = data;
  }
  //Check to see if this is a form that is editing an exiting object

  ///Define what inputs do I need for different form types
  if (formType === "work") {
    inputValues = {
      position: "",
      company: "",
      description: "",
      city: "",
      startDate: "",
      endDate: "",
    };
  }
  if (formType === "education") {
    inputValues = {
      university: "",
      degree: "",
      city: "",
      startDate: "",
      endDate: "",
    };
  }
  ///Define what inputs do I need for different form types

  const [formData, setFormData] = useState(inputValues);

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
    if (formType === "work-editing" || formType === "education-editing") {
      action(formData);
      closeForm();
    }
    //if i'm editing a form don't add new id

    //else call uuidv4 method to generate a unique id and asing that value to the id variable
    const id = uuidv4();
    action({ id, ...formData });

    setFormData(inputValues);
  };
  //handleSubmit function sends a new object to the parent element using the action function

  return (
    <form className={classes["form"]} onSubmit={handleSubmit}>
      <label>{formTitle.toUpperCase()}</label>
      {Object.keys(inputValues).map((inputName) =>
        inputName === "id" ? null : (
          <input
            key={inputName}
            type={inputName.includes("Date") ? "date" : "text"}
            onChange={handleFormDataChange}
            name={inputName}
            placeholder={inputName}
            value={formData[inputName]}
          />
        )
      )}

      <button type="submit">{btnMessage}</button>
    </form>
  );
};

export default Form;
