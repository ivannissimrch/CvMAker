import { useState } from "react";
import classes from "./Form.module.css";
//import v4 mthod from the euuid library to use it to generate an unique id.
import { v4 as uuidv4 } from "uuid";
const Form = ({ workInputs, ...rest }) => {
  const [formData, setFormData] = useState("");

  //handle changes on input values
  const handleFormDataChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  //handle changes on input values

  //handleSubmit function sends a new object to the parent element using the action function
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(rest);

    setFormData("");
  };

  //handleSubmit function sends a new object to the parent element using the action function

  return (
    <form className={classes["form"]} onSubmit={handleSubmit}>
      {/* <label>{formTitle.toUpperCase()}</label> */}
      {Object.keys(workInputs).map((inputName) =>
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

      <button type="submit">submit</button>
    </form>
  );
};

export default Form;
