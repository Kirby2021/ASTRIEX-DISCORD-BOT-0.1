module.exports = {
    name : 'kick', //command name
    category : 'moderation',
    timeout: 2,
    run : async(client, message, args) => {
		
		if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('You do not have Kick Mmembers permissions ')
        if(!message.guild.me.hasPermission('KICK_MEMBERS')) return message.channel.send('I do not have permission');

        const Member = message.mentions.members.first()
		if (message.author.id === Member.id) {
      return message.channel.send(`You Cannot Kick Your-Self`)
        if(!Member) return message.channel.send('Please specify a member to kick');
        await Member.kick({ reason : args.slice(1).join(" ")})
        message.channel.send(`${Member.user.tag} was kicked from the server!`)
		}
    }
}