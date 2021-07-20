const { Client, Message, MessageAttachment, MessageEmbed } = require('discord.js');




module.exports = {
    name : 'slap',
    category : 'fun',
    timeout: 1000,
    description : 'Slaps the person',
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

    const gifs = [
        "https://images-ext-1.discordapp.net/external/N62oAmXji3QUs5pgtMeXY-EAJxyqrNebCbq_pTrmBME/https/cdn.weeb.sh/images/SJ-CQytvW.gif?width=320&height=180",
        "https://gifimage.net/wp-content/uploads/2017/07/anime-slap-gif-13.gif",
        "https://images-ext-1.discordapp.net/external/PTu9TahlTEaW9ppqMriRgas0bC6zVSIrkIteZy9X13w/https/cdn.weeb.sh/images/HkJ6-e91z.gif?width=320&height=180",
        "https://media1.tenor.com/images/af36628688f5f50f297c5e4bce61a35c/tenor.gif?itemid=17314633",
        "http://gifimage.net/wp-content/uploads/2017/07/anime-slap-gif-6.gif",
        "https://pa1.narvii.com/6212/d2358d796f91aca476829a0344559d40f0c11a11_hq.gif",
        "http://pa1.narvii.com/6046/52f4345a8333e73db5c3bbae289ce8b8cb5bb440_hq.gif",
        "https://images-ext-2.discordapp.net/external/uO_DugPUt1LqxRszJeFpEtSBzXXxkAD6411eleRaPAs/https/cdn.zerotwo.dev/SLAP/a34c9068-686b-4d56-af6f-1e64a94f6ef2.gif?width=320&height=180",
        "https://images-ext-2.discordapp.net/external/uO_DugPUt1LqxRszJeFpEtSBzXXxkAD6411eleRaPAs/https/cdn.zerotwo.dev/SLAP/a34c9068-686b-4d56-af6f-1e64a94f6ef2.gif?width=320&height=180",
        "https://images-ext-2.discordapp.net/external/GolFsgYDybZBPBSJXkbKtX1Tv1ctVNKBnMpy3comVxw/https/cdn.zerotwo.dev/SLAP/797e3a1b-2c5e-4556-adf1-3f10afa0d76e.gif?width=320&height=180",
        "https://images-ext-1.discordapp.net/external/JEvY-Z99JVlCPdePUY9qYI-bFbKZEYTDMi3DkxCrNZQ/https/cdn.zerotwo.dev/SLAP/cf972400-4ce4-4a3a-8fbf-33d1bc5f142f.gif?width=320&height=174",
        "https://images-ext-2.discordapp.net/external/HLpv0bHgm2iYCoibN2Th_CTiU04UnwFS7oSw3RoKSS8/https/cdn.zerotwo.dev/SLAP/8033a02c-b983-4cec-bbb7-e57c0361103b.gif?width=320&height=180",
        "https://images-ext-2.discordapp.net/external/a03OHWv8H6x_Ihy18cMDaffbYWst_XgsUzQQiOiplaE/https/cdn.zerotwo.dev/SLAP/7c5490f6-7f70-494b-8f84-73c1c9aee03a.gif?width=320&height=181",
        "https://i.kinja-img.com/gawker-media/image/upload/s--KqdFW1XS--/c_scale,fl_progressive,q_80,w_800/zzpo5oucegaa7clwzvn6.gif",
        "https://i.pinimg.com/originals/b9/21/e9/b921e9ead0acc98d83abb1c353f3cb14.gif",
        "https://images-ext-2.discordapp.net/external/P5pxtPaRB973XTx8HNgULHRHuUB_o80O4nAjbKedwYM/https/cdn.weeb.sh/images/B1-nQyFDb.gif?width=320&height=182",



        ]
        
        const index = Math.floor(Math.random() * gifs.length);
        const gif = gifs[index];
        
        
                message.channel.send(new MessageEmbed()
                    .setTitle(`${message.author.tag} slapped ${member.user.tag}`)
                    .setImage(gif)
                    .setColor("RANDOM")
        
                 )}
                }

        
