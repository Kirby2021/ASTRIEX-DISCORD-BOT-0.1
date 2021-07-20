const { MessageEmbed, Client, Message } = require("discord.js");

module.exports = {
    name: "membercount",
    aliases: ["server membercount", "members"],
    description: "Get information on a servers membercount",
    timeout: 0.1,
  };



 module.exports.run = async (client, message, args) => {
const members = message.guild.members.cache

const embed = new MessageEmbed()


.setColor("#004bff")

.addField('**Members**', `${members.size}`)
.setTimestamp()


message.channel.send(embed)






 }