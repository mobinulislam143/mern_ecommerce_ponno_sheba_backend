const {UserOtpService,
    VerifyOtpService,
    SaveProfileService,
    ReadProfileService
} = require('../services/UserService')
exports.UserOtp= async(req,res) => {
    let result = UserOtpService(req)
    return res.status(200).json({status: "success", data: result})    
}
exports.VerifyLogin= async(req,res) => {
    let result = await VerifyOtpService(req)
    if(result['status'] === 'success'){
        //cookie option
        let CookieOption = {expires:new Date(Date.now()+24*60*60*1000), httpOnly:false}
        res.cookie('token', result['token'], CookieOption)
        return res.status(200).json(result)
    }else{
        return res.status(200).json(result)
    }
}
exports.UserLogout= async(req,res) => { 
    let CookieOption = {expires:new Date(Date.now()-24*60*60*1000), httpOnly:false}
    res.cookie('token','', CookieOption)
    return res.status(200).json({status: "success"})

}
exports.CreateProfile= async(req,res) => {
    let result = await SaveProfileService(req)
    return res.status(200).json(result)
}
exports.UpdateProfile= async(req,res) => {
    let result = await SaveProfileService(req)
    return res.status(200).json(result)
}
exports.ReadProfile= async(req,res) => {
    let result = await ReadProfileService(req)
    return res.status(200).json(result)

}