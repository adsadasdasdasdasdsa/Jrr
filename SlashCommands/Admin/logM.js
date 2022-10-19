const { Client, CommandInteraction,MessageEmbed, NessageButton, MessageActionRow } = require("discord.js");
const db = require("quick.db")

module.exports = {
name: "set-log",
description: "I Say In Channel If (Kick Delete Message Send Message Ban Member )",
type: 'CHAT_INPUT',
options:[
{
name:"channel",
description:"channel Log",
required:true,
type:"CHANNEL"
},{
name:"type",
description:"type log",
required:true,
type:"STRING",
choices: [
{
name:"delete-message",value:"dm"
},{
name:"lave-member",value:"bm"
},{
  name:"Insult",value:"it"
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
  let lang = db.get(`lang_${interaction.guild.id}.lang`)
  let channel = interaction.options.getChannel("channel")
                    if(!interaction.member.permissions.has("7")){
                      interaction.followUp(`انت لا تملك صلاحيات`)
                    } else {
                      if(lang === "ar"){
                        if(interaction.options.getString("type")){
                          let tp = interaction.options.getString("type");
                          if(tp === "dm"){
                            client.on("messageDelete", message => {
                              let embeds = new MessageEmbed()
                              .setTitle(`${interaction.user.username} حذف رساله`)
                              .setDescription(`Message:${message} `)
                              .setColor(`RANDOM`)
                              .setTimestamp(  )
                              channel.send({embeds:[embeds]})
                            })
                            interaction.followUp(`تم تحديد غرفة حذف الرسائل`)
                          }
                          if(tp === "bm"){
                        client.on("guildMemberRemove", member => {
                        let em = new MessageEmbed()
                      .setTitle(`${member.user.username} خرج من الخادم`)
                      .setColor("RANDOM")
                      .setTimestamp()
                      channel.send({embeds:[em]})  
                      })
                        interaction.followUp("تم تحديد غرفة البان")      
                          } else if(tp === "it") {
                            db.set(`channel_${interaction.guild.id}`,{channel:channel.id})
                            interaction.followUp(`تم تحديد غرفة الاهانات`)
                          }
                        }
                      }else if(lang === "en"){
                         if(!interaction.member.permissions.has("MANAG_SERVER")){
        interaction.followUp("You Don`t Have Permissions")
                            } if(interaction.options.getString("type")){
                          let tp = interaction.options.getString("type");
                          if(tp === "dm"){
                            client.on("messageDelete", message => {
                              let embeds = new MessageEmbed()
                              .setTitle(`${interaction.user.username} delete message`)
                              .setDescription(`Message:${message} `)
                              .setColor(`RANDOM`)
                              .setTimestamp(  )
                              channel.send({embeds:[embeds]})
                            })
                            interaction.followUp(`done set delete message channel`)
                          }
                          if(tp === "bm"){
                        client.on("guildBanAdd", member => {
                        let em = new MessageEmbed()
                      .setTitle(`${member.user.username} is band in guild`)
                      .setColor("RANDOM")
                      .setTimestamp()
                      channel.send({embeds:[em]})  
                      })
                        interaction.followUp("done set ban channel")      
                          } else if(tp === "it") {
                            db.set(`channel_${interaction.guild.id}`,{channel:channel.id})
                            interaction.followUp(`Done Set Channel Insult`)
                          }
                        }
                      }
                    }


                  },
              };
