const {
  MessageEmbed
} = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const mentionsss = message.mentions.users.first() || bot.users.cache.get(args[0]) || message.author
  const Embed = new MessageEmbed();
  Embed.setAuthor('Logo Generator | ImPoStoR#8011', 'https://i.imgur.com/2ag2QWP.pngs', 'https://discord.com/oauth2/authorize?client_id=754985217772748810&scope=bot&permissions=388160')
  Embed.setTitle(`${bot.users.cache.get(mentionsss.id).tag}'s avatar!`);
  Embed.setImage(bot.users.cache.get(mentionsss.id).displayAvatarURL({
    size: 2048,
    dynamic: true
  }));
  Embed.setColor('#ffb640')
  Embed.setTimestamp()
  Embed.setFooter('use "-invite" to invite me!', 'https://i.imgur.com/2ag2QWP.pngs');
  return message.channel.send(Embed);
}

module.exports.help = {
  name: "avatar",
  aliases: []
}