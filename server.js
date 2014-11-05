
var express = require('express'),
  routes = require('./routes'),
  api = require('./routes/api'),
  http = require('http'),
  path = require('path');
  // bodyParser = require('bodyParser')



var app = module.exports = express();

/**
 * Configuration
 */

// all environments

// app.engine('.html', require('html'));

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/app');
app.set('view engine', 'html');
// app.set('view engine', 'jade');
// app.engine('html', require('ejs').renderFile);


// app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, '/app')));
// app.use(app.router);


/**
 * Routes
 */

// serve index and view partials
app.get('/', routes.index);
// app.get('/partials/:name', routes.partials);

// JSON API
// app.get('/api/name', api.name);

// redirect all others to the index (HTML5 history)
// app.get('/home', routes.index);
// app.get('/game', routes.index);
// app.get('/highscore', routes.index);


/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});