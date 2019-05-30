/*

keystone.js file is the launch file for Keystone:
 it defines general configuration options, initialises 
 Keystone, and starts your application server.
**/

var keystone = require('keystone');



// Adding a new page view
// New properties for our routes

// views: folder location relative to keystone.js
// view engine: A template engine for keystone to use to render view files.
// This will be pug

keystone.init({
  'cookie secret': 'secure string goes here',
  	'name': 'keystoneCMS',
  	'user model': 'User',
  	'auto update': true,
  	'auth': true,
  	views: 'template/views/',
  	'view engine': 'pug',
});

// you will need to install pug via NPM before you can run this file
// with node

// in the command line run: npm install --save pug

keystone.import('models');

// finally add a line to tell keystone where you plan to define your routes
keystone.set('routes', require('./routes')); // we will create a folder name routes later....

keystone.start();