const { startBot } = require("./startBot");

const defaultHelpResponse =
  "Available Commands\n1. /help -> List all the available commands\n2. /start -> Start the customer service bot";

const defaultBotAlreadyStartedResponse = "Bot is already started";

const defaultInvalidCommand = "Invalid Command";

const defaultInactiveBotCommand =
  "Bot is inactive, Start the bot using /start command";

async function handleCommand(requestObject) {
  const { userId, userMessage, isStarted } = requestObject;

  let response;

  if (userMessage.includes(" ")) response = defaultInvalidCommand;
  else if (userMessage === "/help" && isStarted) response = defaultHelpResponse;
  else if (userMessage === "/start") {
    if (isStarted) response = defaultBotAlreadyStartedResponse;
    else response = startBot(userId);
  } else {
    response = defaultInactiveBotCommand;
  }

  return response;
}

module.exports = { handleCommand };
