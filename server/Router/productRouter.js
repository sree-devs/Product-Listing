const express=require('express')
const productModel = require('../model/productModel')
const subcategoryModel=require("../model/subcategoryModel")
const productRouter=express.Router()


productRouter.post('/',(req,res)=>{
    console.log(req.body);
    const product=new productModel({
        category:req.body.category,
        Subcategory:req.body.subcategory,
        productname:req.body.productname,
        type:req.body.type,
        details:req.body.details
    });
    product.save()
    .then((data)=>{
        res.status(200).json({
            success:true,
            erorr:false,
            message:'sended',
            data:data
        })
    }).catch((error)=>console.log(error));
});

productRouter.get('/view-product',async function (req,res){

    try{
       
        const product  = await productModel.find()
        if(product){
            return res.status(200).json({
                success: true,
                error: false,
                details: product,

            })
        }else{
            return res.status(400).json({
                success: false,
                error: true,
                message: "No data found",
            })
        }

            
        }catch{
            return res.status(400).json({
                success: false,
                error: true,
                message: "something went wrong",
            })

        }
})

productRouter.get('/view-product/:sub',async function (req,res){

    try{
        const subcategory  = req.params.sub
        console.log(subcategory);
        const  Sub = await productModel.find({Subcategory:subcategory})
        if(Sub[0]!=undefined){
            return res.status(200).json({
                success: false,
                error: true,
                details: Sub,

            })
        }else{
            return res.status(400).json({
                success: false,
                error: true,
                message: "No data found",
            })
        }

            
        }catch{
            return res.status(400).json({
                success: false,
                error: true,
                message: "something went wrong",
            })

        }
})

productRouter.get('/view-product-type/:type',async function (req,res){

    try{
        const type  = req.params.type
        console.log(type);
        const  Sub = await productModel.find({type:type})
        if(Sub[0]!=undefined){
            return res.status(200).json({
                success: false,
                error: true,
                details: Sub,

            })
        }else{
            return res.status(400).json({
                success: false,
                error: true,
                message: "No data found",
            })
        }

            
        }catch{
            return res.status(400).json({
                success: false,
                error: true,
                message: "something went wrong",
            })

        }
})

module.exports=productRouter