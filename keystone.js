/*

keystone.js file is the launch file for Keystone:
 it defines general configuration options, initialises 
 Keystone, and starts your application server.
**/

var keystone = require('keystone');

keystone.init({
  'cookie secret': 'secure string goes here',
  	'name': 'keystoneCMS',
  	'user model': 'User',
  	'auto update': true,
  	'auth': true,
});

keystone.import('models');
keystone.start();