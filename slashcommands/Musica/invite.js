const { MessageEmbed } = require('discord.js')
const { SlashCommandBuilder} = require('@discordjs/builders')

module.exports = {
  name: 'invite',
  description: 'Invitame a tu servidor.',

  run: async (client, interaction) => {
  interaction.reply({ content: 'Invitame con este [LINK](https://discord.com/api/oauth2/authorize?client_id=927932308588224522&permissions=8&scope=bot%20applications.commands) a tu servidor y disfruta de **Mi Música**'})

  }
} 