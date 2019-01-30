
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
router.get('/firstnonrepeating/:stringValue', function (req, res) {
    var stringVal = req.params.stringValue;
    console.log(stringVal);
    var sendres = true;
    for (var i = 0; i < stringVal.length; i++) {
        var c = stringVal.charAt(i).toLowerCase();
        if (stringVal.toLowerCase().indexOf(c) == i && stringVal.toLowerCase().indexOf(c, i + 1) == -1) {
            sendres = false;
            res.send(c);
            break;
        }
    }
    if(sendres){
        res.send ("No repeating character");
    }

});

module.exports = router;
