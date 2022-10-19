const { Client, CommandInteraction,MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const db = require("quick.db")

module.exports = {
    name: "protection",
    description: "You Can Set init(Link, Insult)",
    type: 'CHAT_INPUT',
  options:[
    {
      name:"status",
      description:"status",
      required:true,
      type:"STRING",
      choices:[
        {
          name:"on",
          value:"on"
        },{
          name:"off",
          value:"of"
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
if(lang === "ar"){
  if(interaction.options.getString("status")){
    const gg = interaction.options.getString("status");
    if(gg === "off") return; else{
      let channel = db.get(`channel_${interaction.guild.id}.channel`)
      if(channel === null) {
        interaction.followUp(`الرجاء استخدام امر /set-log حتى يتفعل الحماية`)
        } else {
          interaction.followUp(`تم تفعيل الحماية`)
          client.on("messageCreate", message => {
            if(message.content.startsWith("https://") || message.content.startsWith("كس") || message.content.startsWith("امك") || message.content.startsWith("نيك") || message.content.startsWith("ابوك") || message.content.startsWith("كس امك") || message.content.startsWith("يلعن ابوك")|| message.content.startsWith("يلعن اهلك")|| message.content.startsWith("بنيك امك")){
              message.delete()
             interaction.guild.channels.cache.get(`${channel}`).send({embeds:[
              new MessageEmbed() .setTitle(`${message.author.username} اهان او ارسل رابط`)
              .setDescription(`الرسالة:${message.content}`)
             ]})        
            }
          })
      }


    }
  }
} else if(lang === "en") {
  if(interaction.options.getString("status")){
    const gg = interaction.options.getString("status");
    if(gg === "off") return; else {
      let channel = db.get(`channel_${interaction.guild.id}.channel`)
      if(channel === null) {
        interaction.followUp(`Plase User This Command /set-log To Enable This Command`)
        } else {
          interaction.followUp(`Done Enable Protection`)
          client.on("messageCreate", message => {
            if(message.content.startsWith("https://") || message.content.startsWith("كس") || message.content.startsWith("امك") || message.content.startsWith("نيك") || message.content.startsWith("ابوك") || message.content.startsWith("كس امك") || message.content.startsWith("يلعن ابوك")|| message.content.startsWith("يلعن اهلك")|| message.content.startsWith("بنيك امك")){
              message.delete()
             interaction.guild.channels.cache.get(`${channel}`).send(`${message.author.username} Insult Or Send Link \n message: ${message.content}`)        
            }
          })
      }


    }
  }
}
    },
};
