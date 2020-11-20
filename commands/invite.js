const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const embed = new Discord.MessageEmbed()
        .setColor('#ffb640')
        .setAuthor('Logo Generator | ImPoStoR#8011', 'https://i.imgur.com/2ag2QWP.pngs', 'https://discord.com/oauth2/authorize?client_id=754985217772748810&scope=bot&permissions=388160')
        .setThumbnail('https://i.imgur.com/2ag2QWP.png')
        .addField(':love_letter:    |    Invite the bot!', '[Invite me to your server!](https://discord.com/oauth2/authorize?client_id=754985217772748810&scope=bot&permissions=388160)', true)
        .setTimestamp()
        .setFooter('use "-invite" to invite me!', 'https://i.imgur.com/2ag2QWP.pngs');
    message.channel.send(embed);

}

module.exports.help = {
    name: "invite",
    aliases: ["i", "invite", "in"]
}
