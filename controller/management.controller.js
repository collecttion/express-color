var Item = require('../models/item.models');

module.exports.management = function(req, res){
	res.render('management-page/management')
}

module.exports.user = function(req, res){
	res.render('management-page/user')
}


module.exports.table = async function (req, res){
	var item = await Item.find();
	res.render('management-page/table',{
		item:item
		})
}
module.exports.delete = async function(req, res){
	var id = req.params.id;
	var item = await Item.findByIdAndDelete(id, function(err){
		if(err){
			console.log("Err deleteting ebook");
			console.log(err);
		}else{
			console.log("delete ebook" + id);
			res.redirect('/management-page/table')
		}
	});
}

module.exports.postCreate = async function(req, res){

	var item = new Item(req.body);

	var items = await Item.find();
	console.log(item)
	
	 item.save(function(error){	
	 	if (error) return req.json({ item : item});
	 })
	res.redirect('/management-page/table');	
}
