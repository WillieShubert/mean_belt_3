console.log("server routes");

var users = require('./../controllers/usersController.js');
var appointments = require('./../controllers/appointmentController.js');

module.exports = function(app){
  app.get('/', function(req, res){
  res.sendFile(__dirname + '../../client/index.html');
  });
  //user routes
  app.get('/user', function(req, res) {
    users.index(req, res);
  });
  app.post('/user', function(req, res) {
    users.create(req, res);
  });
  app.put('/user/:id', function(req, res) {
    users.update(req, res);
  });
  app.delete('/user/:id', function(req, res) {
    users.delete(req, res);
  });

  //appointment routes
  app.get('/appointment', function(req, res) {
    appointments.index(req, res);
  });
  app.post('/add_appointment', function(req, res) {
    appointments.create(req, res);
  });
  app.put('/appointments/:id', function(req, res) {
    appointments.update(req, res);
  });
}
