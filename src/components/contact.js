import React from "react";
import "./styles/contact.css";

const Contact = () => {
  return (
    <div className="background" id="con">
      <h1>Contact Me:</h1>
      <div className="comb">
      <form>
        <input name="name" type="text" className="feedback-input" placeholder="Name" />
        <input name="email" type="text" className="feedback-input" placeholder="Email" />
        <textarea name="text" className="feedback-input" placeholder="Comment"></textarea>
        <input type="submit" value="SUBMIT" />
      </form>
      <div className="contact">
        <br/>
        <h2><b>Location:</b> Yamunanagar,Haryana</h2>
        <br/>
        <h2><b>Email:</b>  gautamjuneja864@gmail.com</h2>
        <br/>
        <h2><b>Phone:</b>  +91 9817131893</h2>
      </div>
      </div>
    </div>
  );
};

export default Contact;

