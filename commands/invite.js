module.exports = {
    name: 'invite',
    description: 'This is a n invite command!',
    execute(message, args){

        client.on('message', async message => {
            if (message.content === "$invite") {
                message.channel.send("Invite this bot to your server https://discord.com/api/oauth2/authorize?client_id=743768266777821214&permissions=8&scope=bot")
            }
        })
    }
}