const Discord = require("discord.js");

module.exports.run = async (bot, message) => {

    const embed = new Discord.MessageEmbed()
        .setColor('#ffb640')
        .setTitle(`Server : ${message.guild.name}`)
        .setURL('https://discord.com/oauth2/authorize?client_id=754985217772748810&scope=bot&permissions=388160')
        .setAuthor('Logo Generator | ImPoStoR#8011', 'https://i.imgur.com/2ag2QWP.pngs', 'https://discord.com/oauth2/authorize?client_id=754985217772748810&scope=bot&permissions=388160')
        .setDescription(`My commands on this server starts with **\`-\`** \n\n**Help & Support** \n[\`Commands List\`](https://logo-generator-bot.now.sh/commands)\n[\`Logo Generator Status\`](https://statcord.com/bot/754985217772748810) \n\n**Get Logo Generator**\n[\`Add Logo Generator to your server\`](https://discordbots.org/bot/754985217772748810/invite)`)
        .setThumbnail('https://i.imgur.com/2ag2QWP.png')
        .addField('**Important Links!**', '**[Invite](https://discord.com/oauth2/authorize?client_id=754985217772748810&scope=bot&permissions=388160) ● [Vote](https://discordbots.org/bot/754985217772748810/vote) ● [Support Server](https://discord.gg/jHEBdje)**', true)
        .setImage('https://i.imgur.com/jDkmPoD.png')
        .setTimestamp()
        .setFooter('use "-invite" to invite me!', 'https://i.imgur.com/2ag2QWP.pngs');
    message.channel.send(embed);

}

module.exports.help = {
    name: "help",
    aliases: ["cmds", "commands"]
}