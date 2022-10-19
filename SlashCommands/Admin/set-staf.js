const { Client, CommandInteraction,MessageEmbed, NessageButton, MessageActionRow } = require("discord.js");
const db = require("quick.db")

module.exports = {
    name: "set-staf",
    description: "You Cant Set Staf Ticket",
    type: 'CHAT_INPUT',
  options:[
    {
      name:"role",
      description:"role1",
      required:true,
      type:"ROLE"
    },
      {
      name:"role2",
      description:"role2",
      required:true,
      type:"ROLE"
    },  {
      name:"role3",
      description:"role3",
      required:true,
      type:"ROLE"
    }
  ],
    run: async (client, interaction, args) => {
      if(!interaction.member.permissions.has("ADMINISTRATOR")){
        if(lang === "ar"){
          interaction.followUp(`انت لا تملك صلاحيات`)
        } else {
          interaction.followUp(`You Dont Have Premission`)
        }
      }
      let lang = db.get(`lang_${interaction.guild.id}.lang`)
      let role1 = interaction.options.getRole("role")
            let role2 = interaction.options.getRole("role2")
            let role3 = interaction.options.getRole("role3")
if(lang === "ar"){
    db.set(`stafs_${interaction.guild.id}`,{ro1:role1.id,ro2:role2.id,ro3:role3.id})
  let aa1 = db.get(`stafs_${interaction.guild.id}.ro1`)
    let aa2 = db.get(`stafs_${interaction.guild.id}.ro2`)
    let aa3 = db.get(`stafs_${interaction.guild.id}.ro3`)
  interaction.followUp(`تم تحديد <@&${aa1}> و <@&${aa2}> و <@&${aa3}> مشرفين التكت`)
}else if (lang === "en"){

    db.set(`stafs_${interaction.guild.id}`,{ro1:role1.id,ro2:role2.id,ro3:role3.id})
  let aa1 = db.get(`stafs_${interaction.guild.id}.ro1`)
    let aa2 = db.get(`stafs_${interaction.guild.id}.ro2`)
    let aa3 = db.get(`stafs_${interaction.guild.id}.ro3`)
  interaction.followUp(`done set <@&${aa1}> and <@&${aa2}> and <@&${aa3}> Staf Ticket`)
}
    },
};
