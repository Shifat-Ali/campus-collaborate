module.exports = async(req,res,next)=>{
    console.log("user authed")
    next();
}