const express = require("express");
const dotenv = require('dotenv');
const { chats } = require("./data/data");
const connectDB = require("./Config/Db");
const colors = require("colors"); // Correct the typo
const userRoutes = require("./routes/userRoutes"); // Ensure this path is correct

dotenv.config();
connectDB();
const app = express();


app.use(express.json()); // JSON data accept

app.get("/", (req, res) => {
    res.send("API is Running Successfully");
});

app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Started on PORT ${PORT}`.yellow.bold);
    // server.js or index.js
console.log('MONGO_URI:', process.env.MONGO_URI); // This should print the MongoDB URI

});
