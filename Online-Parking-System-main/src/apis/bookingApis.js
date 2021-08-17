import axios from 'axios';
import appSetting from '../../appSetting/appSetting';

export const bookParkingArea = async details => {
  let resp = await axios.post(
    `${appSetting.severHostedUrl}/booking/book-parking`,
    details,
  );
  return resp;
};
export const getUsersAllBookings = async details => {
  let resp = await axios.post(
    `${appSetting.severHostedUrl}/booking/user-bookings`,
    details,
  );
  return resp;
};

export const getAvailableSlots = async details => {
  let resp = await axios.post(
    `${appSetting.severHostedUrl}/booking/get-available-slots`,
    details,
  );
  return resp;
};
