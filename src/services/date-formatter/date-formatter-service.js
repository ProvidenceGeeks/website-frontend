function getLocalDate(timestamp) {
  // 5 hour offset
  const OFFSET = 300;
  const now = new Date(timestamp);
  const utc = Date.UTC(now.getFullYear(), now.getMonth() - 1, now.getDay(), now.getHours(), now.getMinutes());

  return new Date(utc + OFFSET);
}

function getDateString(timestamp) {
  const localDate = new Date(timestamp);
  const month = parseInt(localDate.getMonth(), 10) + 1 <= 9 ? `0${localDate.getMonth() + 1}` : parseInt(localDate.getMonth(), 10) + 1;
  const day = parseInt(localDate.getDate(), 10) <= 9 ? `0${localDate.getDate()}` : localDate.getDate();
  const year = localDate.getFullYear().toString().substring(2);

  return `${month}/${day}/${year}`;
}

function getTimeString(timestamp) {
  const localDate = getLocalDate(timestamp);
  const hours = parseInt(localDate.getUTCHours(), 10) > 12 ? parseInt(localDate.getUTCHours(), 10) - 12 : localDate.getUTCHours();
  const minutes = localDate.getUTCMinutes() === 0 ? '00' : localDate.getUTCMinutes();
  const ampm = localDate.getUTCHours() >= 12 ? 'PM' : 'AM';

  return `${hours}:${minutes}${ampm}`;
}

class DateFormatterService {

  // example: 05/25/18 6:00PM
  static formatTimestampForEvents(timestamp) {
    return `${getDateString(timestamp)} ${getTimeString(timestamp)}`;
  }

  // example: 05/25/18
  static formatTimestampForBlogPost(timestamp) {
    return `${getDateString(timestamp)}`;
  }

}

export default DateFormatterService;