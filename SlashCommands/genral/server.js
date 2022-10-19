const { Client, CommandInteraction,MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const db = require("quick.db")
const moment = require("moment");
module.exports = {
    name: "server",
    description: "To Show Info Server",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      let lang = db.get(`lang_${interaction.guild.id}.lang`)
const TEXT = interaction.guild.channels.cache.filter(cc => cc.type === "GUILD_TEXT").size;
const VOICE = interaction.guild.channels.cache.filter(cc => cc.type === "GUILD_VOICE").size;
const on = interaction.guild.members.cache.filter(mm => mm.type === "GUILD_ONLINE").size;
if(lang === "ar") {
    let embed = new MessageEmbed()
    .setTitle(`${interaction.guild.name} Info`)
     .addFields({
        name:"🆔 ايدي الخادم",
        value:interaction.guild.id,
        inline:false
     }, {
        name:":calendar: تاريخ الانشاء",
        value:moment(interaction.guild.createdTimestamp).fromNow(),
        inline:false
     },{
        name:":crown: ممتلك من",
        value:`<@${interaction.guild.ownerId}>`,
        inline:false
     },
     {
        name:":speech_balloon: الفنوات",
        value:`${interaction.guild.channels.cache.size}
        صوتي ${VOICE} كتابي ${TEXT}`,
        inline:false
     }, {
        name:"👩🏾‍🤝‍👩🏼 الاعضاء",
        value :`${interaction.guild.memberCount} / ${on}`,
        inline:false
     })
    interaction.followUp({embeds:[embed]})
}
    },
};
