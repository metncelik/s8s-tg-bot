import bot from './../app.js';

const photoIDToBase64 = async (fileID) => {
    const photo = await bot.telegram.getFileLink(fileID)
    const response = await fetch(photo.href);
    const chunks = [];
    for await (const chunk of response.body) {
        chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);
    const base64 = buffer.toString('base64');
    return base64;
}

export { photoIDToBase64 };