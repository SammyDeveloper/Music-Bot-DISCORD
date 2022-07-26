const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'salir',
  description: 'Parar la cancion que estas escuchando.',

  run: async (client, interaction) => {

    if(!interaction.member.voice.channel) return interaction.reply({ content : `:x: \`-\` Debes estar en un canal de voz.`, ephermal: true})
      if(interaction.guild.me.voice.channel && interaction.member.voice.channel.id !== interaction.guild.me.voice.channel.id) return interaction.reply({ content: ':x: `-` Debes estar en el mismo canal de voz que yo.', ephemeral: true})

      const queue = client.distube.getQueue(interaction.member.voice.channel)
      if(!queue) return interaction.reply({ content: `:x: \`-\` No hay canciones en la lista.`, ephemeral: true})

      try {
        client.distube.stop(interaction.member.voice.channel)
        interaction.reply({ content: `✅ \`-\` El bot se salio corectamente correctamente.`})
        return;
      } catch (e) {
        interaction.reply({ content: `:x: \`-\` El bot ya no esta en un canal de voz.`})
    
      }

  }

}