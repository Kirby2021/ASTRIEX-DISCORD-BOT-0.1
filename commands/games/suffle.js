const { MessageEmbed, Message } = require("discord.js");
const client = require('../..');

module.exports = {
    name : 'suffle',
    category : 'fun',
    timeout: 1,

    /**
     * @param {Client} client
     * @param {Message} Message
     * @param {String[]} args
     */


    run: async(client, message, args) => {

let randomWords = require('random-words');
const word = randomWords()
const { ShuffleGuess } = require('weky')
const game = new ShuffleGuess({
message: message,
word: word,
winMessage: "GG you won!" //Or anything
})
game.start()
	}
}