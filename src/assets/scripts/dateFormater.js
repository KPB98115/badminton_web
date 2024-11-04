export const dateFormatter = (date, format) => {
  const [year, month, day] = date.toLocaleDateString("zh-TW").split('/');

  switch (format) {
    case "YYYY/MM/DD":
      return `${year}/${month}/${day}`;
    case "MM/DD/YYYY":
      return `${month}/${day}/${year}`;
    case "YYYY-MM-DD":
    return `${year}-${month}-${day}`;
    case "DD-MM-YYYY":
      return `${day}-${month}-${year}`;
    default:
      return `${year}/${month}/${day}`;
  }
};

export const getTimeRange = (startTime, duration) => {
        const formatTime = (time) => {
            return String(time).padStart(2, "0") + ":00";
        };

        const endTime = (startTime + duration) % 24;

        const formattedStart = formatTime(startTime);
        const formattedEnd = formatTime(endTime);

        return `${formattedStart}~${formattedEnd}`;
    };