const client = require("../index");

client.on("ready" , () => {
  client.user.setActivity(`/help, server{${client.guilds.cache.size}}` , {type:"PLAYING"})
  console.log(`${client.user.username} is ready`)
})
