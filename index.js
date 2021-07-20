const {Collection, Client, Discord} = require('discord.js')
const fs = require('fs')
const fetch = require("node-fetch");
const db =require("quick.db");
const client = new Client({
    disableEveryone: true,
	
	
})
const astriex = new Client({
	disableEveryone: true,
	
})
module.exports = client;
const Timeout = new Collection();
const config = require('./config.json')
const prefix = config.prefix
const ms = require('ms')
const token = config.token

//___________________________________________________________________________                          CLIENTS

client.commands = new Collection();
client.snipes = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");


["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 
//=========================================================================
//                            STATUS 
//_________________________________________________________________________
client.on("ready", () => {
    console.log(`${client.user.username} ✅

	
░█████╗░░██████╗████████╗██████╗░██╗███████╗██╗░░██╗
██╔══██╗██╔════╝╚══██╔══╝██╔══██╗██║██╔════╝╚██╗██╔╝
███████║╚█████╗░░░░██║░░░██████╔╝██║█████╗░░░╚███╔╝░
██╔══██║░╚═══██╗░░░██║░░░██╔══██╗██║██╔══╝░░░██╔██╗░
██║░░██║██████╔╝░░░██║░░░██║░░██║██║███████╗██╔╝╚██╗
╚═╝░░╚═╝╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝╚═╝╚══════╝╚═╝░░╚═╝`)

})
//__________________________________________________________________________
 const { MessageEmbed } = require('discord.js');

client.on('message', async message => {

	
	  
  
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    
	 if(command) {
		if(command.timeout) {



			if(Timeout.has(`${command.name}${message.author.id}`)) return message.channel.send(`You are on a \`${ms(Timeout.get(`${command.name}${message.author.id}`) - Date.now(), {long : true})} \`cooldown`)



		command.run(client, message, args) 
		Timeout.set(`${command.name}${message.author.id}`, Date.now() + command.timeout)
		setTimeout(() => {
			Timeout.delete(`${command.name}${message.author.id}`)
		}, command.timeout)
	}
	}

})

///////////////////////////////////////////////////////////////////////
  
///chat




////////////////////////////////////////////////////'
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://astriex:astriex1botJAVA@astriex.jk1bm.mongodb.net/Data',{
    useUnifiedTopology : true,
    useNewUrlParser: true,
}).then(console.log('Connected to mongo db!'))



//-------------------------------------------------
//-------------------------------------------------
//                   END  
//-------------------------------------------------

const { GiveawaysManager } = require('discord-giveaways')

client.giveaways = new GiveawaysManager(client, {
    storage : './giveaways.json',
    updateCountdownEvery: 5000,
    embedColor: '#ff0000',
    reaction : '🎉'

})

//             GIVEAWAY  THING 
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//|||||||||||||||||||||||||||||||||||||||||||||||||||
//const word = require('./JSON/word.json')
client.on("message", async message => {


   
		 const alusm =  message.member
///////////////////////////////////////////////////////////
let sChannel = db.fetch(`links_${message.guild.id}`);
        if (sChannel === null) {
            return;
          }
		  
            if (message.author.bot && message.author.discriminator !== '0000') return;
            if(message.channel.id === sChannel){
                if (message.author.bot) return;
				if(message.content.startsWith(`https:`) || message.content.startsWith(`https:`)) {
message.delete()
alusm.send(" :x: no link allowed")

}

 }
			
})

////////////////////////////////////////////////////////////////////
			
			
			
			




////////////////////////////////////////////////////////
const alexa = require("alexa-bot-api");
var chatbot = new alexa("chat bot api");

client.on("message", async message => {
        let sChannel = db.fetch(`chatbot_${message.guild.id}`);
        if (sChannel === null) {
            return;
          }
            if (message.author.bot && message.author.discriminator !== '0000') return;
            if(message.channel.id === sChannel){
                if (message.author.bot) return;
message.content = message.content.replace(/@(everyone)/gi, "everyone").replace(/@(here)/gi, "here");
if (message.content.includes(`@`)) {
return message.channel.send(`**:x: Please dont mention anyone**`);
 }
message.channel.startTyping();
if (!message.content) return message.channel.send("Please say something.");
fetch(`https://api.affiliateplus.xyz/api/chatbot?message=${encodeURIComponent(message.content)}&botname=${client.user.username}&ownername=Vishal`)
    .then(res => res.json())
    .then(data => {
    message.channel.send(`> ${message.content} \n <@${message.author.id}> ${data.message}`);
    });
      message.channel.stopTyping();
}
});





////////////////////////////////////////////////


///////////////////////////////////

const { addexp } = require("./handlers/xp.js")

//LEVEL
client.on("message", async message => {
 
if(message.author.bot) return;
  if(!message.guild) return;
  
return addexp(message)
})






  //Errors or questions? https://discord.gg/2EZSpxNB5z (Support server for weky npm)
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  bot.commands.set(command.name, command);
}
//\\\\\\\\\\\\\\\\\\\}}}}}}}}}}}}}}}}}|||||||||||||||||||||||||||









client.login(token);