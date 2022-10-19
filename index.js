


const { Client, Collection, Intents } = require("discord.js");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_BANS]
});
const client2 = new Client({
  intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_BANS]
});
module.exports = client;
let prefix = "!"

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");
const  ms  = require("ms")//انت هنا؟
const { MessageEmbed } = require("discord.js")
const db = require("quick.db")
const { registerFont } = require("canvas");


registerFont("fonts/Cairo-Regular.ttf",{ family : "JordBot"})

// Initializing the project
require("./handler")(client);
// pay coin

client2.on("ready" , () => {

  console.log(`${client2.user.username} is ready`)
})

let games = [
"روكت ليج",
"فالورانت",
"ماين جرافت"
]
client.login("MTAxMDg1NjcwMjA1NDI0MDMyNg.G8u3km.se33FWh5vWwphlcs0G0IA9IkZEnsqhZqHVMWfw");
client2.login("MTAxNDg2MjEwNDk3NDU5ODE0NA.GduRf8.vHphEjmbnSmuiImDdDw9k7TYZTotXrgyTTugqs")
client2.on("messageCreate", message => {
  if(message.content.startsWith("Spin-Games")){

    let game = games[Math.floor(Math.random() * games.length)]
        let em = new MessageEmbed() .setTitle(`Its Now Play: ${game}`) 
          .setColor("RANDOM") 
          .setFooter(`Requred By : ss${message.author.tag}`)
    .setTimestamp()
    message.channel.send({embeds:[em]})
    
  }
})
client.on(`messageCreate`, message => {
  let member = message.member

if(member.send){
  
  db.add(`run_${message.author.id}.run`,1)
  let me = db.get(`run_${message.author.id}.run`);
  if(db.get(`run_${message.author.id}.run`) === null && db.get(`lvl_${message.author.id}.lvl`) === null){
    db.set(`run_${message.author.id}`,{run:0})
    db.set(`lvl_${message.author.id}`,{lvl:0})
 
    if(me === 1){
      message.channel.send(`${message.author} مبروك لقد اصبحت لفل 1`)
      db.add(`lvl_${message.author.id}.lvl`,1)
    }
     if(me === 50){
      message.channel.send(`${message.author} مبروك لقد اصبحت لفل 2`)
      db.add(`lvl_${message.author.id}.lvl`,1)
     }
     if(me === 100){
      message.channel.send(`${message.author} مبروك لقد اصبحت لفل 3`)
      db.add(`lvl_${message.author.id}.lvl`,1)
     }
     if(me === 110){
      message.channel.send(`${message.author} مبروك لقد اصبحت لفل 4`)
      db.add(`lvl_${message.author.id}.lvl`,1)
     }
     if(me === 4000){
      message.channel.send(`${message.author} مبروك لقد اصبحت لفل 5`)
      db.add(`lvl_${message.author.id}.lvl`,1)
     }
     if(me === 90000){
      message.channel.send(`${message.author} مبروك لقد اصبحت لفل 6`)
      db.add(`lvl_${message.author.id}.lvl`,1)
     }
     if(me === 15000){
      message.channel.send(`${message.author} مبروك لقد اصبحت لفل 7`)
      db.add(`lvl_${message.author.id}.lvl`,1)
     }
     if(me === 20000){
      message.channel.send(`${message.author} مبروك لقد اصبحت لفل 8`)
      db.add(`lvl_${message.author.id}.lvl`,1)
     }
     if(me === 50000){
      message.channel.send(`${message.author} مبروك لقد اصبحت لفل 9`)
      db.add(`lvl_${message.author.id}.lvl`,1)
     }
     if(me === 100000){
      db.add(`lvl_${message.author.id}.lvl`)
      message.channel.send(`${message.author} مبروك لقد اصبحت لفل 10`)
      db.add(`lvl_${message.author.id}.lvl`,1)
     }
  }

}

}) 