const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')

module.exports = {
  name: 'adelantar',
  description: 'Adelanta la canción',
  options: [
    {
      name: 'número',
      type: 10,
      description: 'Escribe una cancion para ver la letra.',
      required: true
    }
  ],
  run: async (client, interaction) => {
        const queue = interaction.client.distube.getQueue(interaction);

        const numero = interaction.options.getNumber("número")

		     if (!queue) return interaction.reply(`:x: | ¡No hay nada en la cola ahora mismo!`)
        if (!numero) {
            return interaction.reply(`:x: | ¡Indique la posición (en segundos) para adelantar/atrasar!`)
        }
        const time = Number(numero)
        if (isNaN(time)) return interaction.reply(`:x: | ¡Por favor ingrese un número valido!`)
        queue.seek(time)
        interaction.reply(`He puesto la música en **${time}** segundos!`)
  }
}