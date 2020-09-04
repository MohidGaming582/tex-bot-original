
//const stuff

const Discord = require("discord.js")
const client = new Discord.Client()
const { PREFIX } = require('./config.json')
const moment = require('moment')
const db = require('quick.db')
const ms = require('parse-ms')
const fs = require('fs')
const randomPuppy = require('random-puppy')
const giveMeAJoke = require('discord-jokes')
const api = require('covidapi')

//const stuff

//startup message

client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({
        status: "online",  //You can show online, idle....
        game: {
            name: "Dm for help! Prefix is $",  //The message shown
            type: "PLAYING" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });
 });

 client.on('ready', () => {
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: '$help | Dm for help',
            type: "PLAYING"
        }
    });
});

//startup message

//economy bot

client.on('message', async message => {
    if(message.content.startsWith("$bal")) {
        let user = message.mentions.users.first() || message.author
        let money = db.fetch(`money_${user.id}`)

        if (money === null) money = 0

        else {
            let embed = new Discord.MessageEmbed()
            .setAuthor(`Wallet`, message.author.displayAvatarURL)
            .setColor("YELLOW")
            .setDescription(`**Total Tex Coins**`)
            .addField(`Coins`, money)
            message.channel.send(embed)
        }
       
    } 


    let hourlytimeout = 3600000
    let hourlyamount = 10

    const embed7 = new Discord.MessageEmbed()
    .setAuthor("Tex Bot", "https://i.imgur.com/ZHUpgyz.png")
    .setColor("#FF0000")
    .setTitle("Become a Patron!")
    .setThumbnail("https://i.imgur.com/xkWumhG.png")
    .setURL("https://www.patreon.com/texbotpatreon")
    .addField("Only For Patrons", "This command can only be executed by patrons! [Become a patron now!](https://www.patreon.com/texbotpatreon)")
    
    if (message.content.startsWith("$hourly")) {
        let hourlytimeout = 3600000
        let hourlyamount = 10
        if (!message.member.roles.cache.has('744950464638091425')) return message.channel.send(embed7)
        let hourly = await db.fetch(`hourly_${message.author.id}`);

        if (hourly != null && timeout - (Date.now() - hourly) > 0) {
            let hourlytime = ms(hourlytimeout - (Date.now() - hourly));
            message.channel.send(`You already collected your hourly coins, you can come back in ${hourlytime.minutes}m ${hourlytime.seconds}s**`)


        } else {
            let embed = new Discord.MessageEmbed()
            .setAuthor(`Patron Only`, message.author.displayAvatarURL())
            .setColor("GREEN")
            .setDescription(`**Hourly Rewards**`)
            .addField(`Collected`, hourlyamount)
            message.channel.send(embed)

            db.add(`money_${message.author.id}`, hourlyamount)
            db.add(`hourly_${message.author.id}`, Date.now())
        }
    }

    let timeout = 86400000
    let amount = 10

    if (message.content.startsWith("$daily")) {
        let daily = await db.fetch(`daily_${message.author.id}`);

        if (daily != null && timeout - (Date.now() - daily) > 0) {
            let time = ms(timeout - (Date.now() - daily));
            message.channel.send(`You already collected your daily coins, you can come back in **${time.hours}h ${time.minutes}m ${time.seconds}s**`)


        } else {
            let embed = new Discord.MessageEmbed()
            .setAuthor(`Daily`, message.author.displayAvatarURL())
            .setColor("GREEN")
            .setDescription(`**Daily Rewards**`)
            .addField(`Collected`, amount)
            message.channel.send(embed)

            db.add(`money_${message.author.id}`, amount)
            db.add(`daily_${message.author.id}`, Date.now())
        }
    }


if (message.content.startsWith("$work")) {
    let timeoutworked = 300000
    let worked = await db.fetch(`worked_${message.author.id}`)

    if (worked != null && timeoutworked - (Date.now() - worked) > 0) {
        let time = ms(timeoutworked - (Date.now() - worked));
        message.channel.send(`You have already worked, come back in **${time.hours}h ${time.minutes}m ${time.seconds}s**`)


    } else {
        let amountearned = Math.floor(Math.random() * 30) + 1

        let jobs = ["Developer", "Scientist", "Mechanic", "Teacher", "Youtuber", "Doctor", "Shopkeeper"]
        let job = jobs[Math.floor(Math.random()* jobs.length)]

        let embed = new Discord.MessageEmbed()

        .setAuthor(`${message.author.tag}, it payed off`, message.author.displayAvatarURL())
        .setDescription(`${message.author}, you worked as a ${job} and earned ${amountearned} Tex Coins`)

        message.channel.send(embed)

        db.add(`money_${message.author.id}`, amountearned)
        db.set(`worked_${message.author.id}`, Date.now())
    } 
}

if (message.content.startsWith("$beg")) {
    let timeoutbegged = 300000
    let begged = await db.fetch(`begged_${message.author.id}`)

    if (begged != null && timeoutbegged - (Date.now() - begged) > 0) {
        let time = ms(timeoutbegged - (Date.now() - begged));
        message.channel.send(`You have already begged, come back in **${time.hours}h ${time.minutes}m ${time.seconds}s**`)


    } else {
        let amountearned = Math.floor(Math.random() * 25) + 1


        let embed = new Discord.MessageEmbed()

        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL())
        .setDescription(`${message.author}, you begged and got ${amountearned} Tex Coins`)

        message.channel.send(embed)

        db.add(`money_${message.author.id}`, amountearned)
        db.set(`begged_${message.author.id}`, Date.now())
    } 
}

if (message.content.startsWith("$pay")) {
    let users = message.mentions.members.first()

    let args = message.content.slice(prefix.length).split(' ')

    let member = db.fetch(`money_${message.guild.id}_${message.author.id}`)
  
    let embed1 = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(`:x: Mention someone to pay`);
  
    if (!users) {
        return message.channel.send(embed1)
    }
    let embed2 = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(`:x: Specify an amount to pay`);
    
    if (!args[1]) {
        return message.channel.send(embed2)
    }
    
    const embed6 = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(":x: You must enter an amount of money to pay!")
      
    if (isNaN(args[1])) return message.channel.send(embed6)
   
    let embed3 = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(`:x: You can't pay someone negative money`);
  
    if (message.content.includes('-')) { 
        return message.channel.send(embed3)
    }
    let embed4 = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(`:x: You don't have that much money`);
  
    if (member < args[1]) {
        return message.channel.send(embed4)
    }
  
    let embed5 = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription(`:white_check_mark:  You have payed ${user.user.username} ${args[1]} coins`);
  
    message.channel.send(embed5)
    db.add(`money_${message.guild.id}_${users.id}`, args[1])
    db.subtract(`money_${message.guild.id}_${message.author.id}`, args[1])
  
}
})

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

