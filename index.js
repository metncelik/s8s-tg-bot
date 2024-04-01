import { Telegraf } from 'telegraf';
import { GOOGLE_CLOUD_PROJECT_ID, TELEGRAM_BOT_TOKEN, GOOGLE_CLOUD_REGION, FUNCTION_NAME } from './config.js';

const bot = new Telegraf(TELEGRAM_BOT_TOKEN);
bot.start((ctx) => ctx.reply(`Welcome to the most silly bot you'll ever see`));
bot.help((ctx) => ctx.reply(`Write anything to me and I'll repeat it :)`));
bot.on('text', (ctx) => ctx.reply(ctx.message.text));
bot.on('message', ctx => ctx.reply('Command not recognized'));
bot.telegram.setWebhook(
    `https://${GOOGLE_CLOUD_REGION}-${GOOGLE_CLOUD_PROJECT_ID}.cloudfunctions.net/${FUNCTION_NAME}`
);

export const telegramBotWebhook = (req, res) => {
    bot.handleUpdate(req.body, res);
};