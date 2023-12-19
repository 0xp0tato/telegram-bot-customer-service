const User = require("./userSchema");

async function getUserHistory(userId) {
  try {
    const user = await User.findOne({ userId });

    return user.commands;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getUserHistory };
