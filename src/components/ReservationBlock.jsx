import { Link } from "react-router-dom";
import call_now from "../assets/images/phone_call_green.png";

const ReservationBlock = () => {
  return (
    <div className="reservation_block">
      <Link to="/contact">
        <div className="reservation_btn_container">
          <img className="reservation_image" src={call_now} alt="" />
        </div>
      </Link>
    </div>
  );
};

export default ReservationBlock;
