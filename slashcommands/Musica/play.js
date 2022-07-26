const { MessageEmbed } = require('discord.js')
const { SlashCommandBuilder} = require('@discordjs/builders')

module.exports = {
  name: 'play',
  description: 'Reproducir una cancion.',
  options: [
    {
      name: 'cancion',
      type: 'STRING',
      description: 'Escribe una cancion para reproducir.',
      required: true
    }
  ],

  run: async (client, interaction) => {

const cancion = interaction.options.getString("cancion")

  if(!interaction.member.voice.channel) return interaction.reply({ content: ':x: `-` Debes estar en un canal de voz.', ephemeral: true})
  if(interaction.guild.me.voice.channel && interaction.member.voice.channel.id !== interaction.guild.me.voice.channel.id) return interaction.reply({ content: ':x: `-` Debes estar en el mismo canal de voz que yo.', ephemeral: true})

   interaction.client.distube.playVoiceChannel(
    interaction.member.voice.channel,
    interaction.options.getString("cancion"),
    {
      textChannel: interaction.channel,
      member: interaction.member,
    }
  );

  interaction.reply({ content: 'Buscando la cancion...'})

  }
} 