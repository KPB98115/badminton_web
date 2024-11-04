import { Link } from "react-router-dom";

const ReservationBlock = () => {
    return (
        <div className="reservation_block">
            <Link to="/reservation">
                <button className="reservation_btn">立即預約</button>
            </Link>
        </div>
    );
};

export default ReservationBlock;
