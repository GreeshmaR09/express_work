const express=require("express")
const router=express.Router()
router.route("/").get((req,res)=>{
    res.status(200).json({
        "message":"get all contact"
    })
}).post((req,res)=>{
    res.status(200).json({
        "message":`Created contact ${req.body.message}`
    })
})
router.route("/:id").put((req,res)=>{
    res.status(200).json({
        "message":`updated for ${req.params.id}`
    })
})
router.route("/:id").delete((req,res)=>{
    res.status(200).json({
        "message":`Deleted for ${req.params.id}`
    })
})

module.exports=router
