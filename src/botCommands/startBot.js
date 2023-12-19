const User = require("../DB/userSchema");

async function startBot(userId) {
  let response;

  try {
    await User.findOneAndUpdate({ userId }, { isStarted: true });

    response = "Bot is active";
  } catch (error) {
    console.log(error);
    response = "Something went wrong. Please try again later";
  }

  return response;
}

module.exports = { startBot };
