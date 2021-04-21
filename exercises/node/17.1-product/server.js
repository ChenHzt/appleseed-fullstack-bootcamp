const express = require("express");
const Product = require("./index");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


app.get("/products", async (req, res) => {
	try {
        const filters={};
        filters["details.price"] = {};
        if(req.query.active) filters.isActive = req.query.active;
        if(req.query.min_price) filters['details.price'].$gt = parseInt(req.query.min_price);
        if(req.query.max_price) filters['details.price'].$lt = parseInt(req.query.max_price);
        console.log(filters);
		const products = await Product.find(filters);
		// const products = await Product.find({isActive:req.query.active, "details.price":{$gt: req.query.min_price, $lt:req.query.max_price}});
		res.send(products);
	} catch (e) {
        console.log(e.message);
		res.status(500).send();
	}
});

app.get("/products/:id", async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		res.send(products);
	} catch (e) {
		res.status(404).send(`user with id ${req.params.id} doesn't exists`);
	}
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});