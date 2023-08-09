import { useState } from "react";
import classes from "./Form.module.css";
const Form = ({ data, action, closeForm }) => {
  const [formData, setFormData] = useState(data);
  const handleFormDataChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    action(formData);
    setFormData(data);
    //if form is on editing mode closeForm
    if (formData.id) {
      closeForm();
    }
  };
  return (
    <form className={classes["form"]} onSubmit={handleSubmit}>
      <label>{data.title}</label>
      {Object.keys(data).map((inputName) =>
        inputName === "id" || inputName === "title" ? null : (
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

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
