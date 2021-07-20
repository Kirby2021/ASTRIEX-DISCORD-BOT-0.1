const { MessageEmbed, Client, Message } = require("discord.js");
module.exports = {
    name: "whois",
    aliases: ["userinfo", "user-info"],
    description: "Get information on a certain user",
    timeout: 0.1,
  };
 
  
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  
  module.exports.run = async (client, message, args) => {
    const recon = require("reconlx");
    // Destructure the package
    const daysAgo = recon.DaysAgo;
    const discord = require("discord.js");
  
    if (
      message.mentions.users.last() /*|| message.mentions.users.last().id === client.user.id*/
    ) {
      const wuser = message.mentions.users.last();
      const mUser = message.mentions.members.last();
      const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setAuthor(wuser.username, wuser.displayAvatarURL({ dynamic: true }))
        .setFooter(message.author.username, message.author.displayAvatarURL)
        .setTitle(`User info for ${wuser.username}`)
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true}))
        .addFields(
          {
            name: "User tag",
            value: mUser.user.tag,
            inline: true,
          },
          {
            name: "Is bot",
            value: mUser.user.bot,
            inline: true,
          },
          {
            name: "ID",
            value: message.author.id,
            inline: true,
          },
          {
            name: "Nickname",
            value: mUser.nickname || "None",
            inline: true,
          },
          {
            name: "Joined server",
            value: new Date(mUser.joinedTimestamp).toLocaleDateString(),
            inline: true,
          },
          {
            name: "Joined Discord",
            value:
              new Date(wuser.createdTimestamp).toLocaleDateString() +
              ` (${daysAgo(wuser.createdAt)})`,
            inline: true,
          },
          {
            name: "Role count",
            value: mUser.roles.cache.size - 1,
            inline: true,
          },
          {
            name: "Roles",
            value: mUser.roles.cache.map((role) => `<@&${role.id}>`),
            inline: true,
          },
      
        );
      message.channel.send(embed);
    } else {
      //        if (message.mentions.users.last().id !== this.client.user.id || message.mentions.users.last().id === this.client.user.id) {
      const e = new MessageEmbed()
        .setColor(client.color)
        .setAuthor(
          message.author.tag,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTitle(`User info for ${message.author.username}`)
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .addFields(
          {
            name: "User tag",
            value: message.author.tag,
            inline: true,
          },
          {
            name: "ID",
            value: message.author.id,
            inline: true,
          },
          {
            name: "Is bot",
            value: message.author.bot,
            inline: true,
          },
          {
            name: "Nickname",
            value: message.member.nickname || "None",
            inline: true,
          },
          {
            name: "Joined server",
            value: new Date(message.member.joinedTimestamp).toLocaleDateString(),
            inline: true,
          },
          {
            name: "Joined discord",
            value:
              new Date(message.author.createdTimestamp).toLocaleDateString() +
              ` (${daysAgo(message.author.createdAt)})`,
            inline: true,
          },
          {
            name: "Role count",
            value: message.member.roles.cache.size - 1,
            inline: true,
          },
          {
            name: "Roles",
            value: message.member.roles.cache.map((role) => `<@&${role.id}>`),
            inline: true,
          },
         
        );
      message.channel.send(e);
    }
  };
  