const { Client, Message, MessageAttachment, MessageEmbed } = require('discord.js');
const db = require("quick.db");

module.exports = {
  name: "warnings",
  timeout: 1,
  description: "Get the warnings of yours or mentioned person",
  category: "moderation",
 
 async run (client, message, args) {
    const user = message.mentions.members.first() || message.author;

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

    if (warnings === null) warnings = 0;

  



	const embed = new MessageEmbed()
        .setColor("#2700ff")
        .setDescription(`${user} have **${warnings}** warning(s)`)
        
            await message.channel.send(embed)
  }
};