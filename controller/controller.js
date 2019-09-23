var db = require('../db');
var shortid = require('shortid');
var Product = require('../models/product.model');
var Item = require('../models/item.models');



module.exports.index = async function(req, res){
	var items = await Item.find();
	var page = parseInt(req.query.page) || 1;
	var perPage = 9;

	var start = (page - 1) * perPage;
	var end = page * perPage;
	res.render('item/index', {
			items:items.slice(start, end)
		})
}

module.exports.search = function(req, res){
	var q = req.query.q;
	var searchIem = db.get('items').value().filter(function(item){
		return item.name.toLowerCase().indexOf(q.toLowerCase()) !==-1;
	})
	res.render('item/index',{
		items:searchIem
	})
}
module.exports.create = function(req, res){
	res.render('item/create/index')
}


module.exports.id = async function (req, res){
	var id = req.params.id;

	var item = await Item.findById(id, function(error, enddoe){
		if(error){
			console.log('id wdwed');
		}else{
			res.render('item/view',{
				item:enddoe.text,
				name:enddoe.name
			})
		}
	});
}


module.exports.product = async function(req, res){
	var products = await Product.find();
		res.render('item/product/index',{
			products:products
		})
}

