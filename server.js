const express = require('express')
const cors=require('cors')
const connectDB=require("./config/db")
const app =express()

const allowedOrigins = [
    'https://ecom-frontend-indol.vercel.app',
    'https://ecom-frontend-git-main-shashank-ls-projects-5fbee625.vercel.app',
    'https://ecom-frontend-aa3e0ssqc-shashank-ls-projects-5fbee625.vercel.app'
  ];

app.use(express.json())
app.use(cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin))
       {
        callback(null, true);
      } 
      else 
      {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // Allows cookies and authentication headers if needed
  }))


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
