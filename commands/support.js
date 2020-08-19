module.exports = {
    name: 'support',
    description: 'This is a support command!',
    execute(message, args){

        client.on('message', async message => {
            if (message.content === "$support") {
                message.channel.send("Join our support server https://discord.gg/pwRVdQb")
            }
        })
        
    }
}