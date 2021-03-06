var path = require('path');
var users = require('./../controllers/friends.js');
var questions = require('./../controllers/questions.js');

module.exports = function(app){
  app.get('/users', users.index);
  app.get('/users/:id', users.show);
  app.post('/users', users.create);
  app.post('/questions', questions.create);
  app.get('/questions', questions.index);
  app.get('/questions/:id', questions.show);
  // app.put('/friends/:id', friends.update);
  // app.delete('/friends/:id', friends.delete);
};
