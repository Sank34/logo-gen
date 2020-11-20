module.exports.run = async (bot, message) => {
    if (message.author.id !== '581752425858203659') {
        return;
    }
    await message.channel.send(`Restarting bot...`)
        .then(m => m.delete({
            timeout: 5000
        }));
    process.exit();
}

module.exports.help = {
    name: "die",
    aliases: ["d", "restart"]
}