import React, { useState } from "react";

import "./Home.css";
const Home = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const sendEmail = async (e) => {
    e.preventDefault();
    setEmail("");
    setSubject("");
    setMessage("");
    alert("Email sent successfully");
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        subject,
        message,
      }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <>
      <div className="email-sender">
        <h1>Email Sender</h1>
        <form>
          <div className="form-group">
            <label htmlFor="to">To:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit" onClick={sendEmail}>
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Home;
