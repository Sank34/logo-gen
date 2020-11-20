const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const embed = new Discord.MessageEmbed()
        .setColor('#ffb640')
        .setTitle('Logo Generator Statistics')
        .setAuthor('Logo Generator | ImPoStoR#8011', 'https://i.imgur.com/2ag2QWP.pngs', 'https://discord.com/oauth2/authorize?client_id=754985217772748810&scope=bot&permissions=388160')
        .setThumbnail('https://i.imgur.com/2ag2QWP.png')
        .addField("ℹ    |    Information", "Logo Generator is a bot built by <@581752425858203659> on **Discord JS Version 12.4.1** to generate simple yet cool logo's!")
        .addField("📊    |    Statistics",`Logo Generator is on **${bot.guilds.cache.size}** servers with **${bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}** users!`)
        .addField('**:love_letter:   |  Invite the bot!**', `[Invite me to your server!](https://discord.com/oauth2/authorize?client_id=754985217772748810&scope=bot&permissions=388160)`)
        .addField("🗳️    |    Vote for bot!", "[Click here to vote!](https://top.gg/bot/754985217772748810/vote)")
        .addField("🚪    |    Join the Support server!", "[Click here to join!](https://discord.gg/jHEBdje)")
        .setTimestamp()
        .setFooter('use "-invite" to invite me!', 'https://i.imgur.com/2ag2QWP.pngs');
    message.channel.send(embed);

}

module.exports.help = {
    name: "system",
    aliases: ["sys", "system"]
}
