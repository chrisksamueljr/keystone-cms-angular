/**
before you can launch your app. You need to have an 
initial user in your database.
You can do this through an update script, 
which Keystone will run on startup.
**/



exports.create = {
  User: [
    {
      displayName: 'Battler',
      email: 'battler@umine.co',
      password: 'gamemaster',
    },
  ],
};



// NOTE: Please Advised

// You will likely end up committing your update 
// scripts to your project, so you should not include
// sensitive information. Any passwords added in an update
// script should be manually changed afterwards.
