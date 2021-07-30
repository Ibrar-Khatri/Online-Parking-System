import axios from "axios"
import appSetting from "../../appSetting/appSetting"


export const signupWithDetails = async (details) => {
    console.log('Appsetting ' + details.email)
    let resp = await axios.post(`${appSetting.severHostedUrl}/user/signup`, JSON.stringify(details))
    return resp
}


