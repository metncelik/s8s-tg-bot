const handleStart = (ctx) => {
    const name = ctx.message.from.first_name;
    ctx.reply(`Welcome ${name}! Send a photo to resize.`);
};

export { handleStart }