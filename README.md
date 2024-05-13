# Serverless Telegram Bot

This is a serverless Telegram bot built using Google Cloud Functions, which reduces costs because it only runs when needed. It’s a demo bot that helps you resize images.

## Prerequisites

Before getting started, make sure you have the following:

- [Node.js](https://nodejs.org) installed
- A Google Cloud account
- A Telegram Bot

## Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/metncelik/s8s-tg-bot.git
    ```

2. Install the dependencies:

    ```bash
    cd s8s-tg-bot
    npm install
    ```

3. Set up your Google Cloud project and enable the necessary APIs and create and get a Telegram Bot API KEY ([From BotFather to 'Hello World'](https://core.telegram.org/bots/tutorial)).

4. Configure the bot:
   
    Development:
    - Rename the `.example.env` file to `.dev.env`.
    - Open the `.dev.env` file and provide the required configuration values (NODE_ENV, BOT_TOKEN).
    Production
    - You need to provide all env variables inside `.example.env`

6. Deploy the bot to Google Cloud:

    You can create a Google Cloud Functions with a zip file, but for continuous deployment fork this repo and create a Cloud Build trigger and choose the repository option for Configuration.

## Usage

Once the bot is deployed, you can start interacting with it on Telegram. Simply search for your bot's username and start sending messages.