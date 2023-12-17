import React, { useState } from "react";
import Navbar from "./Navbar";

// This is a dummy endpoint for demonstration purposes only
// You need to replace it with your own backend service or email provider
const FORM_ENDPOINT = "https://example.com/contact";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the user's input
    const data = {
      name,
      email,
      message,
    };

    // Send the data to the endpoint using fetch
    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          // If the response is ok, set the submitted state to true
          setSubmitted(true);
        } else {
          // If the response is not ok, throw an error
          throw new Error("Something went wrong");
        }
      })
      .catch((error) => {
        // If there is an error, alert the user
        alert(error.message);
      });
  };

  // If the submitted state is true, show a thank you message
  if (submitted) {
    return (
      <div className="container">
        <h1>Thank you for contacting us!</h1>
        <p>We will get back to you soon.</p>
      </div>
    );
  }

  // If the submitted state is false, show the contact form
  return (
    <div className="container">
        <Navbar/>
      <p style={{"marginTop":"10rem"}}>Please fill out the form below and we will get in touch with you.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div className="form-group" style={{"textAlign":"center"}}>
          <button type="submit">Send</button>
        </div>
      </form>
      <style>
        {`
          .container {
            max-width: 600px;
            margin: 0 auto;
            font-family: Arial, sans-serif;
          }

          h1 {
            text-align: center;
            color: #007bff;
          }

          p {
            text-align: center;
            color: #6c757d;
          }

          .form-group {
            margin: 10px;
          }

          label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
          }

          input, textarea {
            display: block;
            width: 100%;
            padding: 10px;
            border: 1px solid #6c757d;
            border-radius: 5px;
            outline: none;
          }

          input:focus, textarea:focus {
            border-color: #007bff;
          }

          button {
            display: block;
            width: 100%;
            padding: 10px;
            border: none;
            border-radius: 5px;
            background-color: #007bff;
            color: white;
            font-weight: bold;
            cursor: pointer;
          }

          button:hover {
            background-color: #044d9b;
          }
        `}
      </style>
    </div>
  );
};

export default Contact;
