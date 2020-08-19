module.exports = {
    name: 'economy',
    description: 'This is an economy command!',
    execute(message, args){
        client.on('message', async message => {
            if(message.content.startsWith("$bal")) {
                let user = message.mentions.users.first() || message.author
                let money = db.fetch(`money_${user.id}`)
        
                if (money === null) money = 0
        
                else {
                    let embed = new Discord.MessageEmbed()
                    .setAuthor(`Personal Bank`, message.author.displayAvatarURL)
                    .setColor("YELLOW")
                    .setDescription(`**Total Tex Coins**`)
                    .addField(`Coins`, money)
                    message.channel.send(embed)
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
                .setDescription(`${message.author}, you worked as a ${job} and earned ${amountearned}`)
        
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
        
                .setAuthor(`${message.author.tag}, it payed off`, message.author.displayAvatarURL())
                .setDescription(`${message.author}, you begged and got ${amountearned}`)
        
                message.channel.send(embed)
        
                db.add(`money_${message.author.id}`, amountearned)
                db.set(`begged_${message.author.id}`, Date.now())
            } 
        }
        
        
        
        })
        
    }
}