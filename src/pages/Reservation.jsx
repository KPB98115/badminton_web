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
        setSelectedLession({
            location: location,
            price: price,
            item: item,
        });
    };

    //useEffect(() => {}, []);

    return (
        <div>
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
                        <div>
                            <div>Location: {selectedLession.location}</div>
                            <div>
                                Time:
                                {getTimeRange(
                                    selectedLession.item.time,
                                    selectedLession.item.duration
                                )}
                            </div>
                            <div>Price: ${selectedLession.price}</div>
                            <div>Payment: Payme / FPS</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Reservation;
