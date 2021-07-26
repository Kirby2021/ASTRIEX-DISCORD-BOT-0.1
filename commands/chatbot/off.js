const { MessageEmbed } = require("discord.js");
const Schema = require("../../models/chatbot-channel");
const { confirmation } = require("reconlx")

module.exports = {
    name: 'stop-chatbot',
    timeout: 1,
    run: async(client, message, args) => {

         if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`❌ | You need to be an admin to disable chatbot!`);

         Schema.findOne({ Guild: message.guild.id }, async(err, data) => {
            if (data) data.delete();
            if(!data) return message.channel.send("You didn't setup the chatbot");
            await message.channel.send("Chatbot data has been succefully removed!")


                
                })
        
        }
    }