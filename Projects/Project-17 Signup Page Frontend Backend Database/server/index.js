const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const User = require("../models/User");

const app=express();
app.use(cors(
    {origin: "http://localhost:5173", }
));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/project17" ,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.post("/signup", async(req,res) => {
    const{username,email,password} = req.body;
    try{
        const user =  new User({ username, email,password});
        await user.save();
        res.status(201). send("User registered");
    }catch(err){
        res.status(400).send("Error saving user");
    }
});

app.post("/login", async(req,res) => {
    const{email,password} = req.body;
    try{
        const user = await User.findOne({email, password});
        if(user){
        res.status(200).send("Login successful;")
        }
        else{
            res.status(401).send("Invalid credentials");
        } 
    }
    catch(err){
        res.status(400).send("Login failed")
    }
});

app.listen(5000, ()=>{
    console.log("Server running at http://localhost:5000");
});