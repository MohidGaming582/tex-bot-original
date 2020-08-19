module.exports = {
    name: 'help',
    description: 'This is a help command!',
    execute(message, args){

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
    }
}