//help command

client.on('message', async message => {
    if(message.content.startsWith("$help")) {
        const helpmainembed = new Discord.MessageEmbed()
        .setAuthor("Tex Bot Commands", "https://i.imgur.com/ZHUpgyz.png")
        .setThumbnail("https://i.imgur.com/ZHUpgyz.png")
        .setColor("BLUE")
        .addField("💸 **Economy** 💸", "``$help economy``", true)
        .addField("🤣 **Meme** 🤣", "``$help meme``", true)
        .addField("😆 **Joke** 😆", "``$help joke``", true)
        .addField("🖥️ **CnJoke** 🖥️", "``$help cnjoke``", true)
        .addField("⚠️ **Covid-19** ⚠️", "``$help covid``", true)
        .addField("👷 **Support** 👷", "``$help support``", true)
        .addField("❗ **Invite** ❗", "``$help invite``", true)
        .addField("👮 **Moderator** 👮", "``$help moderator``", true)
        message.channel.send(helpmainembed)
    }
})
client.on('message', async message => {
    if(message.content.startsWith(`${PREFIX}help economy ${args[0]}`)) {
        const economyembed = new Discord.MessageEmbed()
        .setAuthor("Tex Bot", "https://i.imgur.com/ZHUpgyz.png")
        .setThumbnail("https://i.imgur.com/ZHUpgyz.png")
        .setTitle("Help for Economy")
        .setDescription("Write **$bal** to check your balance, **$daily** to claim your daily reward, **$hourly** to claim your hourly reward, **$work** to work, and **$beg** to beg for money!")
        message.channel.send(economyembed)
    }
})
client.on('message', async message => {
    if(message.content.startsWith(`${PREFIX}help meme ${args[0]}`)) {
        const memeembed = new Discord.MessageEmbed()
        .setAuthor("Tex Bot", "https://i.imgur.com/ZHUpgyz.png")
        .setThumbnail("https://i.imgur.com/ZHUpgyz.png")
        .setTitle("Help for Meme")
        .setDescription("Write **$meme** to generate a fresh funny meme!")
        message.channel.send(memeembed)
    }
})
client.on('message', async message => {
    if(message.content.startsWith(`${PREFIX}help joke ${args[0]}`)) {
        const jokeembed = new Discord.MessageEmbed()
        .setAuthor("Tex Bot", "https://i.imgur.com/ZHUpgyz.png")
        .setThumbnail("https://i.imgur.com/ZHUpgyz.png")
        .setTitle("Help for Joke")
        .setDescription("Write **$joke** to generate a joke!")
        message.channel.send(jokeembed) 
    }
})

