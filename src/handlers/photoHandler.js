import bot from './../../app.js';
import { photoKeyboard } from '../markups/keyboards.js';
import sharp from 'sharp';

const handlePhoto = async (ctx) => {
    const photoArray = ctx.message.photo;
    const photoID = photoArray[photoArray.length - 1].file_id;
    const photo = await bot.telegram.getFileLink(photoID)
    const response = await fetch(photo.href);
    const chunks = [];
    for await (const chunk of response.body) {
        chunks.push(chunk);
    }
    const imageBuffer = Buffer.concat(chunks);
    bot.telegram.sendPhoto(
        ctx.chat.id,
        { source: imageBuffer },
        {
            caption: 'Photo received', reply_markup: {
                inline_keyboard: photoKeyboard
            }
        }
    );
}

export { handlePhoto };