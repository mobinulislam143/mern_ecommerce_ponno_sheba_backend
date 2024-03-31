const ProductModel = require('../models/ProductModel')
const ReportsModel = require('../models/ReportsModel')
const ProductDetailsModel = require('../models/ProductDetailsModel')
const CommentModel = require('../models/CommentModel')
const cloudinary = require('cloudinary').v2
const mongoose  = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

exports.createProduct = async(req,res)=>{
    try{
        let user_id = new Object(req.headers.user_id)
        const reqBody = req.body
        const uploadedImages = req.files;

        if(!uploadedImages || Object.keys(uploadedImages).length === 0){
            return res.status(400).json({ status: "fail", data: "No images uploaded" });
        }

        const imageURLs = [];
        for (const image of uploadedImages){
            const result = await cloudinary.uploader.upload(image.path)
            imageURLs.push(result.secure_url)
        }

         // Create product details
         const productDetails = {
            img1: imageURLs[0] || "",
            img2: imageURLs[1] || "",
            img3: imageURLs[2] || "",
            img4: imageURLs[3] || "",
            img5: imageURLs[4] || "",
            img6: imageURLs[5] || "",
            color: reqBody.color,
            size: reqBody.size,
            model: reqBody.model,
            features: reqBody.features,
            age: reqBody.age,
            edition: reqBody.edition,
            placeOfOrigin: reqBody.placeOfOrigin,
            material: reqBody.material,
            style: reqBody.style
        };
        const createProductDetails = await ProductDetailsModel.create(productDetails)

        // Create product
        const product = await ProductModel.create({
            title: reqBody.title,
            shortDes: reqBody.shortDes,
            price: reqBody.price,
            discount: reqBody.discount,
            discountPrice: reqBody.discountPrice,
            stock: reqBody.stock,
            remark: reqBody.remark,
            categoryID: new ObjectId(reqBody.categoryID),
            productDetailID: createProductDetails._id,
            subcategoryID: new ObjectId(reqBody.subcategoryID),
            brandID: new ObjectId(reqBody.brandID),
            userID: user_id,
        });
        res.status(200).json({ status: "success", data: product });    }catch(err){
        res.status(400).json({status:"fail",data:"product create failed"})

    }
}


exports.ReportProduct = async(req,res)=>{
    try{
        let user_id = new Object(req.headers.user_id)
        let productId = req.params.productId
        let reqBody = req.body
        reqBody.userID = user_id
        reqBody.productID = productId
        let result = await ReportsModel.create(reqBody)
        res.status(200).json({status: "success", data: result})
    }catch(err){
        res.status(400).json({status:"fail",data: err.toString()})
    }
}
exports.CommentProduct = async(req,res)=>{
    try{
        let user_id = new Object(req.headers.user_id)
        let productId = req.params.productId
        let reqBody = req.body
        reqBody.userID = user_id
        reqBody.productID = productId
        let result = await CommentModel.create(reqBody)
        res.status(200).json({status: "success", data: result})
    }catch(err){
        res.status(400).json({status:"fail",data: err.toString()})
    }
}
exports.getCommentByProduct = async(req,res)=>{
    try{
        let productId = new ObjectId(req.params.productId)
        let MatchProductStage = {$match: {productID: productId}}
        let JoinWithUserStage = { $lookup: { from: 'users',localField: 'userID', foreignField: '_id', as: 'user' }};
        
        let UnwindproductUserStage = {$unwind: '$user'}
        let ProjectionStage = {$project: {'user._id': 0,'user.age': 0,'user.mobile': 0,'user.address': 0,'user.createdAt': 0,'user.updatedAt': 0,'user.password': 0,'user.confirmPassword': 0, }}

        let result = await CommentModel.aggregate([
            MatchProductStage,
            JoinWithUserStage,
            UnwindproductUserStage,
            ProjectionStage
        ])
        res.status(200).json({status: "success", data: result})
    }catch(err){
        res.status(400).json({status:"fail",data: err.toString()})
    }
}

exports.usersProduct = async(req,res)=>{
    try{
        const user_id = new ObjectId(req.headers.user_id);
        let MatchStage = {$match: {userID: user_id}}

        let JoinWithProductDetailsStage = { $lookup: { from: 'productdetails',localField: 'productDetailID', foreignField: '_id', as: 'details' }};
        let UnwindproductDetailsStage = {$unwind: '$details'}

        let result = await ProductModel.aggregate([
            MatchStage,
            JoinWithProductDetailsStage,
            UnwindproductDetailsStage

        ])
        res.status(200).json({status: "success", data: result})
    }catch(err){
        res.status(400).json({status:"fail",data:err.toString()})
    }
}


