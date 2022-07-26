//   ____ ___  ____  _____     ____  _  _     _______
//  / ___/ _ \|  _ \| ____|   |___ \| || |   / /___  |
// | |  | | | | | | |  _| _____ __) | || |_ / /   / /
// | |__| |_| | |_| | |__|_____/ __/|__   _/ /   / /
//  \____\___/|____/|_____|   |_____|  |_|/_/   /_/

const express = require("express");
const app = express();

app.get("/", function(request, response) {
  response.writeHeader(200, { "Content-Type": "text/html;charset=utf-8" });
  response.write('Hola mundo', "utf-8");
  response.end();
});
app.listen(process.env.PORT);


require('dotenv').config()
const { Client, Collection, Intents } = require('discord.js');
const Discord = require('discord.js')

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING] });

/*const Captain = require('captainjs');
console = new Captain.Console();*/


const fs = require('fs')
const { readdirSync } = require('fs')

module.exports = client
client.slashcommands = new Discord.Collection()

process.on('unhandledRejection', error => {
	console.error(error);
});

client.on('shardError', error => {
	console.error(error);
});

client.on('interactionCreate', async interaction => {
  if (interaction.isCommand()) {
    const slash = client.slashcommands.get(interaction.commandName)
    if (!slash) return

    try {
      await slash.run(client, interaction)
    } catch (e) {
      console.log(e)
    }
  }
})



const array = []

fs.readdir(`./slashcommands/`, (err, directories) => {
  directories.forEach(directory => {
    fs.readdir(`./slashcommands/${directory}`, (e, files) => {
      if (e) console.log(e)

      files.forEach(file => {
        const slash = require(`./slashcommands/${directory}/${file}`)
        client.slashcommands.set(slash.name, slash)

        array.push(slash)
      })
    })
  })
})



client.on('ready', async () => {
  const guild = array =>
    client.application.commands.set(array)
  const global = array => client.application.commands.set(array)

  guild(array)
  console.log('Slash Conectado')
  console.log(`
 |-------------------------------------------|
 |              Informations                 |
 |-------------------------------------------|
 |• Alive: 24/7                              |
 |-------------------------------------------|
 |• Author: Sammy.#3359                      |
 |-------------------------------------------|
 |• Server: https://discord.gg/krSwpbjfbw    |
 |-------------------------------------------|
 |• Github: https://github.com/SammyDeveloper|
 |-------------------------------------------|
 |• License: Apache License 2.0              |
 |-------------------------------------------|
  `)

})

const eventFiles = fs.readdirSync('./eventos').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./eventos/${file}`);
	if (event.once) {
client.once(event.name, (...args) => event.execute(client, ...args));
	} else {
client.once(event.name, (...args) => event.execute(client, ...args));
	}
}

  const { DisTube } = require ('distube')
const SoundCloudPlugin = require('@distube/soundcloud')
const SpotifyPlugin = require('@distube/spotify')

client.distube = new DisTube(client, {
	searchSongs: 10,
	searchCooldown: 10000,
	leaveOnEmpty: true,
	emptyCooldown: 0,
	leaveOnStop: true,
	plugins: [new SoundCloudPlugin.default(), new SpotifyPlugin.default()],
})

for (const file of readdirSync('./eventos_distube')) {
  if (file.endsWith('.js')) {
    let fileName = file.substring(0, file.lenght - 3)
    require(`./eventos_distube/${file}`)(client)
  }
}

client.login(process.env.TOKEN)