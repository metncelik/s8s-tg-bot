import { Telegraf } from 'telegraf';
import * as c from './config.js';
import { handleStart } from './src/handlers/commandHandler.js';
import { handlePhoto } from './src/handlers/photoHandler.js';
import { handleCallback } from './src/handlers/callbackHandler.js';

const bot = new Telegraf(c.TELEGRAM_BOT_TOKEN);

bot.command('start', handleStart);
bot.on('photo', handlePhoto);
bot.on('callback_query', handleCallback);
// bot.on('text', (ctx) => ctx.reply(ctx.message.text));
// bot.on('message', ctx => ctx.reply('Command not recognized'));

bot.use((ctx) => {
    ctx.reply('Command not recognized');
});

bot.catch((err, ctx) => {
    console.log(`Error for ${ctx.updateType}`, err);
    ctx.reply('An error occurred');
});

if (process.env?.NODE_ENV === 'development') {
    bot.launch();
} else {
    bot.telegram.setWebhook(
        `https://${c.GOOGLE_CLOUD_REGION}-${c.GOOGLE_CLOUD_PROJECT_ID}.cloudfunctions.net/${c.FUNCTION_NAME}`
    );
}

export const telegramBotWebhook = async (req, res) => {
    await bot.handleUpdate(req.body, res);
};

export default bot;