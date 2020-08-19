
//const stuff

const Discord = require("discord.js");
const client = new Discord.Client
const { PREFIX } = require('./config.json');
const db = require('quick.db');
const ms = require('parse-ms');
const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, commad)
}

const randomPuppy = require('random-puppy');
const giveMeAJoke = require('discord-jokes');
const api = require('covidapi');

//const stuff

//startup message

client.on('ready', async() => {
    console.log("Tex Bot is ready to rumble!")
})

//startup message

//economy bot



//economy bot


//meme bot 

client.on('message', async message => {
    if (message.content === "$meme") {
        const subReddits = ["dankmeme", "meme", "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`From /r/${random}`)
        .setURL(`https://reddit.com/r/${random}`);
        message.channel.send(embed)
    }
})

//meme bot

//joke bot

client.on('message', async message => {
    if (message.content === "$joke") {
        giveMeAJoke.getRandomDadJoke (function(joke) {
            const embed = new Discord.MessageEmbed()
            .setDescription(`${joke}`)
            message.channel.send(embed)
        })
    }

    if (message.content === "$cnjoke") {
        giveMeAJoke.getRandomCNJoke (function(joke) {
            const embed = new Discord.MessageEmbed()
            .setDescription(`${joke}`)
            message.channel.send(embed)
        })
    }
});

//joke bot

//covid-19 bot

client.on('message', async message => {
    if (message.content === "$covid") { 
          
        const data = await api.all()
        const coronaembed = new Discord.MessageEmbed()
        .setColor("#ff2050")
        .setTitle("Global Covid-19 Status", "https://i.imgur.com/QzskBBq.jpg") 
        .setDescription("Number of cases may differ from other sources")  
        .addField("Cases", data.cases, inline = true)
        .addField("Active", data.active, inline = true)
        .addField("Cases Today", data.todayCases, inline = true)
        .addField("Critical Cases", data.critical, inline = true)
        .addField("Deaths", data.deaths, inline = true)
        .addField("Recovered", data.recovered, inline = true)
        .setThumbnail("https://i.imgur.com/QzskBBq.jpg")
        .setFooter("This updates every second")
        message.channel.send(coronaembed)
    } else if (message.content.startsWith("$covid"))
    var prefix = "$"
    const countrycovid = message.content.slice(prefix.length).split(' ')
    const countrydata = await api.countries({country: countrycovid})

    const countryembed = new Discord.MessageEmbed()
    .setColor("#ff2050")
    .setTitle(`${countrycovid[1]} Cases`) 
    .setDescription("Number of cases may differ from other sources")  
    .addField("Cases", countrydata.cases, inline = true)
    .addField("Active", countrydata.active, inline = true)
    .addField("Cases Today", countrydata.todayCases, inline = true)
    .addField("Critical Cases", countrydata.critical, inline = true)
    .addField("Deaths", countrydata.deaths, inline = true)
    .addField("Recovered", countrydata.recovered, inline = true)
    .setThumbnail("https://i.imgur.com/QzskBBq.jpg")
    .setFooter("This updates every second")
    message.channel.send(countryembed)
})

//covid-19 bot


//support bot

client.on('message', async message => {
    if (message.content === "$support") {
        message.channel.send("Join our support server https://discord.gg/pwRVdQb")
    }
})

//support bot

//invite link

client.on('message', async message => {
    if (message.content === "$invite") {
        message.channel.send("Invite this bot to your server https://discord.com/api/oauth2/authorize?client_id=743768266777821214&permissions=8&scope=bot")
    }
})

//invite link

//help command

client.on('message', async message => {
    if(message.content.startsWith("$help")) {
        const embed = new Discord.MessageEmbed()
        .setDescription("Please write what type of help you want. Following modules are: economy, meme, joke, cnjoke, covid, support, invite")
        .setFooter("Write $help {moduleName}")
        message.channel.send(embed)
    }
})
client.on('message', async message => {
    if(message.content.startsWith("$help economy")) {
        const economyembed = new Discord.MessageEmbed()
        .setAuthor("Tex Bot", "https://i.imgur.com/ZHUpgyz.png")
        .setThumbnail("https://i.imgur.com/ZHUpgyz.png")
        .setTitle("Help for Economy")
        .setDescription("Write **$bal** to check your balance, **$daily** to claim your daily reward, **$work** to work, and **$beg** to beg for money!")
        message.channel.send(economyembed)
    }
})
client.on('message', async message => {
    if(message.content.startsWith("$help meme")) {
        const memeembed = new Discord.MessageEmbed()
        .setAuthor("Tex Bot", "https://i.imgur.com/ZHUpgyz.png")
        .setThumbnail("https://i.imgur.com/ZHUpgyz.png")
        .setTitle("Help for Meme")
        .setDescription("Write **$meme** to generate a fresh funny meme!")
        message.channel.send(memeembed)
    }
})
client.on('message', async message => {
    if(message.content.startsWith("$help joke")) {
        const jokeembed = new Discord.MessageEmbed()
        .setAuthor("Tex Bot", "https://i.imgur.com/ZHUpgyz.png")
        .setThumbnail("https://i.imgur.com/ZHUpgyz.png")
        .setTitle("Help for Joke")
        .setDescription("Write **$joke** to generate a joke!")
        message.channel.send(jokeembed) 
    }
})

client.on('message', async message => {
    if(message.content.startsWith("$help cnjoke")) {
        const jokeembed = new Discord.MessageEmbed()
        .setAuthor("Tex Bot", "https://i.imgur.com/ZHUpgyz.png")
        .setThumbnail("https://i.imgur.com/ZHUpgyz.png")
        .setTitle("Help for CnJoke")
        .setDescription("Write **$cnjoke** to generate a joke!")
        message.channel.send(jokeembed)
    }
})        

client.on('message', async message => {
    if(message.content.startsWith("$help support")) {
        const jokeembed = new Discord.MessageEmbed()
        .setAuthor("Tex Bot", "https://i.imgur.com/ZHUpgyz.png")
        .setThumbnail("https://i.imgur.com/ZHUpgyz.png")
        .setTitle("Help for Support")
        .setDescription("Write **$support** to join the support server")
        message.channel.send(jokeembed)
    }
})

client.on('message', async message => {
    if(message.content.startsWith("$help invite")) {
        const jokeembed = new Discord.MessageEmbed()
        .setAuthor("Tex Bot", "https://i.imgur.com/ZHUpgyz.png")
        .setThumbnail("https://i.imgur.com/ZHUpgyz.png")
        .setTitle("Help for Invite")
        .setDescription("Write **$invite** to get invite link for the bot")
        message.channel.send(jokeembed)
    }
})

//help command

client.login(process.env.token);