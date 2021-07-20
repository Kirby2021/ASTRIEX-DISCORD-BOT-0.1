const { Client, Message, MessageEmbed } = require("discord.js")
const math = require('mathjs');
module.exports = {
    name: 'math',
    timeout: 0.1,
    category : 'calculation commands',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        try {
            message.channel.send(
                new MessageEmbed()
                .addField('Question', args.join(" "))
                .addField('Solution', math.evaluate(args.join(" ")))
            )
        } catch (err) {
            message.channel.send('Your question is not vaild!')
        }

    },

};
