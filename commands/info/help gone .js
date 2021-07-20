const { MessageEmbed } = require('discord.js');
const client = require('../..');

module.exports = {
    name : 'help',
	aliases: ['HELP'],
    timeout: 1,


    
  
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        
        const embed = new MessageEmbed()

            
            .setColor("BLUE")
			
            .setTimestamp()
            .setFooter(message.author.username, message.author.displayAvatarURL)
            
            .setDescription(`[ASTRIEX HELP COMMAND](https://discord.com/api/oauth2/authorize?client_id=866666448269213726&permissions=8589934591&scope=bot%20applications.commands)\nAstriex prefix is \a!
            
            
INFO 
> \`\`\`help, ping, avatar, serverinfo, userinfo, snipe, translate, hack, say, math, urban\`\`\`

MODERATION COMMANDS
> \`\`\`announce, kick, ban, mute, unmute, tempmute, warn, check-warn, resetwarns, addrole, removerole, antilink-on, anilink-off\`\`\`

FUN
> \`\`\`connect4, snakegame, hangman, tictactoe, trivia, weather, translate\`\`\`

GIVEAWAY
> \`\`\`gstart, gend, greroll\`\`\`

IMAGE
> \`\`\`image, trigger, meme, kiss, hug, slap, punch\`\`\`

<:AstriexMusic:866690332925100123> MUSIC
> \`\`\`clear-queue, loop, lyrics, nowplaying, pause, play, queue, resume, shuffle, skip, stop\`\`\`

CHATBOT
> \`\`\`setchatbot, disablechatbot\`\`\`

BOT-INFO
> \`\`\`botinfo, uptime, detail \`\`\`

`) 

    await message.channel.send(embed)
            
    
    }
}