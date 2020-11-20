const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports.run = async (bot, message, args) => {
	const loadingEmbed = new Discord.MessageEmbed()
		.setColor("#ffb640")
		.setDescription(`**<a:load:751007122388418600> Getting you a meme!...**`)
	let msg = await message.channel.send(loadingEmbed)
	let random = ["Memes", "Dankmemer", "meme", "funny"]
	let memes = random[Math.floor(Math.random() * random.length)]
	fetch(`https://www.reddit.com/r/${memes}.json?sort=top&t=daily`)
		.then(res => res.json())
		.then(body => {
			if (!body) {
				const serrorembed = new Discord.MessageEmbed()
				.setColor(`#ff0000`)
				.setTimestamp()
				.setDescription(`<a:wrongggg:755042144539902013>** | I broke the connection! Please tryy again!!!**`)
				.setFooter('use "-invite" to invite me!', bot.user.displayAvatarURL());
			return message.channel.send(serrorembed)
			}
			const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
			if (!allowed.length) {
				const errosrembed = new Discord.MessageEmbed()
				.setColor(`#ff0000`)
				.setTimestamp()
				.setDescription(`<a:wrongggg:755042144539902013>** | Hmmm... It looks like an error to me! Please inform <@581752425858203659> about this!**`)
				.setFooter('use "-invite" to invite me!', bot.user.displayAvatarURL());
			return message.channel.send(errosrembed)
			}
			const randomnumber = Math.floor(Math.random() * allowed.length)
			let url = `https://www.reddit.com${allowed[randomnumber].data.permalink}`
			let embed = new Discord.MessageEmbed()
				.setTitle(allowed[randomnumber].data.title)
				.setImage(allowed[randomnumber].data.url)
				.setURL(url)
				.setAuthor(`Requested by ${message.author.tag}`, message.author.displayAvatarURL(), `https://discord.com/oauth2/authorize?client_id=754985217772748810&scope=bot&permissions=388160`)
				.setColor('#ffb640')
				.setFooter('use "-invite" to invite me!', 'https://i.imgur.com/2ag2QWP.pngs')
				.setTimestamp()
			msg.edit(embed);
		});

}


module.exports.help = {
	name: "meme",
	aliases: ["meme"]
}