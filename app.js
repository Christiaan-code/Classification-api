const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv/config");

//Import routes
const postsRoute = require("./routes/posts");
const usersRoute = require("./routes/login");

//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/posts", postsRoute);
app.use("/users", usersRoute);

//Routes
app.get("/", (req, res) => {
	res.send("We are on home");
});

//Connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
	console.log("Connected to db");
});

//Listening
app.listen(4000);
