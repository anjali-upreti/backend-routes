var express = require('express');
var router = express.Router();
const fs = require('fs');
const temp = require('../TempFile/demodata');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send({"status": 'Good'});
});

router.get('/read', function (req, res) {
    fs.readFile("./TempFile/demodata.json", function (err, data) {
        if (err){
            console.log('Error in reading file',err);
            res.send('Failed to read file');
        }else{
            console.log(data.toString());
            res.send(data.toString());
        }
    });
});

router.get('/write', function (req, res) {
    fs.writeFile("./TempFile/demo.txt", "Hey there! in second file 3", function(err) {
        if(err) {
            return console.log(err);
            res.send("Failed to write file");
        }else{
            console.log("The file was saved!");
            res.send("The file was saved!");
        }
    });
});

module.exports = router;