client.on('message', async message => {
    if(message.content.startsWith(`${PREFIX}help cnjoke ${args[0]}`)) {
        const jokeembed = new Discord.MessageEmbed()
        .setAuthor("Tex Bot", "https://i.imgur.com/ZHUpgyz.png")
        .setThumbnail("https://i.imgur.com/ZHUpgyz.png")
        .setTitle("Help for CnJoke")
        .setDescription("Write **$cnjoke** to generate a joke!")
        message.channel.send(jokeembed)
    }
})        

client.on('message', async message => {
    if(message.content.startsWith(`${PREFIX}help support ${args[0]}`)) {
        const jokeembed = new Discord.MessageEmbed()
        .setAuthor("Tex Bot", "https://i.imgur.com/ZHUpgyz.png")
        .setThumbnail("https://i.imgur.com/ZHUpgyz.png")
        .setTitle("Help for Support")
        .setDescription("Write **$support** to join the support server")
        message.channel.send(jokeembed)
    }
})

client.on('message', async message => {
    if(message.content.startsWith(`${PREFIX}help invite ${args[0]}`)) {
        const jokeembed = new Discord.MessageEmbed()
        .setAuthor("Tex Bot", "https://i.imgur.com/ZHUpgyz.png")
        .setThumbnail("https://i.imgur.com/ZHUpgyz.png")
        .setTitle("Help for Invite")
        .setDescription("Write **$invite** to get invite link for the bot")
        message.channel.send(jokeembed)
    }
})

client.on('message', async message => {
    if(message.content.startsWith(`${PREFIX}help covid ${args[0]}`)) {
        const covidembed = new Discord.MessageEmbed()
        .setAuthor("Tex Bot", "https://i.imgur.com/ZHUpgyz.png")
        .setThumbnail("https://i.imgur.com/ZHUpgyz.png")
        .setTitle("Help for Covid-19")
        .setDescription("Write **$covid** to check global covid stats and **$covid {countryName}** to check country covid stats")
        .setFooter("{} means it is optional")
        message.channel.send(covidembed)
    }
})

client.on('message', async message => {
    if(message.content.startsWith(`${PREFIX}help moderator ${args[0]}`)) {
        const modembed = new Discord.MessageEmbed()
        .setAuthor("Tex Bot", "https://i.imgur.com/ZHUpgyz.png")
        .setThumbnail("https://i.imgur.com/ZHUpgyz.png")
        .setTitle("Help for Moderator")
        .setDescription("Write **$kick <memberName>** to kick someone and **$ban <memberName>** to ban someone!")
        .setFooter("<> means it is required")
        message.channel.send(modembed)
    }
})
//help command

//changelog commands


//invite command

