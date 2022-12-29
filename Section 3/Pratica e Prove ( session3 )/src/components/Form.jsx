import React from "react";
import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: false,
    skill: "",
    favColor: ''
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
      />
      <br />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <br />
      <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
      <br />
      <textarea
        placeholder="comment"
        onChange={handleChange}
        name="comments"
        value={formData.comments} // value negli input " normali "
      />
      <br />
      <input
        type="checkbox"
        id="isFriendly"
        onChange={handleChange}
        name="isFriendly"
        checked={formData.isFriendly} // al posto di value nei checkbox
      />
      <label htmlFor="isFriendly">Are you friendly?</label>
      <br />
      <br />

      <fieldset>
        <legend>Current Experience Status</legend>

        <input
          type="radio"
          id="beginner"
          name="skill"
          value="beginner"
          onChange={handleChange}
          checked={formData.skill === "beginner"} //  per i radio button
        />
        <label htmlFor="beginner">Beginner 1-3 Years</label>
        <br />

        <input
          type="radio"
          id="intermediate"
          name="skill"
          value="intermediate"
          onChange={handleChange}
          checked={formData.skill === "intermediate"} //  per i radio button
        />
        <label htmlFor="intermediate">Intermediate 3-5 Years</label>
        <br />

        <input
          type="radio"
          id="advanced"
          name="skill"
          value="advanced"
          onChange={handleChange}
          checked={formData.skill === "advanced"} //  per i radio button
        />
        <label htmlFor="advanced">Advanced 10+ Years</label>
        <br />
      </fieldset>



      <br />
      <label htmlFor="favColor">What is your favorite color?</label>
      <br />
      <br />
      <select
        id="favColor"
        value={formData.favColor}
        onChange={handleChange}
        name="favColor"
      >
        <option value="">-- Choose --</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="indigo">Indigo</option>
        <option value="violet">Violet</option>
      </select>
      <br />
      <br />

      <button>Submit</button>
    </form>
  );
}

export default Form;
