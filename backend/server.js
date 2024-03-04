const express = require("express");
require('dotenv').config();
const cors = require("cors");
const logger = require("morgan");
const dbConnect = require("./src/config/database");
const authRoute = require("./src/routes/authRoute");

dbConnect();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(logger("dev"));


const port = process.env.PORT || 3000;

app.use("/api", authRoute)


app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})