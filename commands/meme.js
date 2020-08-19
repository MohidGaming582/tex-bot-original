module.exports = {
    name: 'meme',
    description: 'This is a meme command!',
    execute(message, args){
        
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
    }

}