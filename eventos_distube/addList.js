const Discord = require('discord.js');
const { Client, MessageEmbed } = require("discord.js")

module.exports = async (client) => {
  client.distube.on('addList', async (queue, playlist) => {
    const listEmbed = new Discord.MessageEmbed()
  .setColor("#84ABD8")
  .setTitle("¡Playlist agregada!")
  .setURL(playlist.url)
  .setThumbnail(playlist.thumbnail)
  .addField("Nombre de la playlist:", `${playlist.name}`)
  .addField("Duracion:", `${playlist.formattedDuration}`)
  .setAuthor(playlist.user.username, playlist.user.displayAvatarURL({ dynamic: true, size: 1024 }))
  .setFooter(client.user.tag, client.user.displayAvatarURL())
  .setTimestamp()

  queue.textChannel.send({ content: `Volume: \`${queue.volume}%\` | Filter: \`${queue.filters.join(', ') || 'Off'}\` | Loop: \`${queue.repeatMode ? queue.repeatMode === 2 ? 'Todas las canciones' : 'Esta cancion' : 'Apagado'}\` | Autoplay: \`${queue.autoplay ? 'On' : 'Off'}\``, embeds: [listEmbed] })
  })
};