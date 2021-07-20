const { Client, Message } = require('discord.js');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name : 'detail',
    timeout: 0.1,

    run : async(client, message, args) => {
      const botssize = message.guild.members.cache.filter(m=>m.user.bot).map(m=> `<@${m.id}> [ ${m.user.username} ]
      **ID :** \`${m.id}\``);
      const x = new MessageEmbed()
      .setColor('GREEN')
      .setDescription(`${botssize.join('\n \━\━\━\━\━\━\━\━\━\━\━\━\━\━\━\━\━\━\ \n')}`)
      .setFooter(`Total Bots : ${message.guild.members.cache.filter(member => member.user.bot).size}`)
      message.channel.send(x)
    }
}