const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "hug",
    timeout: 1,
    description: 'hug someone!',

    run: async (client, message, args) => {


        const author = message.mentions.users.first() ||  message.member;
        const user = message.mentions.members.first() || message.member;
        const member = message.mentions.members.first() || message.member;
      
     
        const url = 'https://some-random-api.ml/animu/hug';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error occured!`)
        }

        const embed = new MessageEmbed()
        .setTitle(`${message.author.tag} hugged ${member.user.tag}`)
            .setImage(data.link)
            .setColor("RANDOM")

        await message.channel.send(embed)
    }
}

        











