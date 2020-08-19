
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

    client.commands.set(command.name, command);
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


client.login(process.env.token);