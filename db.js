const mongoose = require('mongoose');

const connectDB = async () => {

    try {
        
        await mongoose.connect('mongodb+srv://bharath34:upskill34@cluster0.czlha.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

        console.log("Connected to MongoDB");

    } catch (error) {
        console.log("Error connecting");
    }

}

module.exports = connectDB;

