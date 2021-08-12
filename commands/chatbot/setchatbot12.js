const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
const config = require('../../config.json');
const emote = require('../../configs/emotes.json')

const fs = require("fs")

module.exports = {
   
        name: 'set12',
		timeout: 1,
        description: 'Sets a ChatBot Channel',
        aliases: ["setchatbotchannel"], 
        usage: '<channel>',
        accessableby: "MANAGE_GUILD",
    
    run: async (client, message, args) => {
    
        
let sembed = new MessageEmbed()
.setColor("BLUE")
.setDescription(`**Prefix set as u said** ${args[0]}`)
.setTimestamp()


message.channel.send(sembed)

}

}