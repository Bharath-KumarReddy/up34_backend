const mongoose = require('mongoose');

const connectDB = async () => {

    try {
        
        await mongoose.connect('mongodb+srv://bharath34:upskill34@cluster0.czlha.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log("Connected to MongoDB");

    } catch (error) {
        console.log("Error connecting");
        console.error(error);
    }

}

module.exports = connectDB;

