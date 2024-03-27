const UserModel = require("../models/UserModel")
const OtpModel = require("../models/OtpModel")
const EmailSend = require('../utility/EmailHelper')
const { EncodeToken } = require("../utility/TokenHelper")

const cloudinary = require('cloudinary').v2

          
cloudinary.config({ 
  cloud_name: 'dmpsrcunj', 
  api_key: '368331831895173', 
  api_secret: '8P65ZkatdVy5oB4VdBa8APdY6h0' 
});

exports.userRegistration = async(req, res) =>{
    try{
        const {email, firstName,lastName,age,mobile,address, password, confirmPassword} = req.body

        let code = Math.floor(100000+Math.random()*900000)
        let EmailText = `Your Verification Code is = ${code}`
        let EmailSubject = "Your Email verification code from Wave Market."

        let users = await UserModel.find({email:email}).count()

        if(users===0){
            await EmailSend(email, EmailText, EmailSubject)
            await OtpModel.updateOne({email:email}, {$set: {otp:code}}, {upsert: true})
            if(password===confirmPassword){
                let result = await UserModel.create({
                    email: email,
                    firstName: firstName,
                    lastName: lastName,
                    age: age,
                    mobile: mobile,
                    address: address,
                    password: password,
                    confirmPassword: confirmPassword,
                })
                res.status(200).json({status: "success",  data: "A verification code has been sent on your email"})
            }else{
                res.status(400).json({status: "failed",  data: "password is not match"})
            }

        }else{
            res.status(400).json({status: "failed",  data: "Your Email has already Registered."})

        }

    }catch(err){
        res.status(400).json({status:"fail",data:err.toString()})
    }
}


exports.EmailVerify = async(req,res)=>{
    try{
        let email = req.params.email;
        let otp = req.params.otp;
        let status = 0;
        let total = await OtpModel.find({ email: email, otp: otp, status: status }).count();
        if (total === 1) {
            await OtpModel.updateOne({ email: email }, { $set: { otp: '0', status: '1' } });
            res.status(200).json({ status: "success", data: "Verification Completed" });
        } else {
            res.status(400).json({ status: "fail", data: "Invalid verification" });
        }
        
        }catch(err){
            res.status(400).json({status:"fail",data:err.toString()})
        
        }  
}

exports.userLogin = async(req,res) => {
    try{
        const email = req.body.email;
        const password = req.body.password;

        const user = await UserModel.findOne({ email: email });

        if (!user) {
            return res.status(400).json({ status: "failed", message: "Email doesn't match" });
        }
        // Check if the password matches
        if (user.password !== password) {
            return res.status(400).json({ status: 'failed', message: 'Password does not match' });
        }
        let otpCheck = await OtpModel.findOne({email:email, status:'1'})
        
        if(otpCheck){
               let user_id = user._id.toString()
            let token = EncodeToken(email,user_id)

            let CookieOption = {expires: new Date(Date.now()+24*60*60*1000), httpOnly:false}
            res.cookie('token', token, CookieOption)

            res.status(200).json({ status: "success", message: 'Login success', token: token, data: user });
        }else{
            res.status(400).json({status:"fail",data:"You are not validate"})
        }
    }catch(err){
        res.status(400).json({status:"fail",data:err.toString()})
    }
}

exports.getProfile = async(req,res) =>{
    try{
        let user_id = req.headers.user_id
        let result = await UserModel.findOne({_id: user_id})
        res.status(200).json({status: "success",  data: result})
    }catch(err){
        res.status(400).json({status:"fail",data:err.toString()})

    }
}

exports.updateProfile = async(req,res) =>{
    try{
        let user_id = req.headers.user_id
        let reqBody = req.body 
        reqBody._id = user_id
        await UserModel.updateOne({_id:user_id}, {$set: reqBody}, {upsert: true})
        res.status(200).json({status: "success",  data: "Profile Update Successfully"})
    }catch(err){
        res.status(400).json({status:"fail",data:err.toString()})

    }
}
exports.deleteAccount = async(req,res) =>{
    try{
        let user_id = req.headers.user_id
        let email = req.headers.email
        await UserModel.deleteOne({_id:user_id})
        await OtpModel.deleteOne({email:email})
        res.clearCookie('token')
        res.status(200).json({status: "success",  data: "Account delete Successfully"})
    }catch(err){
        res.status(400).json({status:"fail",data:err.toString()})
    }
}
exports.logout = async(req,res) =>{
    try{
        let CookieOption = {expires: new Date(Date.now()-24*60*60*1000), httpOnly: false}
        res.cookie('token', '', CookieOption)
        res.status(200).json({status: "success",  data: "Logout Successfully"})
    }catch(err){
        res.status(400).json({status:"fail",data:err.toString()})
    }
}

exports.updateImage = async(req,res) =>{
    try{
        const userId = req.headers.user_id
        const result = await cloudinary.uploader.upload(req.file.path)
        
        const user = await UserModel.findById(userId)

        
        if (!user) {
            return res.status(404).json({ status: "fail", message: "User not found" });
        }

        user.profileImg = result.secure_url;

        await user.save()
        if(user.profileImg !== result.secure_url){
            const previousImageUrl = user.profileImg

            const publicId = previousImageUrl.substring(previousImageUrl.lastIndexOf("/") + 1, previousImageUrl.lastIndexOf('.'))

            await cloudinary.uploader.destroy(publicId)
        }
        res.status(200).json({status: "success",  data: "Profile Update Successfully."})
    }catch(err){
        res.status(400).json({status:"fail",data:err.toString()})
    }
}

// try{
//     res.status(200).json({status: "success",  data: result})

// }catch(err){
//     res.status(400).json({status:"fail",data:err.toString()})

// }