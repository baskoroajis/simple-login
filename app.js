var express = require("express");
var path = require("path");
var bodyParser = require("body-parser")

var app = express();
// app.use(express.static(path.join(__dirname,"/../public")));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.listen(7777, function(){
    console.log("Started listening on port", 7777);
})


app.post('/signin', function(req,res){
    var user_name = req.body.email;
    var password = req.body.password;

    if (user_name == 'admin' && password == 'admin'){
        res.send('success');
    }
    else{
        res.send('failure');
    }
})