client.on('message', async message => {
    if(message.content === "$invite") {
        const inviteembed = new Discord.MessageEmbed()
        .setAuthor("Tex Bot", "https://i.imgur.com/ZHUpgyz.png")
        .setThumbnail("https://i.imgur.com/ZHUpgyz.png")
        .setTitle("Invite The Bot To Your Server")
        .setURL("https://discord.com/api/oauth2/authorize?client_id=743768266777821214&permissions=8&scope=bot")
        .addField("👾 Invite Me! 👾", "[Invite](https://discord.com/api/oauth2/authorize?client_id=743768266777821214&permissions=8&scope=bot) The Bot!") 
        .setColor("GREEN")
        .setFooter("Invite this bot to your server!")
        message.channel.send(inviteembed)
    }
})

//invite command

//support command

client.on('message', async message => {
    if(message.content.startsWith("$support")) {
        const supportembed = new Discord.MessageEmbed()
        .setAuthor("Tex Bot", "https://i.imgur.com/ZHUpgyz.png")
        .setThumbnail("https://i.imgur.com/ZHUpgyz.png")
        .setTitle("Join The Support Server")
        .setURL("https://discord.gg/gF7d2HJ")
        .addField("👷 Join Support Server! 👷", "[Join](https://discord.gg/gF7d2HJ) Support Server!")
        .setColor("BLUE")
        .setFooter("Join the support server!")
        message.channel.send(supportembed)
    }
})

//owo

client.on('message', message => {
    const args = message.content.substring(PREFIX.length).split(" ")
    const mentionedMember = message.mentions.members.first()
    if(message.content.startsWith(`${PREFIX}slap`)) {
        if (!args[1]) return message.channel.send("You need to mention someone to slap... Why do you think i can slap the air? Well actually i can because of the photosyntheses of the molecules in ur brain cells. Get poofed")
        if (!mentionedMember) return message.channel.send("I can\'t find that member")
        if (mentionedMember.id === message.author.id) return message.channel.send("Why do you want slap yourself......Silly!");
        
        let slaps = ["https://cdn.discordapp.com/attachments/750584679488290856/751099676459139133/ezgif.com-video-to-gif_1.gif", "https://cdn.discordapp.com/attachments/750584679488290856/751091502272348310/ezgif.com-video-to-gif_2.gif", "https://cdn.discordapp.com/attachments/750584679488290856/751106998681993256/tenor.gif", "https://cdn.discordapp.com/attachments/750584679488290856/751107378753044521/slap_e.gif", "https://cdn.discordapp.com/attachments/750584679488290856/751107606772318319/tenor_1.gif", "https://cdn.discordapp.com/attachments/750584679488290856/751107955541278781/tenor_2.gif"]
        let slap = slaps[Math.floor(Math.random()* slaps.length)]

        let slapmessages = ["I bet it hurts...", "Dayum that hurts!", "Thank god i wasnt in place of that poor person", "He is now in hospital...", "I wish i had some hands like that 😄", "I wished I brought some popcorn with me"]
        let randomslapmessage = slapmessages[Math.floor(Math.random()* slapmessages.length)]

        let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag} slapped ${user.user.username}. ${randomslapmessage}`, message.author.displayAvatarURL())
        .setImage(slap)
        message.channel.send(embed)
        if (mentionedMember.id === message.author.id) return message.channel.send("Why do you want slap yourself......Silly!")      
    }  
})

client.on('message', message => {
    if (message.content.startsWith(`${PREFIX}kill`)) {
        if (!args[1]) return message.channel.send("You need to mention someone to kill. You cant just kill the air...")
        if (!mentionedMember) return message.channel.send("I can\'t find that member.")
        if (mentionedMember.id === message.author.id) return message.channel.send("Why do you wantto kill yourself....Suicide is bad!")

        let kills = ["https://cdn.discordapp.com/attachments/751086604952797257/751132159191941260/tenor_3.gif", "https://cdn.discordapp.com/attachments/751086604952797257/751348862282760273/tenor_4.gif", "https://cdn.discordapp.com/attachments/751086604952797257/751349018239696968/giphy.gif"]
        let kill = kills[Math.floor(Math.random()* slaps.length)]

        let killmessages = ["Rip...", "Oh god I can\'t watch it!", "Rest In Peace poor guy", "Well you killed him for no reason he probably respawned :/"]
        let randomkillmessages = killmessages[Math.floor(Math.random()* killmessages.length)]

        let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag} killed ${user.user.username}. ${randomkillmessages}`)
    }
})

client.login(process.env.token);