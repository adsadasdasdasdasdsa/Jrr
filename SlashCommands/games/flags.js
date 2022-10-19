/*const { Client, CommandInteraction,MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const { gcd } = require("mathjs");
const db = require("quick.db")
let flagsn = [
    "الاردن",
    "فلسطين",
    "مصر",
    "سودان"
]
let flags = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/1280px-Flag_of_Jordan.svg.png",
    "فلسطين",
    "مصر",
    "سودان"
]
flagsn[1] = flags[1]
let gg = flagsn[Math.floor(Math.random() * flagsn.length)]
if(gg === flagsn[1]){
    flagsn[1] = flags[1]
    console.profile("ff")
}
console.log(gg)
module.exports = {
    name: "flags",
    description: "returns websocket ping",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     
    run: async (client, interaction, args) => {
      let lang = db.get(`lang_${interaction.guild.id}.lang`)
if(lang === "ar") {

}
    },
};
*/