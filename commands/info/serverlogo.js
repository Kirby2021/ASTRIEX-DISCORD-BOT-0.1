const { MessageEmbed } = require("discord.js")

module.exports = { // Your Command Handler
    name : 'serverlogo',
    
    description: 'Gives logo of Server',
    timeout: 0.1,

    run: async(client, message, args) => {

        const { guild } = message
        const icon = message.guild.iconURL({ dynamic: true }) // Icon Of Server
        const roles = message.guild.roles.cache.map(e => e.toString()) // Roles Of Server
        const emojis = message.guild.emojis.cache.map(e =>  e.toString()) // Emojis Of Server
        const emojicount = message.guild.emojis.cache // EmojiCount If Server
        const members = message.guild.members.cache // Members In Server
        const create = message.guild.createdAt.toLocaleDateString() // Server Created Date

        const embed = new MessageEmbed()
        .setColor("#34ebe5")
		.setFooter(message.author.username, message.author.displayAvatarURL)
        
        .setImage(`${icon}`)
        
        
        
      
        message.channel.send(embed)
    }
}