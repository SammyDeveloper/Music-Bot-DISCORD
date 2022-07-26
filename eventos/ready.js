const Discord = require('discord.js')
const client = new Discord.Client({
  intents: 4095
})
module.exports = {
  name: 'ready',
    async execute(client) {
/*
 const slashcommands = client.slashcommands.map(x => x)
 client.application.commands.set(slashcommands)
*/

const status = [
    `/play | /stop`,
    `Invitame a tú servidor`,
    '/invite',
    "Bot Oficial",
  ]

 setTimeout(function Status() {
  
  const statusr = status[Math.floor(status.length * Math.random())]

  client.user.setPresence({
    status: 'dnd',
    activities: [{
      name: statusr,
      type: 'STREAMING',
      url: "https://www.twitch.tv/"
    }] 
  })
 }, 6000)

 const statu = status[Math.floor(status.length * Math.random())]

 client.user.setPresence({
    status: 'dnd',
    activities: [{
      name: statu,
      type: 'STREAMING',
      url: "https://www.twitch.tv/"
    }] 
  })
 console.log(`Listo ready`)
      
  }
}