const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "slash-ping1",
    description: "returns all slash commands websocket ping",

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        interaction.followUp({ content: `${client.ws.ping}ms!` });
    },
};
