const User = require("../DB/userSchema");

const botStartedMessage =
  "Bot started. Enter /help to see all the available commands";

const botAlreadyStartedMessage =
  "Bot is already started. Enter /help to see all the available commands";

async function handleStart(userId) {
  try {
    const user = await User.findOne({ userId });

    if (user) return botAlreadyStartedMessage;

    return botStartedMessage;
  } catch (error) {
    console.log(error);
  }
}

module.exports = handleStart;
