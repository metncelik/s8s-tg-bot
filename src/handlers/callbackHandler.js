const handleCallback = (ctx) => {
    const cbData = ctx.callbackQuery.data;
    ctx.reply(`You clicked on ${cbData}`);
    ctx.answerCbQuery("done!");
}

export { handleCallback };