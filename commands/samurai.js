const Discord = require("discord.js");
const config = require("../botconfig.json")
module.exports.run = async (bot, message, args) => {
    const question = args.join(" ");
    if (!question) {
        const errorembed = new Discord.MessageEmbed()
            .setColor(`#ff0000`)
            .setTimestamp()
            .setDescription(`<a:wrongggg:755042144539902013>** | Please type something after the command!**`)
            .setFooter('use "-invite" to invite me!', bot.user.displayAvatarURL());
        return message.channel.send(errorembed)
    } else {
        const loadingEmbed = new Discord.MessageEmbed()
            .setColor("#ffb640")
            .setDescription(`**<a:load:751007122388418600> Generating your Logo!...**`)
        let msg = await message.channel.send(loadingEmbed)
        const encodedQuestion = question.replace(/[' '_]/g, "+");
        const cat = new Discord.MessageEmbed()
            .setColor('#ffb640')
            .setTitle('Link to your logo!')
            .setURL(`https://dynamic.brandcrowd.com/asset/logo/ee1930f1-09a8-4d5e-bbe9-e43547bb7f64/logo?v=4&text=${encodedQuestion}`)
            .setImage(`https://dynamic.brandcrowd.com/asset/logo/ee1930f1-09a8-4d5e-bbe9-e43547bb7f64/logo?v=4&text=${encodedQuestion}`)
            .setAuthor('Logo Generator | ImPoStoR#8011', bot.user.displayAvatarURL(), 'https://discord.com/oauth2/authorize?client_id=754985217772748810&scope=bot&permissions=388160')
            .setTimestamp()
            .setFooter('use "-invite" to invite me!', bot.user.displayAvatarURL());
        msg.edit(cat);
    }
}

module.exports.help = {
    name: "samurai",
    aliases: []
}