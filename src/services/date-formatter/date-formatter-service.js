function getDateString(timestamp) {
  const dateObj = new Date(timestamp);
  const month = parseInt(dateObj.getMonth(), 10) + 1 <= 9 ? `0${dateObj.getMonth() + 1}` : parseInt(dateObj.getMonth(), 10) + 1;
  const day = parseInt(dateObj.getDate(), 10) <= 9 ? `0${dateObj.getDate()}` : dateObj.getDate();
  const year = dateObj.getFullYear().toString().substring(2);

  return `${month}/${day}/${year}`;
}

function getTimeString(timestamp) {
  const dateObj = new Date(timestamp);
  const hours = parseInt(dateObj.getHours(), 10) > 12 ? parseInt(dateObj.getHours(), 10) - 12 : dateObj.getHours();
  const minutes = dateObj.getMinutes() === 0 ? '00' : dateObj.getMinutes();
  const ampm = dateObj.getHours() >= 12 ? 'PM' : 'AM';

  return `${hours}:${minutes}${ampm}`;
}

class DateFormatterService {

  // example: 05/25/18 6:00PM
  static formatTimestampForEvents(timestamp, isUnix) {
    const now = isUnix ? timestamp * 1000 : timestamp;

    return `${getDateString(now)} ${getTimeString(now)}`;
  }

  // example: 05/25/18
  static formatTimestampForBlogPost(timestamp, isUnix) {
    const now = isUnix ? timestamp * 1000 : timestamp;

    return `${getDateString(now)}`;
  }

}

export default DateFormatterService;