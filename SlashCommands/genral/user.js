const { Client, CommandInteraction,MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const db = require("quick.db");
const moment = require("moment")
module.exports = {
    name: "user",
    description: "You Can Show Info Users In Guilds",
    type: 'CHAT_INPUT',
    options:[
{
    name:"user",
    description:'user',
    required:false,
    type:"USER"
}
    ],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} 
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        let user = interaction.options.getUser("user");
        let lang = db.get(`lang_${interaction.guild.id}.lang`)
        if(lang === "ar"){
            if(!user){
                let emuser = new MessageEmbed().setThumbnail(interaction.user.displayAvatarURL({dynamic:true}))
                .setTitle(`User ${interaction.user.username}`)
                .addFields(
                    {
                        name:"**تاريخ دخول الديسكورد :**",value:`**${moment(interaction.user.createdTimestamp).fromNow()}**` , inline:true
                    } , 
                    {
name:"**تاريخ الدخول للسيرفر :**",value:`**${moment(interaction.member.joinedAt).fromNow()}**` , inline:true
                    }
                )
                interaction.followUp({embeds:[emuser]})
            }else {
                user.member = await interaction.guild.members
                .fetch(user.id)
                .catch((err) => { console.log(err) });
                let emuser = new MessageEmbed().setThumbnail(user.displayAvatarURL({dynamic:true}))
                .setTitle(`User ${user.username}`)
                .addFields(
                    {
                        name:"**تاريخ دخول الديسكورد :**",value:`**${moment(user.createdTimestamp).fromNow()}**` , inline:true
                    } , 
                    { 
name:"**تاريخ الدخول للسيرفر :**",value:`**${moment(user.member.joinedAt).fromNow()}**` , inline:true
                    }
                )
                interaction.followUp({embeds:[emuser]})
            }

        }
    },
};
