# Telegram Bot with Node.js and MongoDB

This project implements a Telegram bot using Node.js and MongoDB to provide various commands and functionalities.

## Features
### Supported Commands

    /help: Lists all available commands.
    /start: Starts the bot for the user.
    /history: Displays the history of interactions with the bot for the user.

### Prerequisites

    Node.js installed
    MongoDB installed or access to a MongoDB database

### Setup

    Clone the repository: git clone https://github.com/0xp0tato/telegram-bot-customer-service.git
    
    cd telegram-bot-customer-service
    npm install

### Set up environment variables:

Create a .env file in the root directory and add the necessary environment variables:

    TELEGRAM_BOT_TOKEN=your-telegram-bot-token
    MONGODB_URL=your-mongodb-connection-uri

Run the bot:

    npm start

Usage

    Start the bot by sending /start.
    Use /help to get a list of available commands.
    Utilize /history to view the interaction history with the bot.

