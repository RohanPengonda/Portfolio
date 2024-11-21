import React from "react";
import "./Contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import phono_icon from "../../assets/call_icon.svg";
import loc_icon from "../../assets/location_icon.svg";
import underline from "../../assets/underline.png";

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
        <img src={underline} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let`s Talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mail-icon" />
              <p>rpengonda1@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={phono_icon} alt="phone-icon" />
              <p>7720991451</p>
            </div>
            <div className="contact-detail">
              <img src={loc_icon} alt="loc-icon" />
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
