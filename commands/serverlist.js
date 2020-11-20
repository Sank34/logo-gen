const Discord = require('discord.js');
const config = require("../botconfig.json")
const hastebin = require('hastebin.js');
const haste = new hastebin();

module.exports.run = async (client, message) => {
  if (message.author.id != config.owner) return;
  let arr = new Array();
  client.guilds.cache.forEach(async servers => {
    arr.push(`
---> Server Info Of ${servers.name} <---
Server Name: ${servers.name}
Member Count: ${servers.memberCount}
Server ID: ${servers.id}  
---> Info Of ${servers.name} Ends Here <---
`)
  })
  haste.post(arr).then(link => {
    const embed = new Discord.MessageEmbed()
      .setColor('#ffb640')
      .setAuthor(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({
        dynamic: true
      }))
      .setTitle(`\`${client.user.username} is in total of ${client.guilds.cache.size} servers!\``)
      .setURL(link)
      .setThumbnail(client.user.displayAvatarURL())
      .setTimestamp()
      .setFooter(`use "${config.prefix}invite" to invite me!`, client.user.displayAvatarURL());
    message.channel.send(embed);
  })
}

module.exports.help = {
  name: "serverlist",
  aliases: ["servers-list", "sl"]
}