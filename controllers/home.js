var description = require('../models/productsDescription');
var lookbook = require('../models/lookbook');

exports.index = (req, res) => {
	res.render('home', {
		title: 'Home',
		lookbook: lookbook.src
	});
};

exports.info = (req, res) => {
	res.render('info', {
		title: 'Info'
	});
};

exports.stockists = (req, res) => {
	res.render('stockists', {
		title: 'Stockists'
	});
};

exports.products = (req, res) => {
	res.render('products', {
		title: 'Products',
		products: description.products
	});
};

// reqName - req.url used as id to get specific product
exports.product = (req, res) => {
	var reqName = req.url.match(/\/([^\/]+)\/?$/)[1];
	var obj = description.products[reqName];
	res.render('product', {
		title: obj.name,
		product: obj
	});
};

exports.lookbook = (req, res) => {
	res.render('lookbook', {
		title: 'Lookbook',
		lookbook: lookbook.src
	});
};