exports.productDetailsById = async(req,res)=>{
    try{
        let productId = new ObjectId(req.params.productId);
        let MatchProductStage = { $match: { _id: productId } };
        let JoinWithBrandStage = {$lookup:{from:'brands', localField:'brandID',foreignField: '_id', as:'brand'}}        
        let JoinWithCategoryStage = { $lookup: { from: 'categories',localField: 'categoryID', foreignField: '_id', as: 'category' }};
        let JoinWithSubCategoryStage = { $lookup: { from: 'subcategories',localField: 'subcategoryID', foreignField: '_id', as: 'subcategory' }};
        let JoinWithProductDetailsStage = { $lookup: { from: 'productdetails',localField: 'productDetailID', foreignField: '_id', as: 'details' }};
        let JoinWithUserStage = { $lookup: { from: 'users',localField: 'userID', foreignField: '_id', as: 'user' }};


        let UnWindBrandStage = {$unwind:'$brand'}
        let UnwindCategoryStage = {$unwind: '$category'}
        let UnwindSubCategoryStage = {$unwind: '$subcategory'}
        let UnwindDetailsStage = {$unwind: '$details'}
        let UnwindUserStage = {$unwind: '$user'}

        let ProjectionStage = {$project: {'brand._id':0, 'category._id': 0, 'subcategory.categoryID': 0 , 'user._id':0, 'subcategory._id': 0, 'category.createdAt': 0, 'category.updatedAt': 0, 'details.updatedAt': 0, 'details.createdAt': 0, 'user.createdAt': 0,'user.updatedAt': 0, }}

        let data = await ProductModel.aggregate([
            MatchProductStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            JoinWithSubCategoryStage,
            JoinWithProductDetailsStage,
            JoinWithUserStage,
            
            UnWindBrandStage,
            UnwindCategoryStage,
            UnwindSubCategoryStage,
            UnwindDetailsStage,
            UnwindUserStage,
            ProjectionStage
        ])
        res.status(200).json({status: "success", data: data})
    }catch(err){
        res.status(400).json({status:"fail",data:err.toString()})

    }
}
exports.deleteUserproduct = async(req,res)=>{
    try{
        let productId = req.body.productId
        let productDetailId = req.body.productDetailId
        await ProductModel.deleteOne({_id:productId})
        await ProductDetailsModel.deleteOne({_id: productDetailId})

        res.status(200).json({ status: "success", message: "Product and its details deleted successfully" });

    }catch(err){
        res.status(400).json({status:"fail",data:err.toString()})

    }
}
// product Searching
exports.searchProductbyKeyword = async(req,res)=>{
    try{
        let SearchRegex = {$regex: req.params.keyword, "$options": 'i'}
        let SearchParams = [{title: SearchRegex}, {shortDes: SearchRegex}]
        let SearchQuery = {$or: SearchParams}
        let MatchStage = {$match: SearchQuery}

        let JoinWithBrandStage = {$lookup:{from:'brands', localField:'brandID',foreignField: '_id', as:'brand'}}        
        let JoinWithCategoryStage = { $lookup: { from: 'categories',localField: 'categoryID', foreignField: '_id', as: 'category' }};
        let JoinWithSubCategoryStage = { $lookup: { from: 'subcategories',localField: 'subcategoryID', foreignField: '_id', as: 'subcategory' }};
        let JoinWithProductDetailsStage = { $lookup: { from: 'productdetails',localField: 'productDetailID', foreignField: '_id', as: 'details' }};


        let UnWindBrandStage = {$unwind:'$brand'}
        let UnwindCategoryStage = {$unwind: '$category'}
        let UnwindSubCategoryStage = {$unwind: '$subcategory'}
        let UnwindDetailsStage = {$unwind: '$details'}

        let ProjectionStage = {$project: {'brand._id':0, 'category._id': 0, 'subcategory.categoryID': 0 , 'user._id':0, 'subcategory._id': 0, 'category.createdAt': 0, 'category.updatedAt': 0, 'details.updatedAt': 0, 'details.createdAt': 0, }}

        let data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            JoinWithSubCategoryStage,
            JoinWithProductDetailsStage,
            
            UnWindBrandStage,
            UnwindCategoryStage,
            UnwindSubCategoryStage,
            UnwindDetailsStage,
            ProjectionStage
        ]) 
        res.status(200).json({status: "success", data: data})
    }catch(err){
        res.status(400).json({status:"fail",data:err.toString()})

    }
}

// exports.AllProduct = async(req,res)=>{
//     try{

//         res.status(200).json({status: "success", data: result})
//     }catch(err){
//         res.status(400).json({status:"fail",data:err.toString()})

//     }
// }