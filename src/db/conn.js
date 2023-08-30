
const mongoose = require("mongoose");
const DB='mongodb+srv://harshkr70:harshkumar@cluster0.k9bhhix.mongodb.net/libraryregistration?retryWrites=true&w=majority'

mongoose.connect(DB).then(()=>{
    //if connection successfull then ye wali code
    console.log(`Connection Successfull`);
}).catch((e)=>{
    //to catch any error in connection here 
    console.log(e.message);
})



