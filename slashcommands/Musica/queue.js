const { SlashCommandBuilder} = require('@discordjs/builders')
const Discord = require('discord.js');

module.exports = {
  name: 'queue',
  description: 'Las canciones en lista de espera.',

  run: async (client, interaction) => {

  const queue = client.distube.getQueue(interaction.member.voice.channel)
  if(!queue) return interaction.reply({ content: ':x: `-` No hay canciones reproduciendose.', ephemeral: true})

  const embed = new Discord.MessageEmbed()

  .setTitle(`🎵 - Lista de canciones en: **${interaction.guild.name}**`)
  .setDescription('\n' + queue.songs.map((song, id) => `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``).slice(0,10).join("\n\n"))
  .setColor("BLUE")
  .setTimestamp()

  interaction.reply({ embeds: [embed] })
  
  }
  }