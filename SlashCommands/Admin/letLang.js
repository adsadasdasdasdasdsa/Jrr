const { Client, CommandInteraction,MessageEmbed } = require("discord.js");
const db = require("quick.db")
module.exports = {
    name: "set-lang",
    description: "lang bot",
    options:[
      {
        name:"lang",
        description:"lang bot?",
        required:true,
        type:"STRING",
        choices: [
          {
            name:"ar",
            value:"ar"
          },
                    {
            name:"en",
            value:"en"
          }
        ]
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
if(interaction.options.getString("lang")){
  const lang = interaction.options.getString("lang");
  if(lang === "ar"){
    db.set(`lang_${interaction.guild.id}`,{lang:"ar"})
    interaction.followUp(`تم تحويل الغة الى لغه عربية`)
  }
  if(lang === "en"){
        db.set(`lang_${interaction.guild.id}`,{lang:"en"})
    interaction.followUp(`Done Trast Lang To English`)
  }
}
    },
};
