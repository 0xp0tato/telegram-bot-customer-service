const { getUserHistory } = require("../DB/getUserHistory");
const { sendHistory } = require("../service/sendHistory");
const { startBot } = require("./startBot");

const defaultHelpResponse =
  "Available Commands\n1. /help -> List all the available commands\n2. /start -> Start the customer service bot\n3. /history -> Display your history with the bot";

const defaultBotAlreadyStartedResponse = "Bot is already started";

const defaultInvalidCommand = "Invalid Command";

const defaultInactiveBotCommand =
  "Bot is inactive, Start the bot using /start command";

async function handleCommand(requestObject, bot, chatId) {
  const { userId, userMessage, isStarted } = requestObject;

  let response;

  if (userMessage.includes(" ")) response = defaultInvalidCommand;
  else if (userMessage === "/help" && isStarted) response = defaultHelpResponse;
  else if (userMessage === "/start") {
    if (isStarted) response = defaultBotAlreadyStartedResponse;
    else response = await startBot(userId);
  } else if (userMessage === "/history" && isStarted) {
    const commandsArray = await getUserHistory(userId);
    response = sendHistory(bot, commandsArray, chatId);
  } else if (!isStarted) {
    response = defaultInactiveBotCommand;
  } else {
    response = defaultInvalidCommand;
  }

  return response;
}

module.exports = { handleCommand };
