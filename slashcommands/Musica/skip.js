const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'skip',
  description: 'Saltar la cancion que estas escuchando.',

  run: async (client, interaction) => {

    const queue = client.distube.getQueue(interaction.member.voice.channel)
    if(!queue) return interaction.reply({ content: ':x: `-` No hay canciones reproduciendose.', ephemeral: true})
    if(!interaction.member.voice.channel) return interaction.reply({ content: ':x: `-` Debes estar en un canal de voz.', ephemeral: true})
   if(interaction.guild.me.voice.channel && interaction.member.voice.channel.id !== interaction.guild.me.voice.channel.id) return interaction.reply({ content: ':x: `-`  Debes estar en el mismo canal de voz que yo.', ephemeral: true})

   client.distube.skip(interaction.member.voice.channel)
   interaction.reply('✅ `-` La cancion fue saltada correctamente.')
    

  }
}