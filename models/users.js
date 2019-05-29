/**
User.js

You are going to start  by creating a new list: 

**/



var keystone = require('keystone');


// We are creating using a constructor for our User Model
var User = new keystone.List('User');

// We are adding three fields to our model

// For more information on what key offers visit : https://keystonejs.com/api/field
User.add({
  displayName: { type: String }, 
  password: { type: keystone.Field.Types.Password }, // The password field is using a Keystone-specific field type. 
  email: { type: keystone.Field.Types.Email, unique: true }, // The email field is similar to password in that it is using another Keystone-specific field type. 
});


// Add to gain access into the admin UI
// To learn more about virtuals and other schemas visit 
// https://keystonejs.com/api/list/schema
User.schema.virtual('canAccessKeystone').get(function () {
  return true;
});

// Will add adefault columns to display
User.defaultColumns = 'id, displayName, email'


// Before we can use our Model we need to add 
// User.register(); below our code
User.register();
