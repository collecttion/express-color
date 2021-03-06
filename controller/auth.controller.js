var db = require('../db');

module.exports.login = function(req, res){
	res.render('auth/login')
}

module.exports.postLogin = function(req, res){
	var email = req.body.email;
	var password = req.body.password;
	var user = db.get('items').find({email : email}).value();

	if (!user){
		res.render('auth/login', {
			errors:[
				'user does not exits'
			],
			values:req.body
		});
		return;
	}
	
	if (user.password !== password){
		res.render('auth/login', {
			errors:[
				'wrong password'
			],
			values:req.body
		});
		return;
	}
	res.cookie('userId', user.id);
	res.redirect('/management-page/management');
};
