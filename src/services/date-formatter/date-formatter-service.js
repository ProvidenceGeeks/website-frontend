function getLocalDate(timestamp, utcOffset) {
  // remember, JavaScript dates are localized to the user but reflected in UTC time...
  // so we use the offset (from Meetup.com) if provided, other use local browser time
  const utcDateObj = new Date(timestamp);
  const OFFSET_MILLIS = utcOffset
    ? utcOffset
    : new Date().getTimezoneOffset() * 60 * 1000;

  return new Date(utcDateObj.getTime() + OFFSET_MILLIS);
}

function getFormattedDate(dateObj) {
  const month = parseInt(dateObj.getMonth() + 1, 10) <= 9 ? `0${dateObj.getMonth() + 1}` : parseInt(dateObj.getMonth(), 10) + 1;
  const day = parseInt(dateObj.getDate(), 10) <= 9 ? `0${dateObj.getDate()}` : dateObj.getDate();
  const year = dateObj.getFullYear().toString().substring(2);

  return `${month}/${day}/${year}`;
}

function getFormattedTime(dateObj) {
  const hours = parseInt(dateObj.getUTCHours(), 10) > 12 ? parseInt(dateObj.getUTCHours(), 10) - 12 : dateObj.getUTCHours();
  const minutes = dateObj.getUTCMinutes() === 0 ? '00' : dateObj.getUTCMinutes();
  const ampm = dateObj.getUTCHours() >= 12 ? 'PM' : 'AM';

  return `${hours}:${minutes}${ampm}`;
}

class DateFormatterService {

  // example: 05/25/18 6:00PM
  static formatTimestampForEvents(timestamp, offset) {
    const eventDateObj = getLocalDate(timestamp, offset);

    return `${getFormattedDate(eventDateObj)} ${getFormattedTime(eventDateObj)}`;
  }

  // example: 05/25/18
  static formatTimestampForBlogPost(timestamp) {
    const postDateObj = getLocalDate(timestamp);

    return `${getFormattedDate(postDateObj)}`;
  }

}

export default DateFormatterService;