module.exports = {
    name: 'covid',
    description: 'This is a covid command!',
    execute(message, args){

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
    }
}