module.exports.postCreate = function(req, res, next){
	var errors = [];

	if (!req.body.name){
		errors.push('Name is requiresd');
	}

	if (!req.body.text){
		errors.push('Phone is requiresd');
	}

	if(errors.length){
		res.render('management-page/user', {
			errors:errors,
			values:req.body
		});
			return;
	}
	next();
};