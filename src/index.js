const TelegramBot = require("node-telegram-bot-api");
const { connectToDB } = require("./DB/dbConnect");
const { checkUserBotStart } = require("./DB/checkUser");
const { updateHistory } = require("./DB/updateHistory");
const { handleCommand } = require("./botCommands/handleCommand");
require("dotenv").config();

connectToDB();

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });

// Matches "/echo [whatever]"
// bot.onText(/\/(.+)/, async (msg, match) => {
//   // 'msg' is the received Message from Telegram
//   // 'match' is the result of executing the regexp above on the text content
//   // of the message

//   const userId = msg.from.id;
//   const firstName = msg.from.first_name;
//   const username = msg.from.username;
//   const fullCommand = match[0];

//   const requestObject = { userId, firstName, username, fullCommand };

//   const response = await handleCommand(requestObject);

//   // send back the matched "whatever" to the chat
//   bot.sendMessage(userId, response);
// });

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", async (msg) => {
  const chatId = msg.chat.id;

  const userId = msg.from.id;
  const firstName = msg.from.first_name;
  const username = msg.from.username;
  const userMessage = msg.text;
  const timeStamp = Date.now();

  const isStarted = await checkUserBotStart(userId, firstName, username);
  let response = userMessage;

  const requestObject = {
    userId,
    userMessage,
    isStarted,
  };

  if (userMessage.startsWith("/"))
    response = await handleCommand(requestObject);

  await updateHistory(userId, timeStamp, userMessage, response);

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, response);
});

bot.on("polling_error", console.log);
