/**
 * Created by Christian on 2016-08-20.
 */

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

module.exports = middleware;