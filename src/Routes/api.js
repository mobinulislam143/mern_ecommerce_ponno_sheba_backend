const express = require('express');
const router = express.Router();

const WishListController = require('../controller/WishListController')
const ProductController = require('../controller/ProductController')
const CartListController = require('../controller/CartListController')
const UserController = require('../controller/UserController')
const InvoiceController = require('../controller/InvoiceController')
const AuthVerification = require('../middleware/AuthVerification')

//product
router.get('/AllProduct', ProductController.AllProduct)
router.get('/ProductBrandList', ProductController.ProductBrandList)
router.get('/ProductCategoryList', ProductController.ProductCategoryList)
router.get('/ProductSliderList', ProductController.ProductSliderList)
router.get('/ProductListByBrand/:BrandID', ProductController.ProductListByBrand)
router.get('/ProductListByCategory/:CategoryID', ProductController.ProductListByCategory)
router.get('/ProductListByRemark/:Remark', ProductController.ProductListByRemark)
router.get('/ProductListBySmilier/:CategoryID', ProductController.ProductListBySmilier)
router.get('/ProductDetails/:ProductID', ProductController.ProductDetails)

router.get('/ProductReviewList/:ProductID', ProductController.ProductReviewList)
router.get('/allreview', ProductController.allReview)
router.post('/createReview', ProductController.createReview)

router.get('/ProductListByKeyword/:Keyword', ProductController.ProductListByKeyword)
 

router.post('/ProductListByFilter', ProductController.ProductListByFilter)

//user manage
router.get('/userOtp/:email', UserController.UserOtp)
router.get('/VerifyLogin/:email/:otp', UserController.VerifyLogin)
router.get('/UserLogout',AuthVerification, UserController.UserLogout)
//profile create
router.post('/createProfile', AuthVerification, UserController.CreateProfile)
router.post('/UpdateProfile', AuthVerification, UserController.UpdateProfile)
router.get('/ReadProfile', AuthVerification, UserController.ReadProfile)

//wish list
router.post('/saveWishList', AuthVerification, WishListController.SaveWishList)
router.post('/RemoveWishList', AuthVerification, WishListController.RemoveWishList)
router.get('/WishList', AuthVerification, WishListController.WishList)

//cartList 
router.get('/CartList', AuthVerification, CartListController.CartList)
router.post('/SaveCartList', AuthVerification, CartListController.SaveCartList)
router.post("/UpdateCartList/:CartID", AuthVerification, CartListController.UpdateCartList)
router.post("/RemoveCartList", AuthVerification, CartListController.RemoveCartList)


// Create invoice

router.get('/CreateInvoice', AuthVerification, InvoiceController.CreateInvoice )
router.get('/InvoiceListService', AuthVerification, InvoiceController.invoiceList)
router.get('/invoiceProductList/:invoice_id', AuthVerification, InvoiceController.invoiceProductList)

router.post('/PaymentSuccess/:trxID', InvoiceController.PaymentSuccess)
router.post('/PaymentFail/:trxID', InvoiceController.PaymentFail)
router.post('/PaymentIPN/:trxID', InvoiceController.PaymentIPN)








module.exports = router