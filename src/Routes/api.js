const express = require('express');
const router = express.Router();
const UserController = require('../Controller/UserController')
const AuthVerifyMiddleware = require('../middleware/AuthVerification')

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  }); 
  const upload = multer({ storage: storage });

    
//-----User Manage
router.post("/registration", UserController.userRegistration) 
router.post("/verifyEmail/:email/:otp", UserController.EmailVerify) 
router.post("/login", UserController.userLogin) 
router.post("/updateProfile", AuthVerifyMiddleware, UserController.updateProfile) 
router.get("/getProfile", AuthVerifyMiddleware, UserController.getProfile) 
router.post("/deleteAccount", AuthVerifyMiddleware, UserController.deleteAccount) 
router.post("/updateImage", AuthVerifyMiddleware, upload.single('image'), UserController.updateImage) 
router.get("/logout", AuthVerifyMiddleware, UserController.logout) 


module.exports = router