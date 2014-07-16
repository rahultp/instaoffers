var express = require('express');
var path = require('path');
var http = require('http');
var fs = require('fs');
var routes = require('./routes');
var app = express();
var bodyParser = require('body-parser');
var busboy = require('connect-busboy');


// view engine setup
app.set('port',process.env.PORT || 8080);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser());
//app.use(bodyParser({uploadDir:'./uploads'}));
app.use(busboy());


if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

app.get('/',routes.home);
app.get('/app',routes.app);
app.get('/dashboard',routes.dashboard);
app.get('/dashboard/compose',routes.dashboard.compose);
app.get('/dashboard/offers',routes.dashboard.offers);
app.get('/dashboard/offers/:id',routes.dashboard.offers.read);
//app.get('/offers/image/:id',routes.offers.image.read);
app.post('/dashboard/offers/add',routes.dashboard.offers.add);

http.createServer(app).listen(app.get('port'),function(){
});
