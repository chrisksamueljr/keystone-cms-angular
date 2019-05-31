/***
post.js
Chris Samuel

We start out with our route as much as we have
before in the Express style for a route:

***/

// Adding new packages to our route 
var keystone = require('keystone');

var Event = keystone.list('Event');



module.exports = function(req, res) {
	// the form data is located on the request
	// object that is passed in

	 if (!req.body.name || !req.body.startTime || !req.body.endTime) {
    return res.sendError('incomplete data set');
  }
  	// Adding the event to the database
  	var newEvent = new Event.model();
  		// we will add a callback to our updateItem()
  		// so we can check the error if we get one.
  	Event.updateItem(newEvent, req.body, 
  		 function (error) {
  res.locals.enquirySubmitted = true;
  if (error) res.locals.saveError = true;
  res.render('addEvent');
});

};