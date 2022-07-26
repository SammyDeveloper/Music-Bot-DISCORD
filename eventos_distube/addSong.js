const Discord = require('discord.js');
const { Client, MessageEmbed } = require("discord.js")

module.exports = async (client) => {
  client.distube.on('addSong', async (queue, song) => {
    const listEmbed = new Discord.MessageEmbed()
  .setColor("#84ABD8")
  .setTitle("¡Canción agregada!")
  .setURL(song.url)
  .setThumbnail(song.thumbnail)
  .addField("Nombre de la canción:", `${song.name}`)
  .addField("Duracion:", `${song.formattedDuration}`)
  .setAuthor(song.user.username, song.user.displayAvatarURL({ dynamic: true, size: 1024 }))
  .setFooter(client.user.tag, client.user.displayAvatarURL())
  .setTimestamp()

  queue.textChannel.send({ content: `Volume: \`${queue.volume}%\` | Filter: \`${queue.filters.join(', ') || 'Off'}\` | Loop: \`${queue.repeatMode ? queue.repeatMode === 2 ? 'Todas las canciones' : 'Esta cancion' : 'Apagado'}\` | Autoplay: \`${queue.autoplay ? 'On' : 'Off'}\``, embeds: [listEmbed] })
  })
};