const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose")
var bodyParser = require("body-parser")
const morgan = require("morgan")
const dotenv = require("dotenv")
const userRoute = require("./routes/user")

dotenv.config(); 

app.use(bodyParser.json({limit: "50mb"}));

app.use(cors());

app.use(morgan("common"));

//Connect Database
mongoose.connect(process.env.MONGOODB_URL, {
    dbName: 'fitness_x'
})
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1); 
    });


//Route
app.use("/api/user", userRoute)

app.listen(3000, '0.0.0.0', () => {
    console.log("Server is running on http://0.0.0.0:3000");
});