const {Message, MessageEmbed}= require('discord.js')

module.exports=  {
    name : 'unmute', 
    category : 'moderation',
    timeout: 1,

    /**
     * @param {Message} message
     */
    run : async(client, message, args) => {
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        if(!Member) return message.channel.send('Member not found')

        const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');

        await Member.roles.remove(role)

        message.channel.send(`${Member.displayName} is now unmuted`)





				const user =  message.mentions.users.first() || message.guild.members.cache.get(args[0]).user
        		const { guild } = message
	    


const reason = args.slice(1).join(" ") || "No Reason"
	
		
user.send
		
		const kk = new MessageEmbed()
	

		.setTimestamp()
		.setColor("BLACK")
		
		.setDescription(`

**Astriex Moderation**
Your punishment has been updated in ${message.guild.name}
**Action**
Unmuted
**Reason**
${reason} `, true);




		await user.send(kk)
		
}
	}
