const Discord = require("discord.js");
const bot = new Discord.Client({
    disableEveryone: true
});
const client = bot
const config = require("./botconfig.json");
const fs = require("fs");
const DBL = require('dblapi.js');
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1NDk4NTIxNzc3Mjc0ODgxMCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjAzNzY5MjY1fQ.UWntun4u7dr4vhNM6tO7Lq0TH-RZFHkUDFJsXPrM-do');
const Statcord = require("statcord.js");
const statcord = new Statcord.Client({
    client,
    key: "statcord.com-PwlB5NMHpmJOzCihig30",
});

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        console.log("Could not find any commands.");
        return;
    }

    jsfile.forEach((f) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);

        props.help.aliases.forEach(alias => {
            bot.aliases.set(alias, props.help.name);
        });
    });
});

bot.on("ready", async (message) => {
    console.log(`${bot.user.username} is online on ${bot.guilds.cache.size} servers!`);
    const games = [{
            name: `-help on ${bot.guilds.cache.size} servers | v2.0.1`,
            type: "LISTENING",
        },
        {
            name: `${bot.guilds.cache.size} servers and ${bot.channels.cache.size} channels with ${bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} users | v2.0.1`,
            type: "WATCHING",
        },
    ];
    let i = 0;
    setInterval(async function () {
        try {
            await bot.user.setPresence({
                activity: {
                    name: games[parseInt(i, 10)].name,
                    type: games[parseInt(i, 10)].type,
                },
                status: "idle",
            });
            if (games[parseInt(i + 1)]) {
                i++;
            } else {
                i = 0;
            }
        } catch (error) {
            return console.log(error);
        }
    }, 20000);
    statcord.autopost();
    bot.channels.cache.get("768700641732198401").send(`${bot.user.username} is online on ${bot.guilds.cache.size} servers!`)
    setInterval(() => {
        dbl.postStats(bot.guilds.cache.size);
    }, 900000);
});

bot.on("message", async message => {
    if (message.channel.type === "dm") return;
    if (message.author.bot) return;
    let prefix = config.prefix;
    if (message.content.match(new RegExp(`^<@!?${bot.user.id}>( |)$`))) {
        const cat = new Discord.MessageEmbed()
            .setColor('#ffb640')
            .setDescription(`**Hello <@${message.author.id}>, I am <@!${bot.user.id}> and you can use [\`-help\`](https://logo-generator-bot.now.sh/commands) command to get the list of available commands!**`)
            .setTimestamp()
            .setFooter('use "-invite" to invite me!', 'https://i.imgur.com/2ag2QWP.pngs');
        return message.channel.send(cat)
    }
    if (!message.content.startsWith(prefix)) return;
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd;
    cmd = args.shift().toLowerCase();
    let command = message.content.split(" ")[0].toLowerCase().substr(prefix.length);
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    statcord.postCommand(command, message.author.id);
    if (commandfile) commandfile.run(bot, message, args);

    if (bot.commands.has(cmd)) {
        command = bot.commands.get(cmd);
    } else if (bot.aliases.has(cmd)) {
        command = bot.commands.get(bot.aliases.get(cmd));
    }
    try {
        command.run(bot, message, args);
    } catch (e) {
        return;
    }
    statcord.post();
})

statcord.on("autopost-start", () => {
    console.log("Started autopost");
});

statcord.on("post", status => {
    if (!status) console.log("Successful post");
    else console.error(status);
});


bot.login(config.token);