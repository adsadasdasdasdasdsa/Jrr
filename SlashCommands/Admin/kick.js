const {
  Client,
  CommandInteraction,
  MessageEmbed,
  NessageButton,
  MessageActionRow,
} = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "kick",
  description: "I Kick Member (Spaming Hacking)",
  type: "CHAT_INPUT",
  options: [
    {
      name: "user",
      description: "user kick",
      required: true,
      type: "USER",
    },
  ],
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {
    let user = interaction.options.getUser("user");
let us = interaction.options.getMember("user")
    let lang = db.get(`lang_${interaction.guild.id}.lang`);
    if (lang === "ar") {
      if(!interaction.member.permissions.has(`KICK_MEMBERS`)){
        interaction.followUp("انت لا تملك صلاحيات")
      }
      if (user.id === interaction.user.id) {
        interaction.followUp(`انت لا تقدر طرد نفسك`);
      } else {
       us.kick().then(() => interaction.followUp(`تم طرد ${user.username}`)).catch(err => interaction.followUp(`لا يمكنني طرد ${user.username}`))
      }
    } else {
           if (user.id === interaction.user.id) {
        interaction.followUp("You Can`t Kick Yourself");
      } else if(lang === "en") {
                  if(!interaction.member.permissions.has(`KICK_MEMBERS`)){
        interaction.followUp("You Don`t Have Permissions")
      }
       us.kick().then(() => interaction.followUp(`Done Kick ${user.username}`)).catch(err => interaction.followUp(`I Cant Kick ${user.username}`))
    }
    }
  }
};