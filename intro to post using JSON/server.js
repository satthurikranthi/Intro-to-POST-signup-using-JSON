const express = require("express");
const cors = require("cors");  
const mongoose = require("mongoose");


let app = express();
app.use(cors());
app.use(express.json());


app.post("/signup",async (req,res)=>{

    console.log(req.body);


    try{
        let newkranthi = new kranthi({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            age:req.body.age,
            email:req.body.email,
            password:req.body.password,
            mobileNo:req.body.mobileNo,
            profilepic:req.body.profilepic
        });
    
      await  kranthi.insertMany([newkranthi]);
    
        res.json({status:"success",msg:"User created successfully."})
    

    }catch(err){
        res.json({status:"failure",msg:"unable create account."})

    }

   
})



app.listen(4567,()=>{
    console.log("Listening to port 1586");
})

let kranthiSchema  = new mongoose.Schema({
    firstName:String,
    lastName:String,
    age:Number,
    email:String,
    password:String,
    mobileNo:String,
    profilepic:String,
});

let kranthi = new mongoose.model("kranthi",kranthiSchema,"kranthis");


let insertDataIntoDB = ()=>{

    try{
        let newkranthi= new kranthi({
            firstName:"kranthi",
            lastName:"satthuri",
            age:"20",
            email:"satthurikranthi@gmail.com",
            password:"anvira",
            mobileNo:"+91-9381622580",
        
        })
    kranthi.insertMany([newkranthi]);
    console.log("insert data into db successfully")
    
    

    }catch(err){
        console.log("Unable to insert data into db");

    }

};
insertDataIntoDB();

let connectToMDB = async ()=>{
    try{
        mongoose.connect("mongodb+srv://satthurikranthi:anvira@cluster0.q79l2.mongodb.net/kranthi?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Successsfully connect to MDB");
        
    }catch(err){
        console.log("Unable to connect to MDB");
        console.log(err);

    }

}

connectToMDB();