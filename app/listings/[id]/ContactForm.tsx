"use client";

import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";
import DefaultButton from "@/app/_components/buttons/DefaultButton";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    comments: "",
  });
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    const re = /^[0-9\b]+$/;
    return re.test(phone);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.comments
    ) {
      setMessage("Please fill out all fields.");
      setIsValid(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      setMessage("Please enter a valid email address.");
      setIsValid(false);
      return;
    }

    if (!validatePhone(formData.phone)) {
      setMessage("Please enter a valid phone number.");
      setIsValid(false);
      return;
    }

    setMessage("Message sent successfully!");
    setIsValid(true);

    // Handle the form submission logic here (e.g., sending data to a server)
  };

  return (
    <div className="border border-gray-500 bg-gray-100 w-full min-h-96 flex flex-col items-center p-4">
      <h2 className="text-2xl text-center">Contact Agent</h2>
      <form
        className="w-3/4 flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col w-full">
          <label>Full Name:</label>
          <input
            className="border border-gray-500 my-4"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label>Email:</label>
          <input
            className="border border-gray-500 my-4"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label>Phone:</label>
          <input
            className="border border-gray-500 my-4"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label>Comments:</label>
          <textarea
            className="border border-gray-500 my-4"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            cols={23}
          ></textarea>
        </div>
        <DefaultButton
          type="submit"
          label="Contact Now"
          onClickHandler={() => console.log("contacted")}
        />
        <div style={{ color: isValid ? "green" : "red" }}>{message}</div>
      </form>
    </div>
  );
};

export default ContactForm;
