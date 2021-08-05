import axios from 'axios';
import appSetting from '../../appSetting/appSetting';

export const signupWithDetails = async details => {
  let resp = await axios.post(
    `${appSetting.severHostedUrl}/user/signup`,
    details,
  );
  return resp;
};

export const signinWithDetails = async details => {
  let resp = await axios.post(
    `${appSetting.severHostedUrl}/user/signin`,
    details,
  );
  return resp;
};
export const getUserDetailsById = async details => {
  let resp = await axios.post(
    `${appSetting.severHostedUrl}/user/get-user-details`,
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
