const express=require("express")
const dotenv=require("dotenv").config()
const contactrouter=require("./Router/ContactRouter")
const app=express()
app.use(express.json())
const port=process.env.PORT||3000
app.listen(port,()=>console.log(`server is running on ${port}`))
/*app.get("/api/contacts",(req,res)=>{
    res.status(200).json({
        "message":"get all contact"
    })
})
*/
app.use("/api/contacts",contactrouter)
