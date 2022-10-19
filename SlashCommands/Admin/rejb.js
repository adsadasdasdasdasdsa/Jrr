const { Client, CommandInteraction,MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const db = require("quick.db")

module.exports = {
    name: "remove-jb",
    description: "To Remove Jb From Member",
    type: 'CHAT_INPUT',
    options:[
      {
name:"user",
        description:"user",
        required: true,
          type:"USER"
      }, 
      {
        name:"amount",
        description:"amount",
        required:true,
        type:"NUMBER"
      }
    ],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      let lang = db.get(`lang_${interaction.guild.id}.lang`)
      let user = interaction.options.getUser("user")
      let amount = interaction.options.getNumber(`amount`)
      let mm = db.get(`jb_${user.id}.jb`)
if(lang === "ar") {
  if(interaction.user.id === "856983207228473355"){
if(mm < amount) {
  interaction.followUp(`:x: | **${user.username} لا يملك هاذا المبلغ**`)
} else {
  db.subtract(`jb_${user.id}.jb`, amount)
  interaction.followUp(`:ballot_box_with_check: | **تم ازالة المبلغ من ${user.username}**`)
}
  } else {
    interaction.followUp(`:x: | **لا يمكنك استخدام هاذا الامر**`)
  }
} else if(lang === "en") {
  if(interaction.user.id === "856983207228473355"){
    if(mm < amount) {
      interaction.followUp(`:x: | **${user.username} He does not have this amount**`)
    } else {
      db.subtract(`jb_${user.id}.jb`, amount)
      interaction.followUp(`:ballot_box_with_check: | **The amount has been removed from ${user.username}**`)
    }
      } else {
        interaction.followUp(`:x: | **You Cant use this command**`)
      }
}
    },
};
