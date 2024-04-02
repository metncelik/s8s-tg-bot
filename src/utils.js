const photoIDToBase64 = async (file) => {
    const photo = await bot.telegram.getFileLink(photoID)
    const response = await fetch(photo.href);
    const chunks = [];
    for await (const chunk of response.body) {
        chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);
    const base64 = buffer.toString('base64');
    ctx.reply('Photo received')
}

export { photoIDToBase64 };