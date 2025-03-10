const express = require('express')
const cors=require('cors')
const connectDB=require("./config/db")
const app =express()

app.use(express.json())
app.use(cors())

connectDB()

app.use("/auth",require("./routes/authRoutes"))
app.use("/cart",require("./routes/cartRoutes"))

app.get('/',(req,res)=>{
    res.send("Getting the server")
})

const port =5000

app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})
