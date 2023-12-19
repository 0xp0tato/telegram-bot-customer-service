const TelegramBot = require("node-telegram-bot-api");
const { handleCommand } = require("./handleCommand");
const { connectToDB } = require("./DB/dbConnect");
require("dotenv").config();

connectToDB();

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });

// Matches "/echo [whatever]"
bot.onText(/\/(.+)/, async (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const userId = msg.from.id;
  const firstName = msg.from.first_name;
  const userName = msg.from.username;
  const fullCommand = match[0];

  const requestObject = { userId, firstName, userName, fullCommand };

  const response = await handleCommand(requestObject);

  // send back the matched "whatever" to the chat
  bot.sendMessage(userId, response);
});

// Listen for any kind of message. There are different kinds of
// messages.
// bot.on("message", (msg) => {
//   const chatId = msg.chat.id;
//   console.log("------msg------\n", msg);

//   // send a message to the chat acknowledging receipt of their message
//   bot.sendMessage(chatId, "Received your message");
// });
