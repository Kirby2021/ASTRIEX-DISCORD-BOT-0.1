const Discord = require('discord.js');
const db = require('quick.db');
const {MessageEmbed} = require("discord.js");

module.exports = {
    name: 'ranklb',
	timeout: 1,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
    if(!message.content.startsWith('**'))return;  

    
     const embed = new MessageEmbed()
    .setDescription(`Level Leaderboard: \`**leaderboard levels\` || Message Leaderboard: \`**leaderboard messages\``)
    .setColor("#FFFFFF")


  if(!args[0]) return message.channel.send(embed)

    if (args[0] == 'levels') {
    let level = db.startsWith(`level_${message.guild.id}`, { sort: '.data'})
    let content = "";

    for (let i = 0; i < level.length; i++) {
        let user = bot.users.get(level[i].ID.split('_')[2]).username

        content += `${i+1}. ${user} ~ ${level[i].data}\n`
    
      }

     const embed = new MessageEmbed()
    .setDescription(`**${message.guild.name}'s Level Leaderboard**\n\n${content}`)
    .setColor("#FFFFFF")

    message.channel.send(embed)
  } else if(args[0] == 'messages') {
    let messages = db.startsWith(`messages_${message.guild.id}`, { sort: '.data'})
    let content = "";

    for (let i = 0; i < messages.length; i++) {
        let user = bot.users.get(messages[i].ID.split('_')[2]).username

        content += `${i+1}. ${user} ~ ${messages[i].data}\n`
    }

    const embed = new Discord.RichEmbed()
    .setDescription(`**${message.guild.name}'s Messages Leaderboard**\n\n${content}`)
    .setColor("#FFFFFF")

    message.channel.send(embed)

  }
}

}