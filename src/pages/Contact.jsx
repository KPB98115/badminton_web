import "../App.css";
import phone_call from "../assets/images/phone-call_circle.png";
import email from "../assets/images/mail-icon.png";
import whatsapp from "../assets/images/whatsapp-icon.svg";

const Contact = () => {
  return (
    <div className="contact_container">
      <div className="contact_wrapper">
        <div>
          <h3>WhatsApp</h3>
          <img src={whatsapp} alt="" />
        </div>
        <p>+852 8416 7470</p>
      </div>
      <div className="contact_wrapper">
        <div>
          <h3>Email</h3>
          <img src={email} alt="" />
        </div>
        <p>bcnsportcompany@gmail.com</p>
      </div>
      <div className="contact_wrapper">
        <div>
          <h3>Tel.</h3>
          <img src={phone_call} alt="" />
        </div>
        <p>+852 8416 7470</p>
      </div>
    </div>
  );
};

export default Contact;
