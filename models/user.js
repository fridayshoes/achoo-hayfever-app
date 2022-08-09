const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type : String, unique: true, required : true, dropDups: true },
  // mobile_number: { type: String, required: true },
  // location: { type: String, required: true },
  // pollen_type: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;