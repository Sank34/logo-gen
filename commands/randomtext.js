const Discord = require('discord.js');
const fetch = require("node-fetch");
const DBL = require('dblapi.js');
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1NDk4NTIxNzc3Mjc0ODgxMCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjAzNzY5MjY1fQ.UWntun4u7dr4vhNM6tO7Lq0TH-RZFHkUDFJsXPrM-do');

module.exports.run = async (bot, message, args) => {
	const question = args.join(" ");
	const encodedQuestion = question.replace(/[' '_]/g, "+")
	let random = [
		`https://dynamic.brandcrowd.com/asset/logo/d588330f-b11c-4482-baff-49323323a8c0/logo?v=4&text=${encodedQuestion}`,
		`https://dynamic.brandcrowd.com/asset/logo/8ffdc28c-ea27-4b0c-89c3-3f9a9b40e5fd/logo?v=4&text=${encodedQuestion}`,
		`https://dynamic.brandcrowd.com/asset/logo/963fcb8b-1ba3-46f1-82bd-8e92a5a024d1/logo?v=4&text=${encodedQuestion}`,
		`https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=flame-logo&text=${encodedQuestion}`,
		`https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=dance-logo&text=${encodedQuestion}`,
		`https://dynamic.brandcrowd.com/asset/logo/c1e008df-5207-463e-a6a7-a823174d0bda/logo?v=4&text=${encodedQuestion}`,
		`https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=robot-logo&text=${encodedQuestion}`,
		`https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=arcade-logo&text=${encodedQuestion}`,
		`https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=emperor-logo&text=${encodedQuestion}`,
		`https://dynamic.brandcrowd.com/asset/logo/b5e150af-101d-4e96-9518-dff66548dc31/logo?v=4&text=${encodedQuestion}`,
		`https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=matrix-logo&text=${encodedQuestion}`,
		`https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=skate-logo&text=${encodedQuestion}`,
		`https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=spider-men-logo&text=${encodedQuestion}`,
		`https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=spaceships-logo&text=${encodedQuestion}`,
		`https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=wrestler-logo&text=${encodedQuestion}`
	]
	if (!question) {
		const errorembed = new Discord.MessageEmbed()
			.setColor(`#ff0000`)
			.setTimestamp()
			.setDescription(`<a:wrongggg:755042144539902013>** | Please type something after the command! \n\n<a:fle:765871623436763147> This command has a delay of 10 seconds to avoid rate limits!**`)
			.setFooter('use "-invite" to invite me!', bot.user.displayAvatarURL());
		return message.channel.send(errorembed)
	}
		const loadingEmbed = new Discord.MessageEmbed()
			.setColor('#ffb640')
			.setDescription(`**<a:load:751007122388418600> Generating your logo!...**`)
		let msg = await message.channel.send(loadingEmbed)
	setTimeout(function () {
		const voteddd = message.author.id
		dbl.hasVoted(voteddd)
			.then(async (voted) => {
				if (voted) {
					let memes = random[Math.floor(Math.random() * random.length)]
					fetch(`${memes}`)
					let url = `${memes}`
					let embed = new Discord.MessageEmbed()
						.setColor('#ffb640')
						.setTitle('Link to your logo!')
						.setAuthor('Logo Generator | ImPoStoR#8011', 'https://i.imgur.com/2ag2QWP.pngs', 'https://discord.com/oauth2/authorize?client_id=754985217772748810&scope=bot&permissions=388160')
						.setTimestamp()
						.setFooter('use "-invite" to invite me!', 'https://i.imgur.com/2ag2QWP.pngs')
						.setImage(url)
						.setURL(url)
					msg.edit(embed);
				}
				if (!voted) {
					const ersrorembed = new Discord.MessageEmbed()
						.setColor(`#ff0000`)
						.setTimestamp()
						.setDescription(`<a:wrongggg:755042144539902013>** | It seems like you haven't voted me yet! \n\n<a:fle:765871623436763147> [\`Use this link to vote me!\`](https://discordbots.org/bot/754985217772748810/vote)**`)
						.setFooter('use "-invite" to invite me!', bot.user.displayAvatarURL());
					return msg.edit(ersrorembed)
				}
			})
			.catch(e => {
				console.log(e)
				const errorembed = new Discord.MessageEmbed()
					.setColor(`#ff0000`)
					.setTimestamp()
					.setDescription(`<a:wrongggg:755042144539902013>** | Hmmm... It looks like an error to me! Please inform <@581752425858203659> about this!**`)
					.setFooter('use "-invite" to invite me!', bot.user.displayAvatarURL());
				return msg.edit(errorembed)
			})
	}, 10000);
}


module.exports.help = {
	name: "randomtext",
	aliases: []
}