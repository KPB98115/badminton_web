import { dateFormatter, getTimeRange } from "../assets/scripts/dateFormater";

const LessionPicker = (prop) => {
    return (
        <div className="lession_container">
            <h3 id="lession_date">
                {dateFormatter(prop.date, "YYYY/MM/DD")} 可供選擇的時段：
            </h3>
            <div id="lession_time_range">
                {prop.lessions.map((lession, index) => {
                    if (
                        lession.date.toLocaleDateString() ===
                        prop.date.toLocaleDateString()
                    ) {
                        return (
                            <ul key={index} id="time_range_container">
                                {lession.timeRanges.map((item, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className={
                                                "lession_item_" +
                                                (item.isAvailable
                                                    ? "active"
                                                    : "disabled")
                                            }
                                            onClick={() =>
                                                prop.onLessionPicked(
                                                    lession.location,
                                                    lession.price,
                                                    item
                                                )
                                            }
                                        >
                                            <div>
                                                {getTimeRange(
                                                    item.time,
                                                    item.duration
                                                )}
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default LessionPicker;
