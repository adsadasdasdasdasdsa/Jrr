const { GuildBan } = require("discord.js");
const { Client, CommandInteraction,MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const db = require("quick.db")
let abjb = [
"856983207228473355"
]
module.exports = {
    name: "add-jb",
    description: "To Add Jb From Member",
    type: 'CHAT_INPUT',
    options:[
        {
name: "user",
description:"user add jb",
required:true ,
type:"USER"
        },
        {
            name:"amount",
            description:"amount give",
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
        let user = interaction.options.getUser(`user`);
        let num = interaction.options.getNumber(`amount`)
      let lang = db.get(`lang_${interaction.guild.id}.lang`)
if(lang === "ar") {
if(interaction.user.id === "856983207228473355"){
    db.add(`jb_${user.id}.jb`,num);
    interaction.followUp(`تم اضافة الى ${user} ${num}`)
} else {
interaction.followUp(`انت لا يمكلن استخدام هاذا الامر`)
}
}
    },
};
