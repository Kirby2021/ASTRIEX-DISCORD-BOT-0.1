const Discord = require('discord.js');
const config = require('../../config.json');
const emote = require('../../configs/emotes.json')
const db = require('quick.db')

module.exports = {
   
        name: 'antilink-on',
		timeout: 1,
        description: 'Sets a anti-link in Channel',
        aliases: [""], 
        usage: '<channel>',
        
    
    run: async (client, message, args) => {
    
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`${emote.error} Missing Permissions `
        )
if (!args[0]) {
  let b = await db.fetch(`links_${message.guild.id}`);
  let channelName = message.guild.channels.cache.get(b);
  if (message.guild.channels.cache.has(b)) {
    return message.channel.send(
      `**${emote.verified} activated anti-link \`${channelName.name}\`!**`
    );
  } else
    return message.channel.send(`${emote.error} Channel not Provided`)
}
    let channel = message.mentions.channels.first() || client.guilds.cache.get(message.guild.id).channels.cache.get(args[0]) || message.guild.channels.cache.find(c => c.name.toLowerCase() === args.join(' ').toLocaleLowerCase());

    if (!channel || channel.type !== 'text') return message.channel.send(`${emote.error} not a valid channel`
        )

    try {
        let a = await db.fetch(`links_${message.guild.id}`)

        if (channel.id === a) {
            return message.channel.send(`${emote.info} anti-link is already on here`
        )
        } else {
            db.set(`links_${message.guild.id}`, channel.id)

           message.channel.send(`${emote.verified} activated anti-link \`${channel.id}\``
        )
        }
    } catch {
        return message.channel.send(`**${emote.error} Missing Permissions**`);
    }

    }
}