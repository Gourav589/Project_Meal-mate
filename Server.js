const express=require('express');
const mongoose=require('mongoose')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database');
const User = require("./model/user")

// Enable CORS for specific origins
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from localhost:3000
  credentials: true, // Allow cookies and authentication headers
}));
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(bodyParser.json()); 

app.get("/",(req,res)=>{res.send ("This is ID pswd")} )

dbConfig();

app.post('/api/v1/login', async (req, res) => {
    console.log(req.body)
    try {
      const { email, password} = req.body;
      console.log(email,"->",password);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.post('/api/v1/register', async (req, res) => {
    try {
      const { email, password,confirmpassword,username} = req.body;
      console.log(email,"->",password,confirmpassword,username);
      const newUser = new User({
        username,password,email
      })

      await newUser.save();
      console.log("Successfully saved");
      res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.listen(8800,()=>{console.log("server__")});


