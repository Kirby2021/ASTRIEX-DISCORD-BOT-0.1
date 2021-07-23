const { MessageEmbed } = require('discord.js')
const os = require('os')
module.exports = {
    name: "botinfo",
	timeout: 1,
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('Bot Stats')
            .setColor('#000000')
            .addFields(
                {
                    name: '🌐 Servers',
                    value: `Serving ${client.guilds.cache.size} servers.`,
                    inline: true
                },
                {
                    name: '📺 Channels',
                    value: `Serving ${client.channels.cache.size} channels.`,
                    inline: true
                },
                
            
                {
                    name: '⏳ Ping',
                    value: `${Math.round(client.ws.ping)}ms`,
                    inline: true
                },
                {
                    name: 'Join Date',
                    value: client.user.createdAt,
                    inline: true
                },
				{
                    name: 'Developers',
					description: 'none',
                    value: '\`\`\`VISHAL#1010\`\`\`',
                    inline: true
                },
            )
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        await message.channel.send(embed)
    }
}