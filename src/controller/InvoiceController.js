const {CreateInvoiceService,PaymentFailService,
    PaymentSuccessService,InvoiceListService, InvoiceProductListService,PaymentIPNService } = require('../services/InvoiceService')

exports.CreateInvoice = async(req, res) => {
    let result = await CreateInvoiceService(req)
    return res.status(200).json(result)
}

exports.invoiceList = async(req, res) =>{
    let result = await InvoiceListService(req)
    return res.status(200).json(result)
}
exports.invoiceProductList = async(req, res) =>{
    let result = await InvoiceProductListService(req)
    return res.status(200).json(result)
}
exports.PaymentSuccess = async(req, res) =>{
    let result = await PaymentSuccessService(req)
    return res.status(200).json(result)
}

exports.PaymentFail = async (req, res) =>{
    let result = await PaymentFailService(req)
    return res.status(200).json(result)
}
exports.PaymentIPN = async (req, res) =>{
    let result = await PaymentIPNService(req)
    return res.status(200).json(result)
}