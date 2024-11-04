import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";

const CalendarPicker = (prop) => {
    const data = prop.data;
    const [availableDates, setAavilableDates] = useState(data.availableDate);
    const disabledDates = data.unavailableDate;

    const isTileDisabled = ({ date, view }) => {
        if (view === "month") {
            return disabledDates.some((disabledDate) => {
                return (
                    date.toLocaleDateString() ===
                    disabledDate.toLocaleDateString()
                );
            });
        }
    };

    return (
        <div className="calendar_container">
            <Calendar
                defaultView="month"
                value={availableDates}
                onChange={setAavilableDates}
                onClickDay={(date) => prop.onDateSelect(date)}
                tileDisabled={isTileDisabled}
            />
        </div>
    );
};

export default CalendarPicker;
