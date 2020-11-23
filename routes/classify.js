const router = require("express").Router();
const Classify = require("../models/ClassData");
const mongoose = require("mongoose");

//Routes
//Gets back all posts
router.get("/", async (req, res) => {
	try {
		const classData = await Classify.find();
		res.json(classData);
	} catch (err) {
		res.json({ message: err });
	}
});

//Submits post
router.post("/", async (req, res) => {
	const post = new Classify({
		title: req.body.title,
		description: req.body.description,
	});

	console.log(req.body);
	try {
		const savedPost = await post.save();
		res.json(savedPost);
	} catch (err) {
		res.json({ message: err });
	}
});

const classify = (data) => {
	const race = ["white", "black", "indian", "asian"];
	const gender = ["male", "female", "transgender", "other"];
	const religion = [
		"christian",
		"athiest",
		"hindu",
		"muslem",
		"jew",
		"catholic",
	];
	const id = /^(((\d{2}((0[13578]|1[02])(0[1-9]|[12]\d|3[01])|(0[13456789]|1[012])(0[1-9]|[12]\d|30)|02(0[1-9]|1\d|2[0-8])))|([02468][048]|[13579][26])0229))(( |-)(\d{4})( |-)(\d{3})|(\d{7}))$/;
	const cellNumber = /^((?:\+27|27)|0)(=60|61|71|81|72|82|73|83|74|84|75|85|76|86|79)(\d{7})$/;
	const maritalStatus = ["single", "married", "divorced", "widowed"];
	const email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	const address = /^\d+\s[A-z]+\s[A-z]+/;

	data = data.map((item) => {
		if (age.includes(item.toLowerCase())) return (item = [item, "Age"]);
		else if (race.includes(item.toLowerCase()))
			return (item = [item, "Race"]);
		else if (gender.includes(item.toLowerCase()))
			return (item = [item, "Race"]);
		else if (religion.includes(item.toLowerCase()))
			return (item = [item, "Race"]);
		else if (id.includes(item.toLowerCase()))
			return (item = [item, "Race"]);
		else if (cellNumber.includes(item.toLowerCase()))
			return (item = [item, "Race"]);
		else if (maritalStatus.includes(item.toLowerCase()))
			return (item = [item, "Race"]);
		else if (email.includes(item.toLowerCase()))
			return (item = [item, "Race"]);
		else if (address.includes(item.toLowerCase()))
			return (item = [item, "Race"]);
	});
};

module.exports = router;
