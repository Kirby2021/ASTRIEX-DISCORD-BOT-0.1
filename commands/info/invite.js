const { MessageEmbed, Client, Message } = require("discord.js");

module.exports = {
    name: "invite",
    
    description: "Get information on a servers membercount",
    timeout: 0.1,
  };



 module.exports.run = async (client, message, args) => {
const members = message.guild.members.cache

const embed = new MessageEmbed()


.setColor("BLUE")

.setDescription(`**INVITE ME BY CLICKING ON THIS LINKS**
<a:dots:830670049093615626> [CLICK HERE](https://discord.com/api/oauth2/authorize?client_id=866666448269213726&permissions=8589934591&scope=bot%20applications.commands)`)
.setTimestamp()


message.channel.send(embed)






 }