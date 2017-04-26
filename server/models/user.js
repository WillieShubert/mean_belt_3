var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
  name: {
      type: String,
      required: true
  }
}, {
  timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model("User", UserSchema);
