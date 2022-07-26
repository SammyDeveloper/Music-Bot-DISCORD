const Discord = require('discord.js');
const { Client, MessageEmbed } = require("discord.js")
const { MessageActionRow, MessageButton } = require('discord.js');
module.exports = async (client, interaction) => {
    const row = new MessageActionRow()
    .addComponents(
      [
        new Discord.MessageButton()
  .setCustomId('1')
	.setLabel('Detener')
	.setStyle('DANGER')
      ],
      [
      new Discord.MessageButton()
  .setCustomId('2')
	.setLabel('Pausar')
	.setStyle('PRIMARY')
        ],
        [
      new Discord.MessageButton()
  .setCustomId('3')
	.setLabel('Skip')
	.setStyle('PRIMARY')
        ],
  )
  
  client.distube.on('playSong', async (queue, song) => {
   const addSong = new Discord.MessageEmbed()
    .setAuthor('Esta sonando:')
    .setTitle(song.name)
    .setURL(song.url)
    .setThumbnail(song.thumbnail)
    .setDescription(`🎶 \`-\` Agregando **${song.name}** a la playlist`)
    .addField('Duración:', `${song.formattedDuration}`)
 let sendmsg = await queue.textChannel.send({ embeds : [addSong], components:[row]})

      const roww = new MessageActionRow()
    .addComponents(
      [
        new Discord.MessageButton()
  .setCustomId('1')
	.setLabel('Detener')
	.setStyle('DANGER')
      ],
        [
      new Discord.MessageButton()
  .setCustomId('3')
	.setLabel('Skip')
	.setStyle('PRIMARY')
        ],
          [
      new Discord.MessageButton()
  .setCustomId('4')
	.setLabel('Continuar')
	.setStyle('SUCCESS')
        ],
  )
    let addSongg = new Discord.MessageEmbed()
    .setAuthor('Canción Pausada')
    .setTitle(song.name)
    .setURL(song.url)
    .setColor('RED')
    .setThumbnail(song.thumbnail)
    .setDescription(`🎶 \`-\` Canción **${song.name}**`)
    .addField('Duración:', `${song.formattedDuration}`)


        const rowww = new MessageActionRow()
    .addComponents(
      [
        new Discord.MessageButton()
  .setCustomId('1')
	.setLabel('Detener')
	.setStyle('DANGER')
      ],
      [
      new Discord.MessageButton()
  .setCustomId('2')
	.setLabel('Pausar')
	.setStyle('PRIMARY')
        ],
        [
      new Discord.MessageButton()
  .setCustomId('3')
	.setLabel('Skip')
	.setStyle('PRIMARY')
        ],
  )
    let resume = new Discord.MessageEmbed()
    .setAuthor('Esta sonando:')
    .setTitle(song.name)
    .setColor("GREEN")
    .setURL(song.url)
    .setThumbnail(song.thumbnail)
    .setDescription(`🎶 \`-\` Agregando **${song.name}** a la playlist`)
    .addField('Duración:', `${song.formattedDuration}`)
    
    let skip = new Discord.MessageEmbed()
    .setTitle('✅ - La canción fue skipeada correctamente.')

    let stop = new Discord.MessageEmbed()
    .setAuthor('Canción detenida:')
    .setTitle(song.name)
    .setURL(song.url)
    .setThumbnail(song.thumbnail)
    .setDescription(`🎶 \`-\` Canción detenida **${song.name}**`)
    .addField('Duración:', `${song.formattedDuration}`)
    
    const filter = i => i.customId && i.user.id;

    
const collector = queue.textChannel.createMessageComponentCollector()

collector.on('collect', async i => {
  const id = i.customId[0]

  /*Código para pausar la canción*/

	if (id === '2') {
    client.distube.pause(i.member.voice.channel)
		i.update({ embeds : [addSongg], components:[roww] })
 }

  /*Código para continuar con la canción*/

	if (id === '4') {
    client.distube.resume(i.member.voice.channel)
		i.update({ embeds : [resume], components:[rowww] })

	}

  /*Código para la siguiente canción*/
  
	if (id === '3') {
   client.distube.skip(i.member.voice.channel)
		i.reply({ embeds : [skip], ephemeral: true })
    }

  /* Código detener Música*/
  
	if (id === '1') {
   client.distube.stop(i.member.voice.channel)
		i.update({ embeds : [stop] })
	}
});  
  })

};