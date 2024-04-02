import bot from './../../app.js';
import { photoKeyboard } from '../markups/keyboards.js';

const handlePhoto = async (ctx) => {
    const photoArray = ctx.message.photo;
    const photoID = photoArray[photoArray.length-1].file_id;
    bot.telegram.sendPhoto(
        ctx.chat.id, 
        photoID, 
        {caption: 'Photo received',  reply_markup: {
            inline_keyboard: photoKeyboard
        }}
    );
}

export { handlePhoto };