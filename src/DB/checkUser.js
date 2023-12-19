const User = require("./userSchema");

async function checkUserBotStart(userId, firstName, username) {
  const user = await User.findOne({ userId });

  if (user) {
    return user.isStarted;
  } else {
    const newUser = new User();

    newUser.userId = userId;
    newUser.firstName = firstName;
    newUser.username = username;

    await newUser.save();

    return newUser.isStarted;
  }
}

module.exports = { checkUserBotStart };
