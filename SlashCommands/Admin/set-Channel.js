const { Client, CommandInteraction,MessageEmbed, NessageButton, MessageActionRow } = require("discord.js");
const db = require("quick.db")

module.exports = {
    name: "set-category",
    description: "Type Category Ticket Rooms",
    type: 'CHAT_INPUT',
  options:[
    {
      name:"category",
      description:"category",
      required:true,
      type:"CHANNEL"
    }
  ],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      if(!interaction.member.permissions.has("ADMINISTRATOR")){
        if(lang === "ar"){
          interaction.followUp(`انت لا تملك صلاحيات`)
        } else {
          interaction.followUp(`You Dont Have Premission`)
        }
      }
      let lang = db.get(`lang_${interaction.guild.id}.lang`);
      let cat = interaction.options.getChannel("category")
if(lang === "ar"){
 
  db.set(`cat_${interaction.guild.id}`,{cat:cat.id})
  interaction.followUp(`done set <#${cat.id}> category ticket`)
}else {
    db.set(`cat_${interaction.guild.id}`,{cat:cat.id})
  interaction.followUp(`done set <#${cat.id}> category ticket`)
}
    },
};
