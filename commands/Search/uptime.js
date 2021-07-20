const Discord = require("discord.js");
const Client = new Discord.Client();
const MessageEmbed = ("../../index.js")
module.exports = {
    name: "uptim",
    timeout: 1,
    run: async(Client, message, args) => {
        let id = '819421344813809685';
        if(message.author.id !== id){
            return;
        } else {
            let days = Math.floor(Client.uptime / 86400000);
    let hours = Math.floor(Client.uptime / 3600000) % 24;
    let minutes = Math.floor(Client.uptime / 60000) % 60;
    let seconds = Math.floor(Client.uptime / 1000) % 60;

    const uptimeE = new MessageEmbed()
    .setTitle("UPTIME")
    .setColor("#2700ff")
    .setDescription(`\nDay(S) Online: ${days}\n\nHour(S) Online: ${hours}\n\nMinute(S) Online: ${minutes}\n\nSecond(S) Online: ${seconds}`)
     .setFooter(`Requested By : ${message.author.username}`, message.author.displayAvatarURL({
                    dynamic: true
                }))
    message.channel.send(uptimeE)
    return;
        }
    }
}
