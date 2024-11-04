import "../App.css";
import { useState, useEffect } from "react";
import CalendarPicker from "../components/CalendarPicker";
import LessionPicker from "../components/LessionPicker";
import { getTimeRange } from "../assets/scripts/dateFormater";

const Reservation = () => {
    const [calendarProp, setCalendarProp] = useState({
        availableDate: [],
        unavailableDate: [
            new Date(2024, 10, 15),
            new Date(2024, 10, 20),
            new Date(2024, 11, 25),
        ],
    });
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedLession, setSelectedLession] = useState(null);
    const lessions = [
        {
            date: new Date(2024, 10, 6),
            location: "someWhere",
            price: 1000,
            timeRanges: [
                {
                    time: 10, // 24-hour-clock
                    duration: 1, // hours
                    isAvailable: true,
                },
                {
                    time: 11, // 24-hour-clock
                    duration: 1, // hours
                    isAvailable: false,
                },
                {
                    time: 13, // 24-hour-clock
                    duration: 1, // hours
                    isAvailable: true,
                },
                {
                    time: 14, // 24-hour-clock
                    duration: 1, // hours
                    isAvailable: true,
                },
                {
                    time: 15, // 24-hour-clock
                    duration: 1, // hours
                    isAvailable: true,
                },
                {
                    time: 16, // 24-hour-clock
                    duration: 1, // hours
                    isAvailable: true,
                },
                {
                    time: 17, // 24-hour-clock
                    duration: 1, // hours
                    isAvailable: true,
                },
                {
                    time: 18, // 24-hour-clock
                    duration: 1, // hours
                    isAvailable: true,
                },
            ],
        },
        {
            date: new Date(2024, 10, 5),
            location: "someWhere",
            price: 2000,
            timeRanges: [
                {
                    time: 15, // 24-hour-clock
                    duration: 2, // hours
                    isAvailable: true,
                },
            ],
        },
    ];

    const getCalendarData = () => {
        setCalendarProp({
            ...calendarProp,
            unavailableDate: [],
        });
    };

    const handleDateSelected = (date) => {
        setSelectedDate(date);
    };

    const handleLessionSelected = (location, price, item) => {
        if (item.isAvailable) {
            setSelectedLession({
                location: location,
                price: price,
                item: item,
            });
        }
    };

    //useEffect(() => {}, []);

    return (
        <div className="reservation_container">
            <div className="content_container">
                <div className="content_warpper">
                    <div>Step(1) 選擇日期</div>
                    <CalendarPicker
                        data={calendarProp}
                        onDateSelect={handleDateSelected}
                    />
                </div>
                <div className="content_warpper">
                    <div>Step(2) 選擇時段</div>
                    {selectedDate && (
                        <LessionPicker
                            date={selectedDate}
                            lessions={lessions}
                            onLessionPicked={handleLessionSelected}
                        />
                    )}
                </div>
                <div className="content_warpper">
                    <div>Step(3) 確認內容</div>
                    {selectedLession && (
                        <ul className="reservation_confirm_list">
                            <li><p>Location:</p><p>{selectedLession.location}</p></li>
                            <li>
                                <p>Time:</p><p>{getTimeRange(
                                    selectedLession.item.time,
                                    selectedLession.item.duration
                                )}</p>
                            </li>
                            <li><p>Price:</p><p>${selectedLession.price}</p></li>
                            <li><p>Payment:</p><p>Payme / FPS</p></li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Reservation;
