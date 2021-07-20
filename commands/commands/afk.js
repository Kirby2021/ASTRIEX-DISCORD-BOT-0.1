const { Client, Message, MessageEmbed } = require('discord.js');
const { astriex } = require ('../../index.js')
const { afk } = require("../../Collection");
module.exports = {
    name: 'afk',
    timeout: 1,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(astriex, message, args) => {
		const reason = args.join(" ") || "No Reason"
		afk.set(message.author.id, [ Date.now(), reason]);

		message.reply(`I set your AFK: \`${reason}\``)
           },
		};