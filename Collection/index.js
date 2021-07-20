const { Collection } = require('discord.js');
const afk = new Collection(); // key: userid | value: [timestamp,reason]


module.exports = { afk };