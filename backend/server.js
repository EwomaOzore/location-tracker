const express = require("express");
require('dotenv').config();
const cors = require("cors");
const logger = require("morgan");
const dbConnect = require("./src/config/database");
const authRoute = require("./src/routes/authRoute");
const settingRoute = require("./src/routes/settingRoute");

dbConnect();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));
app.use(cors());
app.use(logger("dev"));


const port = process.env.PORT || 3000;

app.use("/api", authRoute)
app.use("/api/settings", settingRoute)


app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})