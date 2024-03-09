const express = require("express");
require('dotenv').config();
const cors = require("cors");
const logger = require("morgan");
const dbConnect = require("./src/config/database");
const authRoute = require("./src/routes/authRoute");
const settingRoute = require("./src/routes/settingRoute");
const locationRoute = require("./src/routes/locationRoute");

dbConnect();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));
app.use(cors());
app.use(logger("dev"));


const PORT = 5500;

app.use("/api", authRoute)
app.use("/api/settings", settingRoute)
app.use("/api/location", locationRoute)


const server = app.listen(PORT, () =>
    console.log(`Server Connected to port ${PORT}`)
);

process.on("unhandledRejection", (err) => {
    console.log(`An error occurred: ${err.message}`);
    server.close(() => process.exit(1));
});