import axios from 'axios';
import appSetting from '../../appSetting/appSetting';



export const getAllParkingAreas = async () => {
  let resp = await axios.get(
    `${appSetting.severHostedUrl}/booking/get-all-parking-areas`,
  );
  return resp;
};
export const addNewParkingArea = async details => {
  let resp = await axios.post(
    `${appSetting.severHostedUrl}/booking/add-new-location`,
    details,
  );
  return resp;
};
export const deleteParkingAreaFromDB = async details => {
  let resp = await axios.post(
    `${appSetting.severHostedUrl}/booking/remove-parking-area`,
    details,
  );
  return resp;
};
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

export const getAllBookings = async details => {
  let resp = await axios.post(
    `${appSetting.severHostedUrl}/booking/get-available-slots`,
    details,
  );
  return resp;
};
export const deleteUpcomingBooking = async details => {
  let resp = await axios.post(
    `${appSetting.severHostedUrl}/booking/delete-upcoming-booking`,
    details,
  );
  return resp;
};
