const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type : String, unique: true, required : true, dropDups: true },
  mobile: { type: String, unique: true, required: true, dropDups: true },
  location: { type: String, required: true },
  pollen: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;