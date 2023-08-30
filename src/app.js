const express = require ("express");
const path = require("path");
//we are ensuring that path is required here 
const app= express();
const hbs= require("hbs");
const Register=require("./models/register")
require("./db/conn");
const port = process.env.PORT || 3000;
//now to tell express JS that we need to use the folder that we have created
//express mein static file create kia hua hai humne 
const static_path=path.join(__dirname,"../public")
const template_path=path.join(__dirname,"../template/views")
const partials_path=path.join(__dirname,"../template/partials")

app.use(express.json()); 


//to render images
app.use(express.static('public'));
app.use('/images', express.static('images'));
app.use(express.static('images'));


//this means that what ever we are inserting usko we want to get here 
app.use(express.urlencoded({extended:false}))

app.use(express.static(static_path))

//now we are setting the view engine here 
//which we will use to create the landing page here
//this sets that .hbs wali  page will be our landing page 
app.set("view engine", "hbs")
//now here since we have already selected that hbs is view engine here
app.get("/",(req, res) =>{
    //yahan pe we are telling ki konsi render krni hai file
    res.render("login")
})

app.get("/register",(req,res)=>{
    res.render("register");
})

//now we need to make this same register method as post method here 
app.post("/register", async (req,res)=>{

    //whenever using async function use try and catch alwasys
        try{
            const password=req.body.password;
            const cpassword=req.body.confirmpassword;
            if(password===cpassword)
            {
                const registerStudent= new Register({
                    username : req.body.username,
                    password : req.body.password,
                    confirmpassword : req.body.confirmpassword
                })

               const registered= await registerStudent.save();

                res.status(201).render("success");
            }
            else{
                res.send("Password are not matching ")
            }
    }
    catch(error)
    {
        //error pe kya aega
        res.status(400).send(error);
    }

})

app.get("/services",(req,res)=>{
    res.render("services");
})

app.get("/viewblog",(req,res)=>{
    res.render("viewblog");
})
app.get("/createblog",(req,res)=>{
    res.render("createblog");
})
app.get("/success",(req,res)=>{
    res.render("success");
})

app.get("/blogpage",(req,res)=>{
    res.render("blogpage");
})

app.get("/login",(req,res)=>{
    res.render("login");
})
app.get("/contact",(req,res)=>{
    res.render("contact");
})
app.get("/books",(req,res)=>{
    res.render("books");
})
app.get("/news",(req,res)=>{
    res.render("news");
})
app.get("/index",(req,res)=>{
    res.render("index");
})

//now the models we defined for the databse we need to create a model for the same 

//nwo to make login page work

//since we have get method for login now we need a post method for login here
app.post("/login", async(req,res)=>{
//this we need to do to get the data from teh user into our system here 
    try{
        const username=req.body.username;
        const password=req.body.password;
        //this is the way we have read the data from there 
       const userdata= await  Register.findOne({username:username});
        
       if(userdata.password===password)
       {
        //this is to do if the password matches here then we will be rendered at landing
        //homepage
        res.status(201).render("index")
       }
       else{
        res.send("Login Credentials Invalid ")
       }
        

    }
    catch(error)
    {
        res.status(400).send("invalid USERNAME / USN")
    }
})



//views hi hone chahie view file ka name to create views here 
app.listen(port , ()=>{
    console.log(`server is running at port number ${port}`);
})




