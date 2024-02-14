class Errorhandler extends Error{
    constructor(message,statuscode){
        super(message);
        this.statuscode= statuscode;

    }
}
export const errorMiddleware = (err,req,res,next)=> { //errror middleware contains 4 parameters that is err,req,res and next
    err.message=err.message|| "Internal Server error";
    err.statuscode=err.statuscode|| 500;
    if(err.name==="CaseError"){
        const message= `REsource not found .Invalid ${ err.path}`
        err= new Errorhandler(message,400)
         
    } 
    if(err.name===11000){  //110000 error occurs when we have a problem with the databse 
        const message= `Duplicate ${Object.keys(err.keyValue)} Entered `
        err= new Errorhandler(message,400)
         
    }
    if(err.name==="JsonWebTokenError"){
        const message= `Json web token is invalid`;
        err= new Errorhandler(message,400)
         
    }
    if(err.name==="TokenExpiredError"){
        const message= `Json web token is expired TRY Again `
        err= new Errorhandler(message,400)
         
    }
    return res.status(statuscode).json({
        success:false,
        message:err.message,
    })
} 
export default Errorhandler;