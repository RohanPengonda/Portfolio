import React from "react";
import "./Contact.css";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d5458619-5fb5-4ffb-b265-a16eb282408a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get InTouch</h1>
        <img src="" alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let`s Talk</h1>
          <p>
            dsfjadjvfvjasdvfcajsdfjcadsjvfcjhbadsjfbcjdsbafjbcdsjbvjcbdfsjbvjhdfjvbcjhdsfvjbcdfsjbvhfbds;dshfvkjcdfsfnds;kv
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src="" alt="mail-icon" />
              <p>rpengonda1@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src="" alt="phone-icon" />
              <p>7720991451</p>
            </div>
            <div className="contact-detail">
              <img src="" alt="loc-icon" />
              <p>Maharashtra,India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name:</label>
          <input type="text" placeholder="Enter Your Name" name="name" />
          <label htmlFor="">Your Email:</label>
          <input type="email" placeholder="Enter Your Email" name="email" />
          <label htmlFor="">Write Your Message Here:</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter Your Query/Message
          "
          />
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
