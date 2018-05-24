function getLocalDate(timestamp) {
  const now = new Date(timestamp); // remember, JavaScript dates are localized to the user...
  const USER_OFFSET_MILLIS = now.getTimezoneOffset() * 60000;
  const LOCAL_OFFSET_MILLIS = 18000000; // 5 hour offset for UTC -> EST
  const utcTimestamp = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds());
  const timezoneAdjustedTimestamp = utcTimestamp + (LOCAL_OFFSET_MILLIS - USER_OFFSET_MILLIS);
  
  console.log('utcTimestamp', utcTimestamp); // eslint-disable-line
  console.log('timezoneAdjustedTimestamp', timezoneAdjustedTimestamp); // eslint-disable-line
  console.log('USER_OFFSET_MILLIS', USER_OFFSET_MILLIS); // eslint-disable-line
  console.log('LOCAL_OFFSET_MILLIS', LOCAL_OFFSET_MILLIS); // eslint-disable-line
  console.log('**************'); // eslint-disable-line
  return new Date(timezoneAdjustedTimestamp);
}

function getDateString(utcDateObj) {
  const month = parseInt(utcDateObj.getUTCMonth() + 1, 10) <= 9 ? `0${utcDateObj.getUTCMonth() + 1}` : parseInt(utcDateObj.getUTCMonth(), 10) + 1;
  const day = parseInt(utcDateObj.getUTCDate(), 10) <= 9 ? `0${utcDateObj.getUTCDate()}` : utcDateObj.getUTCDate();
  const year = utcDateObj.getUTCFullYear().toString().substring(2);

  return `${month}/${day}/${year}`;
}

function getTimeString(utcDateObj) {
  const hours = parseInt(utcDateObj.getUTCHours(), 10) > 12 ? parseInt(utcDateObj.getUTCHours(), 10) - 12 : utcDateObj.getUTCHours();
  const minutes = utcDateObj.getUTCMinutes() === 0 ? '00' : utcDateObj.getUTCMinutes();
  const ampm = utcDateObj.getUTCHours() >= 12 ? 'PM' : 'AM';

  return `${hours}:${minutes}${ampm}`;
}

class DateFormatterService {

  // example: 05/25/18 6:00PM
  static formatTimestampForEvents(timestamp) {
    const utcDate = getLocalDate(timestamp);

    return `${getDateString(utcDate)} ${getTimeString(utcDate)}`;
  }

  // example: 05/25/18
  static formatTimestampForBlogPost(timestamp) {
    const utcDate = getLocalDate(timestamp);

    return `${getDateString(utcDate)}`;
  }

}

export default DateFormatterService;