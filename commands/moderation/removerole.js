const { Message } = require('discord.js')

module.exports = {
    name : 'removerole',
    category : 'moderation',
    timeout: 0.1,
    run : async(client, message, args) => {
        //lets use parameters (optional)
        /**
         * @param {Message} message
         */
        //so firstly we will check whether the author of the message has permissions
        //this line means if the author doesn't have manage roles permission it will stop the process and send the following text
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('You do not have permission.')
        //next we define some variables
        const user =  message.mentions.users.first() || message.guild.members.cache.get(args[0]).user
        const target = message.mentions.members.first() //member = mentions
        if(!target) return message.channel.send('No member specified') //when no member is pinged
        const role = message.mentions.roles.first() // roles = mentions
        if(!role) return message.channel.send('No role specified') //when no role is specified or pinged
        //now the code!
        await target.roles.remove(role) // removeing the role to the user
        message.channel.send(`${target.user.username} roles has been removed`)
        user.send("YOUR ROLE HA BEEN REMOVED") //this is optional and editable
    }
}