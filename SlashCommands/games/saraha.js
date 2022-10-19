const { Client, CommandInteraction,MessageEmbed, NessageButton, MessageActionRow } = require("discord.js");
const db = require("quick.db")
let ar = [
/*ar*/ "هل عمرك حبيت؟",
  "كم مره هربت من المدرسه؟",
  "كم مره سرقت؟",
  "كم مره حبيت",
  "هل عمرك رسبت؟",
"عمرك رسبت بالامتحان وخبيتها عن اهلك؟"
]
let en = [
/*en*/ "Have you ever loved?",
  "How many times did you run away from school?",
  "How many times have you stolen?",
  "How many times have I loved",
  "Have you ever failed the test؟",
"Have you ever failed the test and hid the paper from your family?"
]
let arrandom = ar[Math.floor(Math.random() * ar.length)]
let enrandom = en[Math.floor(Math.random() * en.length)]
module.exports = {
    name: "sraha",
    description: ".",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      let lang = db.get(`lang_${interaction.guild.id}.lang`)
if(lang === "ar") {
  let emr = new MessageEmbed()
  .setTitle(`صراحه`)
  .setDescription(`${arrandom}`)
  .setColor(`RANDOM`)
  interaction.followUp({embeds:[emr]})
}  else if(lang === "en"){
    let emr = new MessageEmbed()
  .setTitle(`Saraha`)
  .setDescription(`${enrandom}`)
  .setColor(`RANDOM`)
    interaction.followUp({embeds:[emr]})
}
      
    },
};
