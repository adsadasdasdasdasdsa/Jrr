const { Client, CommandInteraction,MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const db = require("quick.db")

module.exports = {
    name: "setup",
    description: "setup ticket",
    type: 'CHAT_INPUT',
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
      let lang = db.get(`lang_${interaction.guild.id}.lang`)
      let staf1 = db.get(`stafs_${interaction.guild.id}.ro1`)
            let staf2 = db.get(`stafs_${interaction.guild.id}.ro2`)
            let staf3 = db.get(`stafs_${interaction.guild.id}.ro3`)
      
if(lang === "ar"){
  let embed = new MessageEmbed() .setTitle(`افتح تذكره`)
  .setDescription(`اضغط على الزر لفتح تذكره`).setColor(`GREEN`)
  let buttons = new MessageActionRow()
  .addComponents(
    new MessageButton()
    .setLabel(`افتح تذكره`)
    .setCustomId(`ct`)
    .setStyle(`PRIMARY`)
  )
  interaction.followUp({embeds:[embed],components:[buttons]})
  client.on("interactionCreate", message => {
    if(!message.isButton()) return;
    if(message.customId === "ct"){
      message.guild.channels.create(`ticket-${message.user.username}`,{
      permissionOverwrites: [
        {
          id:message.user.id,
          allow:["VIEW_CHANNEL","SEND_MESSAGES"],
          deny:['READ_MESSAGE_HISTORY' , 'ATTACH_FILES']
        },{
          id:message.guild.roles.everyone,
          deny:["VIEW_CHANNEL","SEND_MESSAGES"]
        },{
          id:staf1,
          allow:['VIEW_CHANNEL' , 'SEND_MESSAGES' , 'READ_MESSAGE_HISTORY' , 'ATTACH_FILES']
        },{
                    id:staf2,
          allow:['VIEW_CHANNEL' , 'SEND_MESSAGES' , 'READ_MESSAGE_HISTORY' , 'ATTACH_FILES']
        },{
                    id:staf3,
          allow:['VIEW_CHANNEL' , 'SEND_MESSAGES' , 'READ_MESSAGE_HISTORY' , 'ATTACH_FILES']
        }
        
      ], parent: (db.get(`cat_${message.guild.id}.cat`))  
      }).then(aa => {
        message.reply(`✅ | تم فتح تذكره ${aa}`)
 let ra = new MessageActionRow()
        .addComponents(
          new MessageButton()
          .setLabel(`اغلاق`)
          .setCustomId(`cs`)
          .setStyle(`DANGER`),
          new MessageButton()
          .setLabel(`مطالبه`)
          .setCustomId(`dd`)
          .setStyle(`SUCCESS`)
        )
  
        aa.send({content:`${message.member} | مرحبا الرجاء الانتضار حتى يأتي المساعدين <@&${staf1}>`,components:[ra]}).then(ss => {
          ss.pin()
        })
      })
    }
  })
  client.on("interactionCreate", msg => {
    if(!msg.isButton()) return;
    if(msg.customId === "cs"){
      msg.reply('✅ | سيتم اغلاق التكت بعد ثواني')
      setTimeout(() => {
        msg.channel.delete()
      }, 5000)
    }
    if(msg.customId === "dd"){
      if(!msg.member.roles.cache.has(staf1)){
        msg.reply(`انت لا تملك صلاحيات`)
      } else {
        msg.reply(`تم مطالبة التذكره من قبل ${msg.member}`)
        
      }
    }
   })
} else if(lang === "en"){
    let embed = new MessageEmbed() .setTitle(`Open Ticket`)
  .setDescription(`Click Button To Open Ticket`).setColor(`GREEN`)
  let buttons = new MessageActionRow()
  .addComponents(
    new MessageButton()
    .setLabel(`Create Ticket`)
    .setCustomId(`ct`)
    .setStyle(`PRIMARY`)
  )
  interaction.followUp({embeds:[embed],components:[buttons]})
  client.on("interactionCreate", message => {
    if(!message.isButton()) return;
    if(message.customId === "ct"){
      message.guild.channels.create(`ticket-${message.user.username}`,{
      permissionOverwrites: [
        {
          id:message.user.id,
          allow:["VIEW_CHANNEL","SEND_MESSAGES"],
          deny:['READ_MESSAGE_HISTORY' , 'ATTACH_FILES']
        },{
          id:message.guild.roles.everyone,
          deny:["VIEW_CHANNEL","SEND_MESSAGES"]
        },{
          id:staf1,
          allow:['VIEW_CHANNEL' , 'SEND_MESSAGES' , 'READ_MESSAGE_HISTORY' , 'ATTACH_FILES']
        },{
                    id:staf2,
          allow:['VIEW_CHANNEL' , 'SEND_MESSAGES' , 'READ_MESSAGE_HISTORY' , 'ATTACH_FILES']
        },{
                    id:staf3,
          allow:['VIEW_CHANNEL' , 'SEND_MESSAGES' , 'READ_MESSAGE_HISTORY' , 'ATTACH_FILES']
        }
        
      ], parent: (db.get(`cat_${message.guild.id}.cat`))  
      }).then(aa => {
        message.reply(`✅ | Done Create Ticket ${aa}`)
 let ra = new MessageActionRow()
        .addComponents(
          new MessageButton()
          .setLabel(`Close`)
          .setCustomId(`cs`)
          .setStyle(`DANGER`),
          new MessageButton()
          .setLabel(`Cliam`)
          .setCustomId(`dd`)
          .setStyle(`SUCCESS`)
        )
  
        aa.send({content:`${message.member} | Welcome Plase Whit To Come Supports <@&${staf1}>`,components:[ra]}).then(ss => {
          ss.pin()
        })
      })
    }
  })
  client.on("interactionCreate", msg => {
    if(!msg.isButton()) return;
    if(msg.customId === "cs"){
      msg.reply('✅ | The ticket will be closed in seconds')
      setTimeout(() => {
        msg.channel.delete()
      }, 5000)
    }
    if(msg.customId === "dd"){
      if(!msg.member.roles.cache.has(staf1)){
        msg.reply("You Dont Have Permission")
      } else {
        msg.reply(`Done Cliam Ticket By ${msg.member}`)
        
      }
    }
   })
}
    },
};
