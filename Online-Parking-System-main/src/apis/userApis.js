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

export const updateUserProfile = async details => {
  let resp = await axios({
    method: 'post',
    url: `${appSetting.severHostedUrl}/user/update-user-details`,
    data: details,
    headers: { 'Content-Type': 'multipart/form-data' },
  })
  return resp;
};

export const updateUserPassword = async details => {
  let resp = await axios.post(
    `${appSetting.severHostedUrl}/user/update-password`,
    details,
  );
  return resp;
};