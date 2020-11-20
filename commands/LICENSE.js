const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const embed = new Discord.MessageEmbed()
        .setColor('#ffb640')
        .setTitle('')
        .setAuthor('Logo Generator | ImPoStoR#8011', 'https://i.imgur.com/2ag2QWP.pngs', 'https://discord.com/oauth2/authorize?client_id=754985217772748810&scope=bot&permissions=388160')
        .setDescription('')
        .setThumbnail('https://i.imgur.com/2ag2QWP.png')
        .addField('📝    |    Bot\'s LICENSE!', 'This Bot is licensed under the \n **Creative Commons Zero v1.0 Universal \n[A copy of LICENSE can be found here!](https://github.com/sujalgoel/logo-generator/blob/master/LICENSE)**', true)
        .setImage('')
        .setTimestamp()
        .setFooter('use "-invite" to invite me!', 'https://i.imgur.com/2ag2QWP.pngs');
    message.channel.send(embed);

}

module.exports.help = {
    name: "LICENSE",
    aliases: ["license", "lic"]
}
