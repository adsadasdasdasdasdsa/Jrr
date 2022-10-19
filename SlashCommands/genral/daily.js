
const { Client, CommandInteraction,MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const db = require("quick.db")
const cc = new Set ();
const ms = require("ms")
let daily = Math.floor(Math.random() * 1000 + 5000)
module.exports = {
    name: "daily",
    description: "To Give Up From 100 To 4500",
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
    const tt = 2400 
    if(cc.has(interaction.user.id)){
 
        return interaction.followUp(`:x: | **لقد استلمت راتبك اليومي ، يرجى الانتظار 24 ساعة لاستلام راتبك مرة أخرى**`)
        }
        cc.add(interaction.member.id)
        setTimeout(() => {
            cc.delete(interaction.member.id)
        }, tt * 1000)
db.add(`jb_${interaction.user.id}.jb`, daily)
interaction.followUp(`✅ | **لقد اخذت لهاذا اليوم ${daily}**`)
} else if(lang === "en") {
    const tt = 2400 
    if(time.has(interaction.user.id)){
        return interaction.followUp(":x: | **You have taken your daily salary, please wait at 24h to receive salary again*")
        }
        time.add(interaction.member.id)
        setTimeout(() => {
            time.delete(interaction.member.id)
        }, tt * 1000)
db.add(`jb_${interaction.user.id}.jb`, daily)
interaction.followUp(`✅ | You Are Give Up In This Day ${daily}`)
}
    },
};
