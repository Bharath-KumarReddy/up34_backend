const express = require("express");
const cors = require("cors");
const connectDB = require("./db.js");
const Users = require("./model/userdetail.js");
const app = express();

app.use(express.json());
app.use(cors());
const port=3001;
connectDB();



app.post('/api/users',async (req,res) => {
    
      try {
        
        const {name,email,number} = req.body;

        const existing = await Users.findOne({email});

        if(existing) {
            return res.status(400).json({message: 'User already exists'})
        }

         const user = new Users({
            name,
            email,
            number
         })

         await user.save();

         res.status(201).json({message: 'User added successfully',user})

      } catch (error) {
        
      }
 })


app.listen(port ,() =>{
    console.log(`Server is running on port ${port}`);
})