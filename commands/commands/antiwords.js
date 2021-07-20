const Discord = require('discord.js');
const config = require('../../config.json');
const bot = new Discord.Client();

module.exports = {
    
        name: 'lock',
		timeout: 1,
        description: '',
        aliases: [""],
        usage: '',
        accessableby: "",
    
    run: async (bot, message, args) => {
    let channeltolock = message.mentions.channels.first() || message.guild.channels.cache.get(args[1])

if(!channeltolock) return message.reply(`No Channel Mentioned !`);

let everyone = message.guild.roles.cache.get(message.guild.id)

channeltolock.updateOverwrite(everyone, {
    SEND_MESSAGES: false
    
  },[`REPONSIBLE MODERATOR | ${message.author.tag}`])
    .then(message.reply(`Locked Channel ${channeltolock} ! `))
    .catch(console.error);
    }
}