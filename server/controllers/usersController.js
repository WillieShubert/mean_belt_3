var User = require('../models/user');
var Appointment = require('../models/appointment');

module.exports = {
  index: function(req, res){
    User.find({}, function(err, user){
    	if (err){
    		res.json(err);
    	}
    	else {
    		res.json(user);
    	}
    });
  },
  create: function(req, res){
    User.create(req.body, function(err){
      if (err) { return res.json(err); }
      return res.json(true);
    });
  },
  delete: function(req, res){
    // Remove all appointment w/ that user
    Appointment.removeAppointmentsByUserId(req.params.id, function(err){
      if (err) { return res.json(err); }
      User.remove({ _id: req.params.id }, function(err){
        if (err) { return res.json(err); }
        return res.json(true);
      });
    });
  }
}
