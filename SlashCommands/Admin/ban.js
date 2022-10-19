const {
  Client,
  CommandInteraction,
  MessageEmbed,
  NessageButton,
  MessageActionRow,
} = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "ban",
  description: "I Ban Member (Spaming Hacking)",
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
  const user2 = interaction.options.getMember("user")
    let user = interaction.options.getUser("user")
    let lang = db.get(`lang_${interaction.guild.id}.lang`);
    if (lang === "ar") {
      if(!interaction.member.permissions.has('BAN_MEMBERS')) {
         interaction.followUp({content: "ليس لديك الصلاحيات"})
       }
      if (user.id === interaction.user.id) {
        interaction.followUp(`انت لا يمكنك تبنيد نفسك`);
      } else{
              user2.ban().then(() => interaction.followUp(`${user.username} تم تبنيده`)).catch(err => interaction.followUp(`لا يمكنني تبنيد ${user.username}`))
      }

      } else if(lang === "en") {
            if(!interaction.member.permissions.has('BAN_MEMBERS')) {
         interaction.followUp({content: "You Don`t Have Permissions"})
       }
      if (user.id === interaction.user.id) {
        interaction.followUp("You Can`t Ban YourSelf");
      } else{
              user2.ban().then(() => interaction.followUp(`${user.username} has been banned`)).catch(err => interaction.followUp(`I Cant Ban ${user.username}`))
      }
      }
    }
  };