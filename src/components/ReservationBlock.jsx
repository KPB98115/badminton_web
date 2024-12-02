import call_now from "../assets/images/phone_call_green.png";

const ReservationBlock = () => {
  return (
    <div className="reservation_block">
      <a href="https://api.whatsapp.com/send/?phone=85284167470&text&type=phone_number&app_absent=0">
        <div className="reservation_btn_container">
          <img className="reservation_image" src={call_now} alt="" />
        </div>
      </a>
    </div>
  );
};

export default ReservationBlock;
