const { Client, Message, MessageAttachment, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'avatar',
    description : 'Displays the avatar',
    category : 'commands',
    timeout: 60 * 60,
    /**
     * @param {Client} client
     * @param {Message} Message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        const member = message.mentions.members.first() || message.member;

        message.channel.send(
            new MessageEmbed()
            .setTitle(`${member.user.tag}'s avatar`)
            .setImage(member.user.displayAvatarURL({ dynamic: true, size: 512}))
            .setColor("RANDOM")
        );
    },
};