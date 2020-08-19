module.exports = {
    name: 'joke',
    description: 'This is a joke command',
    execute(message, args){

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
        
    }
}