/**
 * Created by Christian on 2016-08-20.
 */
var express = require('express');
var app = express();
var port = 3000;

var middleware = {      //next is used to proceed with the next step, hence 'middleware'
    requireAuthentication: function(req, res, next) {
        console.log("private route hit!");
        next();
    },
    logger: function (req, res, next) {
        console.log('Request: '+ new Date().toString() +' ---- '+ req.method + ' ' + req.originalUrl);
        next();
    }
};

app.use(middleware.logger);  //order of definition very important

app.use(express.static(__dirname + '/public')); //directly at the root of the server, i.e. /, defaults to index

app.get('/about', middleware.requireAuthentication, function(req, res){   //route to the file, function
    //req user input, cookies, data
    //res, data back to user
    res.send('About us');
});


app.listen(port, function(){
    console.log('Express server started on port '+ port+ '!')
});