console.log('Appointment Controller')
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Appointment = require('../models/appointment');


module.exports = (function(){
  return {
    index: function(req, res){
      Appointment.find({}, function(err, results){
        if(err){
          res.json(err);
        }else{
          res.json(results);
        }
      })
    },
    create: function(req, res){
      var new_user = new Appointment(req.body);
      new_appointment.save(function(err, results){
        if(err){
          res.json(err);
        }else{
          res.json(results);
        }
      })
    },
    show: function(req,res){
    Appointment.find({_id: req.params.id}, function(err, results){
      if (err){
        res.json(err);
      }else{
        console.log('showing:', results)
        res.json(results)
      }
     })
    },
    update: function(req,res){
      Appointment.update({_id: req.params.id}, req.body, function(err, results){
       if(err){
         res.json(err);
       }else{
         console.log('successfully updated appointment!', results);
         res.json(results);
     }
   })
  },
    delete: function(req, res){
    Appointment.remove({ _id: req.params.id }, function(err, results){
      if (err) {
        res.json(err);
      }else{
        res.json(results);
      }
    })
  }
 }
})();
