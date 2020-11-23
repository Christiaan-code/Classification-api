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
const classRoute = require("./routes/classify");

//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/posts", postsRoute);
app.use("/users", usersRoute);
app.use("/classify", classRoute);

function authenticateToken(req, res, next) {}

//Routes

// app.post("/loginss", (req, res) => {
// 	//Authenticate user

// 	const username = req.body.username;
// 	const user = { name: username };

// 	const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
// 	res.json({ accessToken: accessToken });
// });

//Connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
	console.log("Connected to db");
});

//Listening
app.listen(4000);
