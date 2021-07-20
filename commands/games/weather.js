const weather = require('weather-js');
const config = require('../../index')
const Discord = require('discord.js');
const {MessageEmbed} = require("discord.js");

module.exports = {
    name: 'weather',
    aliases: ['wthr'],
    run: async (client, message, args) => {
        weather.find({ search: args.join(" "), degreeType: 'F' }, function(error, result) {
            // 'C' can be changed to 'F' for farneheit results
            if (!args[0]) return message.reply(
                new MessageEmbed()
                    .setTitle('Error Usage')
                    .setDescription(`Usage: ${client.prefix}weather <place>`)
            );

            if (result === undefined || result.length === 0) return message.reply(
                new MessageEmbed()
                    .setTitle('Error 404')
                    .setDescription(`Couldn't Find This Country`)
            );

            var current = result[0].current;
            var location = result[0].location;

            const weatherinfo = new Discord.MessageEmbed()
                .setDescription(`**${current.skytext}**`)
                .setAuthor(`Weather forecast for ${current.observationpoint}`)
                .setThumbnail(current.imageUrl)
                .setColor(config.COLOR)
                .addField('Timezone', `UTC${location.timezone}`, true)
                .addField('Degree Type', 'Celsius', true)
                .addField('Temperature', `${current.temperature}°`, true)
                .addField('Wind', current.winddisplay, true)
                .addField('Feels like', `${current.feelslike}°`, true)
                .addField('Humidity', `${current.humidity}%`, true)


            message.channel.send(weatherinfo)
        })
    }
}