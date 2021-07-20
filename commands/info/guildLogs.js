const client = require("../../index")
const { MessageEmbed } = require('discord.js');
const logsChannel = '852508811167006741';


client.on('guildCreate', (guild) => {
    client.channels.cache.get(logsChannel).send(
        new MessageEmbed()
        .setTitle('Add in server!')
        .addField('Name', `${guild.name}` )
        .addField('ID', `${guild.id}`) 
        .addField('Members', `**${guild.memberCount} members!**`)
        .addField('Owner Name',`${guild.owner}`)
		.addField('Owner ID', `${guild.owner.id}`)
        .setFooter(`Currently in ${client.guilds.cache.size} guilds!`)
        .setThumbnail(guild.iconURL({ dynamic: true }))
        .setTimestamp()
        .setColor('#0001ff')
    )
})

client.on('guildDelete', (guild) => {
    client.channels.cache.get(logsChannel).send(
        new MessageEmbed()
        .setTitle('Removed From server!')
        .addField('Name', `${guild.name}` )
        .addField('ID', `${guild.id}`) 
        .addField('Members', `**${guild.memberCount} members!**`)
        .addField('Owner Name', `${guild.owner}` )
		.addField('Owner ID', `${guild.owner.id})`)
        .setFooter(`Currently in ${client.guilds.cache.size} guilds!`)
        .setThumbnail(guild.iconURL({ dynamic: true }))
        .setTimestamp()
        .setColor('#ff0004')
    )
})