const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userId: Number,
  firstName: String,
  username: String,
  commands: [
    {
      timeStamp: Date,
      command: String,
      response: String,
    },
  ],
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

module.exports = User;
