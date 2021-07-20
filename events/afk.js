const { afk } = require('../Collection');
const client = require('../index');
const moment = require('moment');
const MessageEmbed = require("discord.js")
client.on('message', async(message)=> {
	if(!message.guild || message.author.bot) return;

	const mentionMember = message.mentions.members.first();
	if(mentionMember) {
		const data = afk.get(mentionMember.id);

		if(data) {
			const [timestamp, reason] = data;
			const timeAgo = moment(timestamp).fromNow();




message.reply(`He/She is currently apk (${timeAgo})\nReason:${reason}`)


		}
	}
 
 
	const getData = afk.get(message.author.id);
	if(getData) {
		afk.delete(message.author.id);
		message.reply(`Welcome back I have removed Your afk`)
	}
})