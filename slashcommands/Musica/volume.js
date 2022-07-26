const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'volume',
  description: 'Cambiar el volumen de la cancion.',
  options: [
    {
      name: 'volumen',
      type: 'NUMBER',
      description: 'Escribe el volumen que deseas en la cancion.',
      required: true
    }
  ],

  run: async (client, interaction) => {

    if(!interaction.member.voice.channel) return interaction.reply({ content : `:x: \`-\` Debes estar en un canal de voz.`, ephermal: true})
      if(interaction.guild.me.voice.channel && interaction.member.voice.channel.id !== interaction.guild.me.voice.channel.id) return interaction.reply({ content: ':x: `-` Debes estar en el mismo canal de voz que yo.', ephemeral: true})

      const queue = client.distube.getQueue(interaction.member.voice.channel)
      if(!queue) return interaction.reply({ content: `:x: \`-\` No hay canciones en la lista.`, ephemeral: true})

      let porcentaje = interaction.options.getNumber('volumen')
      if(porcentaje < '1') return interaction.reply({ content: '⚠️ `-` El porcentaje de volumen debe ser mayor a **1.**', ephemeral: true})
      if(porcentaje > '100') return interaction.reply({ content: '⚠️ `-` El porcentaje de volumen no puede ser mayor a **100.**', ephemeral: true})

      try {
        client.distube.setVolume(interaction.member.voice.channel, porcentaje)
      } catch (e) {
        interaction.reply({ content: `:x: \`-\` Hubo un error inesperado. **${e}**`})
        return;
    
      }

      interaction.reply(`✅ \`-\` El volumen se ha establecido a **${porcentaje}%**`) 

  }

}