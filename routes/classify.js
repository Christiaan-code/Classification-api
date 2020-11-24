const router = require("express").Router();
const Classify = require("../models/ClassData");
const mongoose = require("mongoose");

//Routes

//Submits post
router.post("/", async (req, res) => {
	const data = [
		"White",
		"Male",
		"Christian",
		"9903235278088",
		"Single",
		"christiaandpreez@gmail.com",
	];

	
	try {
		// data = req.body.data;
		const returnData = classify(data);
		console.log(returnData);
		res.send(returnData);
	} catch (error) {
		res.status(400).send(error);
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
		if (race.includes(item.toLowerCase())) return (item = [item, "Race"]);
		else if (gender.includes(item.toLowerCase()))
			return (item = [item, "Gender"]);
		else if (religion.includes(item.toLowerCase()))
			return (item = [item, "Religion"]);
		else if (id.test(item)) return (item = [item, "ID"]);
		else if (cellNumber.test(item)) return (item = [item, "Cell Number"]);
		else if (maritalStatus.includes(item.toLowerCase()))
			return (item = [item, "Marital Status"]);
		else if (email.test(item)) return (item = [item, "Email"]);
		else if (address.test(item)) return (item = [item, "Address"]);
	});
	return data;
};

module.exports = router;
