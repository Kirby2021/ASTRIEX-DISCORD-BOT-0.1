const { MessageEmbed } = require('discord.js');
const Schema  = require('../../models/chatbot-channel');

module.exports = {
    name : 'setchatbot',
    timeout: 1,

    run: async (client, message, args) => {
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('You do not have permission')
        const channel = message.mentions.channels.first();
        if(!channel) return ("Please provide a channel")
        Schema.findOne({ Guild: message.guild.id }, async(err, data) => {
            if (data) data.delete();
            new Schema({
                Guild: message.guild.id,
                Channel: channel.id
            }).save()

            const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            
            .setColor('RED')
            .addFields(`Saved chatbot channel to the channel u mentioned`)
            
            await message.channel.send(embed)
        })
       
    }
}