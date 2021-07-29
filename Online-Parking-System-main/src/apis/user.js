import axios from "axios"
import appSetting from "../../appSetting/appSetting"


export const signupWithDetails = async (details) => {
    console.log('Appsetting ' + appSetting.severHostedUrl)
    let resp = await axios.post(`${appSetting.severHostedUrl}/user/signup`, details)
    return resp
}


