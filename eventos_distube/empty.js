const Discord = require('discord.js');
const { Client, MessageEmbed } = require("discord.js")

module.exports = async (client) => {
  client.distube.on('empty', async (queue) => {
    const eEmbed = new Discord.MessageEmbed()
  .setColor("#84ABD8")
  .setTitle("Canal vacio!!")
  .setThumbnail(client.user.displayAvatarURL())
  .setDescription("Retirandome del canal de voz")
  .setFooter(client.user.tag, client.user.displayAvatarURL())
  .setTimestamp()

  queue.textChannel.send({ embeds: [eEmbed] })
  })
};