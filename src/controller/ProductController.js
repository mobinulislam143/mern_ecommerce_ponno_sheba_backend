
const ProfileModel = require('../models/ProfileModel');
const ReviewModel = require('../models/ReviewModel');
const UserModel = require('../models/UserModel')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
const {
    BrandListService,
    CategoryListService,
    SliderListService,
    ListByCategoryService,
    ListByBrandService,
    ListByRemarkService,
    DetailsService,
    ListByKeywordService, 
    ListBySmilierService,
    ReviewListService,
    ProductService,
    ListByFilterService
}  = require('../services/ProductService')

exports.AllProduct = async (req, res) => {
    let result = await ProductService()
    return res.status(200).json(result)

};
exports.ProductBrandList = async (req, res) => {
    let result = await BrandListService()
    return res.status(200).json(result)

};

exports.ProductCategoryList = async (req, res) => {
    let result = await CategoryListService();
    return res.status(200).json(result);
}

exports.ProductSliderList = async (req, res) => {
    let result = await SliderListService();
    return res.status(200).json(result);
}


exports.ProductListByBrand=async(req,res)=>{
    let result = await ListByBrandService(req);
    return res.status(200).json(result)
}

exports.ProductListByFilter = async(req, res) =>{
    let result = await ListByFilterService(req)
    return res.status(200).json(result)
}




exports.ProductListByCategory=async(req,res)=>{
   let result = await ListByCategoryService(req);
   return res.status(200).json(result)
}

exports.ProductListByRemark=async(req,res)=>{
   let result = await ListByRemarkService(req)
   return res.status(200).json(result)
}

exports.ProductListBySmilier=async(req,res)=>{
    let result = await ListBySmilierService(req)
    return res.status(200).json(result)
}

exports.ProductDetails=async(req,res)=>{
    let result = await DetailsService(req)
    return res.status(200).json(result)
}
exports.ProductListByKeyword=async(req,res)=>{
    let result = await ListByKeywordService(req)
    return res.status(200).json(result)
}
exports.ProductReviewList=async(req,res)=>{
    let result = await ReviewListService(req)
    return res.status(200).json(result)
}
exports.allReview = async(req, res) => {
    try{

        let result = ReviewModel.find()

        res.status(200).status({status: "success", data: result})
    }catch(e){
        res.status(400).status({status: "failed", data: e.toString()})
    }
}

exports.createReview = async(req, res)=>{
    try{
        let  userId = new ObjectId(req.headers.user_id);
        let reqBody=req.body;
        let data=await ReviewModel.create({
             productID:reqBody['productID'],
             userID: userId,
             des:reqBody['des'],
             rating:reqBody['rating'],
         })
        res.status(400).json({status: "success", data: data})
    }catch(e){
        res.status(400).json({status: "failed", data: e.toString()})
    }
}


exports.ProfileController=async(req,res)=>{
    let userId = req.params.userID
    let reqBody = req.body
    reqBody.userID = userId
    console.log(reqBody)
    let result = await ProfileModel.create(reqBody)
    return res.status(200).json(result)
}
exports.ProductReviewController=async(req,res)=>{
    let productID = req.params.ProductID
    let userID = req.params.userID;
    let reqBody = req.body
    reqBody.productID = productID;
    reqBody.userID = userID;
    let result = await ReviewModel.create(reqBody)
    return res.status(200).json(result)
}

exports.createProfile = async (req, res) => {
    try {
        let reqBody = req.body;
        console.log(reqBody);
        let result = await UserModel.create(reqBody);
        res.status(200).json({ status: "success", data: result });
    } catch (e) {
        console.log(e.toString());
        res.status(400).json({ status: "fail", data: e.toString() });
    }
};





