const { format } = require("date-fns");

function formatDate(timestamp) {
  return format(timestamp, "dd MMM yyyy HH:mm");
}

async function sendHistory(bot, commandsArray, chatId) {
  try {
    for (const item of commandsArray) {
      const timeStamp = formatDate(item.timeStamp);
      const command = item.command;
      const response = item.response;

      const responseString = `TimeStamp - ${timeStamp}\nCommand - ${command}\nResponse - ${response}`;

      bot.sendMessage(chatId, responseString);

      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  } catch (error) {
    console.log(error);
  }

  const response = "History Sent";

  return response;
}

module.exports = { sendHistory };
