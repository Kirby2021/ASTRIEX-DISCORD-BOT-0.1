const { Client, Message, MessageAttachment, MessageEmbed } = require('discord.js');




module.exports = {
    name : 'kiss',
    category : 'fun',
    timeout: 1000,
    description : 'kiss the person',
    hidden: true,

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        const author = message.mentions.users.first() ||  message.member;
        const user = message.mentions.members.first() || message.member;
        const member = message.mentions.members.first() || message.member;
        if(message.channel.nsfw === false) return message.channel.send(`You are not allowed to use here This is not a NSFW channel`)
else if(message.channel.nsfw === true) {


    const gifs = [
        "https://i.pinimg.com/originals/db/01/03/db01034dd5f11698999eb8e8b425e05c.gif",
        "https://pa1.narvii.com/6818/37de4b55f07b1baf6f8d0bfc7548ec96a9c11d50_hq.gif",
        "https://pa1.narvii.com/6277/eeca6ab1a2823f10538e3d2022ca2caf7cc9da4e_hq.gif",
        "https://gifimage.net/wp-content/uploads/2017/09/anime-kiss-gif-1.gif",
        "https://data.whicdn.com/images/86609848/original.gif",
        "https://pa1.narvii.com/6444/f1efee7392e8c3ee79049bf1bb2918f9e8bea4e0_hq.gif",
        "http://pa1.narvii.com/5793/13cfd8c157649649fbc34616a43225b390f12e10_hq.gif",
        "https://media1.tenor.com/images/cb5957119e2731604cfbda799c6a9b58/tenor.gif?itemid=15384222",
        "https://i.pinimg.com/originals/32/d4/f0/32d4f0642ebb373e3eb072b2b91e6064.gif",
        "http://25.media.tumblr.com/1d2c7ffb87763ea3f2a88ab63fdf7b1d/tumblr_mh7xtrmf491qlo18xo1_500.gif"
        ]
        
        const index = Math.floor(Math.random() * gifs.length);
        const gif = gifs[index];
        
        
        
                message.channel.send(new MessageEmbed()
            
                    .setTitle(`${message.author.tag} kissed ${member.user.tag}`)
                    .setImage(gif)
                    .setColor("RANDOM")
        
                 )}
                }
}
        
