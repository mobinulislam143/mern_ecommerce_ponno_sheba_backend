exports.AllProduct = async(req,res)=>{
    try{

        res.status(200).json({status: "success", data: "This is Mahi"})
    }catch(err){
        res.status(400).json({status:"fail",data:"product create failed"})

    }
}