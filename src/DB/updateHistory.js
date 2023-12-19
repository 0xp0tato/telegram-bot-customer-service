const User = require("./userSchema");

async function updateHistory(userId, timeStamp, userMessage, response) {
  try {
    await User.findOneAndUpdate(
      { userId },
      { $push: { commands: { timeStamp, command: userMessage, response } } }
    );
  } catch (error) {
    console.log(error);
  }
}

module.exports = { updateHistory };
