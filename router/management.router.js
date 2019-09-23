var express = require('express');
var multer  = require('multer')
var validate = require('../middleware/validate')
var controller = require('../controller/management.controller')
var authMiddleware = require('../middleware/auth.middleware')
var router = express.Router();

var upload = multer({ dest: 'public/uploads/' })


router.get('/management', controller.management);

router.get('/user', controller.user);

router.get('/table', controller.table);

router.get('/table/:id', controller.delete);

router.post('/user', 
	upload.single('avatar'),
	validate.postCreate,
	controller.postCreate);


module.exports = router;