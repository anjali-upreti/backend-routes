var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

//I have using path parameter but same solution
// can be done using query parameter as well.

router.get('/calculate/:num1/:num2', function productHandler(req, res) {
    var a = req.params.num1;
    var b = req.params.num2;
    var responseVal = a*b;
    res.json(responseVal);
});

module.exports = router;



