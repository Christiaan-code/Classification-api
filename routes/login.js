const express = require("express");
const router = express.Router();
const User = require("../models/User");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

//Gets back all users
router.get("/", async (req, res) => {
	try {
		const users = await User.find();
		res.json(users);
	} catch (err) {
		res.json({ message: err });
	}
});
//Submits user
router.post("/", async (req, res) => {
	const user = new User({
		username: req.body.username,
		password: req.body.password
	});

	console.log(req.body);
	try {
		const savedUser = await user.save();
		res.json(savedUser);
	} catch (err) {
		res.json({ message: err });
	}
});

//Specific post
router.get("/:userId", async (req, res) => {
	try {
		const user = await User.findById(req.params.userId);
		res.json(user);
	} catch (err) {
		res.json({ message: err });
	}
});

//Delete a post
router.delete("/:userId", async (req, res) => {
	try {
		const removeUser = await User.remove({ _id: req.params.userId });
		res.json(removeUser);
	} catch (err) {
		res.json({ message: err });
	}
});

//Update post
router.patch("/:userId", async (req, res) => {
	try {
		const updateUser = await User.updateOne(
			{ _id: req.params.userId },
			{ $set: { username: req.body.username } }
        );
		res.json(updateUser);
	} catch (err) {
		res.json({ message: err });
	}
});
module.exports = router;

//Log in
router.get("/:userId", async (req, res) => {
	try {
		const user = await User.findById(req.params.userId);
		res.json(user);
	} catch (err) {
		res.json({ message: err });
	}
});