const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    categoryID:{type:mongoose.Schema.Types.ObjectId,required:true},
    subCategoryName:{type:String, required:true},
    subCategoryImg:{type:String, required:true},
},{timestamp: true, versionKey: false}
)

const SubCategoryModel = mongoose.model('subCategories', DataSchema)

module.exports = SubCategoryModel