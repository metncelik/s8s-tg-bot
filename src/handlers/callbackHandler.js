import sharp from "sharp";
import bot from "./../../app.js";

const handleCallback = async (ctx) => {
    const res = parseInt(ctx.callbackQuery.data);
    const photoArray = ctx.callbackQuery.message.photo;
    const photoID = photoArray[photoArray.length - 1].file_id;
    const photo = await bot.telegram.getFileLink(photoID)
    const response = await fetch(photo.href);
    const chunks = [];
    for await (const chunk of response.body) {
        chunks.push(chunk);
    }
    const imageBuffer = Buffer.concat(chunks);
    ctx.answerCbQuery("Resizing...");
    const imageSharp = sharp(imageBuffer);
    const { width, height } = await imageSharp.metadata();
    const biggerSide = Math.max(width, height);
    const rate = res / biggerSide;
    const newWidth = Math.round(width * rate);
    const newHeight = Math.round(height * rate);
    const resizedImage = await imageSharp
        .resize(newWidth, newHeight)
        .toBuffer();
    bot.telegram.sendPhoto(
        ctx.chat.id,
        { source: resizedImage },
        {
            caption: `original res: ${width}X${height}\nnew res: ${newWidth}X${newHeight}`
        }
    );
}

export { handleCallback };