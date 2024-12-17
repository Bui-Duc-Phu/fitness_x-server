const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGOODB_URL, {
            dbName: 'fitness_x',
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
        });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1); 
    }
};

module.exports = connectToDatabase;
