import "../App.css";
import phone_call from "../assets/images/phone-call_circle.png";
import email from "../assets/images/email_circle.png";

const Contact = () => {
  return (
    <div className="contact_container">
      <div className="contact_wrapper">
        <img src={phone_call} alt="" />
        <p>+852 8416 7470</p>
      </div>
      <div className="contact_wrapper">
        <img src={email} alt="" />
        <p>bcnsportcompany@gmail.com</p>
      </div>
    </div>
  );
};

export default Contact;
