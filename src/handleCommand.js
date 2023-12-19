const handleStart = require("./botCommands/handleStart");

async function handleCommand(requestObject) {
  let { userId, firstName, userName, fullCommand } = requestObject;

  fullCommand = fullCommand.split(" ");

  const command = fullCommand[0];
  const restText = fullCommand.slice(1, fullCommand.length).join(" ");

  const timeStamp = Date.now();

  let response;
  if (command === "/help") {
    response =
      "Available commands:\n 1. /weather <city_name> -> Will give weather description of that city \n 2. /tweet <message> -> Will tweet from your twitter account on your behalf (Will require developer access)";
  } else if (command === "/start") {
    response = await handleStart(userId);
  }

  return response;
}

module.exports = { handleCommand };
