const { Client, Message, MessageEmbed } = require("discord.js")
const math = require('mathjs');
module.exports = {
    name: '24/7',
    timeout: 0.1,
    category : 'calculation commands',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {






let channel = message.member.voice.channel
if(!channel) return message.channel.send("You have to be in a voice channel to use this command")
channel.join()
message.channel.send("Voice channel joined!")
}
}
