var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var AppointmentSchema = new Schema({
  _user: { type : ObjectId, ref : 'User' },
  description: String,
  appointment_date:{ type: Date, default: Date.now() },
  appointment_time: String,
  created_at: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("Appointment", AppointmentSchema);
