function getLocalDate(timestamp) {
  const utcDateObj = new Date(timestamp); // remember, JavaScript dates are localized to the user but reflected in UTC time...
  const EST_OFFSET_MILLIS = 18000000; // 5 hour offset for UTC -> EST

  return new Date(utcDateObj.getTime() - EST_OFFSET_MILLIS);
}

function getDateString(dateObj) {
  const month = parseInt(dateObj.getMonth() + 1, 10) <= 9 ? `0${dateObj.getMonth() + 1}` : parseInt(dateObj.getMonth(), 10) + 1;
  const day = parseInt(dateObj.getDate(), 10) <= 9 ? `0${dateObj.getDate()}` : dateObj.getDate();
  const year = dateObj.getFullYear().toString().substring(2);

  return `${month}/${day}/${year}`;
}

function getTimeString(dateObj) {
  const hours = parseInt(dateObj.getUTCHours(), 10) > 12 ? parseInt(dateObj.getUTCHours(), 10) - 12 : dateObj.getUTCHours();
  const minutes = dateObj.getUTCMinutes() === 0 ? '00' : dateObj.getUTCMinutes();
  const ampm = dateObj.getUTCHours() >= 12 ? 'PM' : 'AM';

  return `${hours}:${minutes}${ampm}`;
}

class DateFormatterService {

  // example: 05/25/18 6:00PM
  static formatTimestampForEvents(timestamp) {
    const eventDateObj = getLocalDate(timestamp);

    return `${getDateString(eventDateObj)} ${getTimeString(eventDateObj)}`;
  }

  // example: 05/25/18
  static formatTimestampForBlogPost(timestamp) {
    const postDateObj = getLocalDate(timestamp);

    return `${getDateString(postDateObj)}`;
  }

}

export default DateFormatterService;