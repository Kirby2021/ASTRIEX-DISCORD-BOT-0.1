const { Client, Message, MessageEmbed } = require('discord.js');
const figlet = require("figlet");

module.exports = {
    name: 'shutdown',
    timeout: 1,

run: async function (client, message, args) {
    if (message.author.id !== `731498996241006603`) return message.reply("‼❌**YOU DONT HAVE PERMISSION TO RUN DEVELOPER COMMANDS** ")
    
    const embed = new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL())
      .setColor("ORANGE")
      .setFooter(client.user.username)
      .setTitle(`Shutdown ?`)
      .setDescription('✅ Click this to shutdown me \n ❌ Click this to cancel');
      
      const msg = await message.channel.send(embed);
      
      await msg.react("✅");
      await msg.react("❌");

      const collector = msg.createReactionCollector((reaction, user) => user.id === message.author.id);
      collector.on("collect", async(reaction) => {

      if(reaction._emoji.name === "❌"){
      return msg.delete();
      }
      
      if(reaction._emoji.name === "✅"){
      message.channel.send("**Shutting down...** \n `System will be down after 5 mins`").then(() => {
        process.exit(1);
        })
      }

      await reaction.users.remove(message.author.id);
      });

},
}