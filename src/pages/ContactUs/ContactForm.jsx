import { useState } from "react";
import Dropdown from "@/components/Dropdown";
import Button from "@/components/Button";

const initialFormData = {
  name: "",
  email: "",
  subject: "",
  enquery: "offer",
  message: "",
};

const ContactForm = ({ dropdownOptions }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmission = (e) => {
    e.preventDefault();

    setFormData(initialFormData);
    setIsFormSubmitted(true);
  };

  const handleSelection = (option) => {
    setFormData((prevData) => ({ ...prevData, enquery: option.value }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <form onSubmit={handleFormSubmission} className="contact-form" action="#">
      <p
        className={`success-message | absolute top-[-40px] text-blue-400 text-[17px] font-medium ${
          isFormSubmitted ? "active" : ""
        }`}
      >
        Your message was sent successfully!
      </p>

      <div className="contact-form__inputs-grid">
        <label htmlFor="name">
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name..."
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label htmlFor="email">
          Email Address
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your email address..."
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label htmlFor="subject">
          Subject
          <input
            id="subject"
            type="text"
            name="subject"
            placeholder="Enter Subject..."
            value={formData.subject}
            onChange={handleInputChange}
            required
          />
        </label>
        <label htmlFor="enquery">
          Enquery Type
          <Dropdown
            options={dropdownOptions}
            labelValue={formData.enquery}
            onChange={handleSelection}
          />
        </label>
      </div>

      <label htmlFor="messages">
        Messages
        <textarea
          className="min-h-[60px]"
          rows={7}
          id="messages"
          name="message"
          placeholder="Enter your messages"
          value={formData.message}
          onChange={handleInputChange}
          required
        />
      </label>
      <Button className={"px-[2.7rem] mt-[2rem]"} primary>
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
