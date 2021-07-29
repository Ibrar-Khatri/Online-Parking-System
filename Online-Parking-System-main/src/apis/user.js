const axios = require('axios')
const { default: appSetting } = require('../../appSetting/appSetting')

export const signupWithDetails = async (details) => {
    let resp = await axios.post(`${appSetting.severHostedUrl}/user/signup`, details)
    return resp
}


