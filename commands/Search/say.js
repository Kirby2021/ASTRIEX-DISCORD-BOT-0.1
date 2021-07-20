const { Client, Message, MessageEmbed } = require("discord.js");



module.exports = {
  name: "say",
  category : 'fun',
    timeout: 0.1,
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
 
    
    const sayEmbed = arguments()
        
        .setDescription(args.join(" "))
        

    message.channel.send(sayEmbed)
  }
} 
