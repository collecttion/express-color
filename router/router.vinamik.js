var express = require('express');
var multer  = require('multer')
var controller = require('../controller/controller')
var validate = require('../middleware/validate')
var authMiddleware = require('../middleware/auth.middleware')

var router = express.Router();

var upload = multer({ dest: 'public/uploads/' })

router.get('/', controller.index);

router.get('/search', controller.search);

router.get('/create', authMiddleware.requireAuth, controller.create);

router.get('/product', controller.product);



router.get('/:id', controller.id);









module.exports = router;