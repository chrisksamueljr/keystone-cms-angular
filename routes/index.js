/**

routes/index.js

The Keystone importer gives us a function 
that allows us to reduce a folder and its 
contents to an object with the same nesting.

**/

function routeFunction(req, res) {
  res.render('index');
}

module.exports = function (app) {
  app.get('/', routeFunction);
};


// For each route we want, we add a new path and route function. 
// In the example above, the path '/' (the default homepage) will be handled by routeFunction().

var keystone = require('keystone');
var importRoutes = keystone.importer(__dirname);

var routes = {
  views: importRoutes('./views'),
};

exports = module.exports = function (app) {
  app.get('/', routes.views.index)
};
