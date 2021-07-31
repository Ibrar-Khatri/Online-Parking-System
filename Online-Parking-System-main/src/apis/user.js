import axios from "axios"
import appSetting from "../../appSetting/appSetting"


export const signupWithDetails = async (details) => {
    let resp = await axios.post(`${appSetting.severHostedUrl}/user/signup`, details)
    return resp
}


export const signinWithDetails = async (details) => {
    console.log('Appsetting ' + details.email)
    let resp = await axios.post(`${appSetting.severHostedUrl}/user/signin`, details)
    return resp
}


