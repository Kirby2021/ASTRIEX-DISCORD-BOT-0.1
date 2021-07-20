const { Client, Message, MessageEmbed } = require('discord.js');
const figlet = require("figlet");

module.exports = {
    name: 'text-art',
	aliases : ["text", "text art"],
    timeout: 1,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
		figlet.text(args.join(" "), {
			fonst: "",
		}, async(err, data) => {
			message.channel.send(`\`\`\`${data}\`\`\``)
		})
           },
		};