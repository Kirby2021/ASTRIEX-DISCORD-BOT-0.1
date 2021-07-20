
const { Client, Message, MessageAttachment, MessageEmbed } = require('discord.js');

module.exports = {
    name : 'ban',
    category : 'fun',
    timeout: 1,
    description : 'bans memeber',
    hidden: true,

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {

		const { k } = message.author
		const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]).user

        const { guild } = message
        const icon = message.guild.iconURL({ dynamic: true }) // Icon Of Server
        const roles = message.guild.roles.cache.map(e => e.toString()) // Roles Of Server
        const emojis = message.guild.emojis.cache.map(e =>  e.toString()) // Emojis Of Server
        const emojicount = message.guild.emojis.cache // EmojiCount If Server
        const members = message.guild.members.cache // Members In Server
        const create = message.guild.createdAt.toLocaleDateString() // Server Created Date



       


        if(message.members.mention("k"))

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You do not have ban member permissions.");
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("I do not have ban members permission.");

        let target = message.mentions.members.first();
        if (!target) return message.channel.send("You did not ping a member to ban!");
        let reason = args[1];
        if (!reason) return message.channel.send("You did not specify a reason!");


        

        target.ban({
            reason: reason
        });



        const str = args.slice(1).join(" ")
        if(message.content.includes('-a')) {
            user.send(str,'Server ID:-', `${guild.id}`, true)

        

        }else{

		
		

        user.send(`BANNED by = ${message.author.tag}    
		IN = ${message.guild.name}
		GUILD ID = ${guild.id}
		REASON = ${reason}`, true);


		const kk = new MessageEmbed()
		.setTimestamp()
		.setColor("#2700ff")
		.setTitle("Astriex Moderation")
		.setDescription(`
YOU WERE PUNISHED

Action = Banned

BANNED by = ${message.author.tag}    
IN = ${message.guild.name}
GUILD ID = ${guild.id}
FOR REASON = ${reason}`, true);

		await user.send(kk)
		
        
        
		

        const embed = new MessageEmbed()
        .setColor("#2700ff")
        .addField('Server ID:-', `${guild.id}` , true)
        .setTitle(`Banned ${target.user.tag} for ${reason}`)
            

        await message.channel.send(embed)
		
    }
}
}
