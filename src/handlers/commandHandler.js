const handleStart = (ctx) => {
    const name = ctx.message.from.first_name;
    ctx.reply(`Welcome ${name}!`);
};

export { handleStart }