
const client = require('../index')
const db = require("quick.db")
//>>>>>>>>>>>>>>>>>>>> STATUS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//function presence() {
       // let status = [`**help`, `${client.guilds.cache.size} Servers `, `${client.users.cache.size} user`] 
       // let rstatus = Math.floor(Math.random() * status.length); 
        //client.user.setPresence({
          //  status: "WATCHING", 
           // activity: {
           //     name: `${status[rstatus]}`,                type: "PLAYING" 
				 
           // }
        //});
    //}setInterval(presence, 5000) 

const config = require('../config.json')
const prefix = config.prefix

client.on('ready', () => {
    console.log(`${client.user.username} ✅ going on`)

    const arrayOfStatus = [
        `in ${client.guilds.cache.size} servers`,
        `with ${client.users.cache.size} members`,
        `${client.user.username} Made Byy VISHAL`,
        `${prefix}help`
    ];

    let index= 0;
    setInterval(() => {
        if(index === arrayOfStatus.length) index = 0;
        const status = arrayOfStatus[index];
        
        client.user.setActivity(`${status}`, {
         type: "WATCHING",
         ////URL: "https://www.twitch.tv/blue666opislive"
     })
     index++;
    }, 10000);

     

})
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//	client.user.setActivity(`**help |${client.guilds.cache.size} Servers | ${client.users.cache.size} users`, { type: "LISTENING"});

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//                      READY 

client.on("ready", () => {
	console.log(`${client.user.username} has logged on!`)
})

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<





const path = require('path')




//_—_–_-_-_-_-_—_|WEB PAGE|---->>>>>>>>>>>>>>>>>>>>>>>>>>

const clientDetails = {
    guild: client.guilds.cache.size,
    users: client.users.cache.size,
    channels: client.channels.cache.size,
};

//-_-_-_—_–_-_—_–_| express section |---->>>>>>>>>>>>>>>>>>>>>>>
const express = require('express');

const app = express();

const port = 8926 || 7094

app.get("/",(req,res) => {
    res.status(200).sendfile(path.join(__dirname, "..", "scoopy.xyz", "index.html"))
});



app.get("/info",(req, res) => {
    res.status(200).send(clientDetails)
})





app.listen(port)
