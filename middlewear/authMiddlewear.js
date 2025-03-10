const jwt=require("jsonwebtoken")

const authMiddlewear=(req,res,next)=>{
    const authHeader=req.header("Authorization")

    if(!authHeader)return res.status(401).json({message:"Ivalid Authorization"})

    const token=authHeader.split(" ")[1]
    if(!token)return res.status(401).json({message:"no token provided"})

try{
    const verified=jwt.verify(token,process.env.JWT_SECRET)
    req.user=verified
    next()
}
catch(err){
    return res.status(401).json({message:"Token is not valit"})
}
}
module.exports=authMiddlewear;