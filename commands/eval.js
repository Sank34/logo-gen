const Discord = require("discord.js");
const fs = require("fs");
const { userInfo } = require("os");

module.exports.run = (bot, message, args) => {
    owners = ["581752425858203659"]
    if (!owners.includes(message.author.id)) return message.channel.send("You cannot use this command!");
    const guild = message.guild;
    const channel = message.channel;
    const client = bot;
    const fs = require("fs")
    const author = message.author;
    let msg = message
    const { MessageEmbed } = require('discord.js')
    const { inspect } = require('util')
    
    const embed = new MessageEmbed()
      .setFooter(msg.author.tag, msg.author.displayAvatarURL({ dynamic: true, format: 'png', size: 4096 }))
    
    const query = args.join(' ')
    const code = (lang, code) => (`\`\`\`${lang}\n${String(code).slice(0, 1000) + (code.length >= 1000 ? '...' : '')}\n\`\`\``).replace(bot.token, '*'.repeat(bot.token.length))
    
    if (!query) msg.channel.send('Please write something so I can evaluate!')
    else {
      try {
        const evald = eval(query)
        const res = typeof evald === 'string' ? evald : inspect(evald, { depth: 0 })
    
        embed.addField('Result', code('js', res))
    
        if (!Boolean(res) || (!Boolean(evald) && evald !== 0)) embed.setColor('RED')
        else {
          embed
            .addField('Type', code('css', typeof evald))
            .setColor('GREEN')
        }
      } catch (error) {
        embed
          .addField('Error', code('js', error))
          .setColor('RED')
      } finally {
        msg.channel.send(embed).catch(error => {
          msg.channel.send(`There was an error while displaying the eval result! ${error.message}`)
        })
      }
    }
}
    

module.exports.help = {
    name: "eval",
    aliases: ["compile", "e"]
}




