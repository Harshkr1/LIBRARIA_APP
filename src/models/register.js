//now here i will be defining schema here 

//importing mongo db
const mongoose = require("mongoose");

const StudentSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    }
})

//Now we need to create a collection

//creating a new class for that

//Student database ke andr ye collection hai jismei data saved Rahegi humari 
const Register= new mongoose.model("Register",StudentSchema);

//Now Exporting the same 
module.exports=Register;