const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'continue',
  description: 'Continuar una cancion pausada.',

  run: async (client, interaction) => {

    if(!interaction.member.voice.channel) return interaction.reply({ content : `:x: \`-\` Debes estar en un canal de voz.`, ephermal: true})
      if(interaction.guild.me.voice.channel && interaction.member.voice.channel.id !== interaction.guild.me.voice.channel.id) return interaction.reply({ content: ':x: `-` Debes estar en el mismo canal de voz que yo.', ephemeral: true})

      const queue = client.distube.getQueue(interaction.member.voice.channel)
      if(!queue) return interaction.reply({ content: `:x: \`-\` No hay canciones en la lista.`, ephemeral: true})

      try {
        client.distube.resume(interaction.member.voice.channel)
        interaction.reply('✅ `-` La cancion fue continuada.')
        return;
      } catch (e) {
        interaction.reply({ content: `:x: \`-\` La cancion ya esta continuada.`})
    
      }

  }

}