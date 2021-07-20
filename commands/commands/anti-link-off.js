const Discord = require('discord.js');
const config = require('../../config.json');
const emote = require('../../configs/emotes.json')
const db = require('quick.db')

module.exports = {

        name: 'antilink-off',
		timeout: 1,
        description: 'Disables the antilink in the Channel',
        
        usage: '<channel>',
       
    
    run: async (client, message, args) => {

        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`${emote.error} Missing Permissions!`
        )
    try {
        let a = db.fetch(`links_${message.guild.id}`)

        if (!a) {
            return message.channel.send(` ${emote.error} Cannot Disable `
        )
        } else {
            let channel = message.guild.channels.cache.get(a)
            db.delete(`links_${message.guild.id}`)
    
            message.channel.send(`${emote.verified} anti-link is off in \`${channel.id}\``
        )
        }
        return;
    } catch {
        return message.channel.send(`${emote.error} Missing Permissions`)
    }

    }
};