const { Client, CommandInteraction,MessageEmbed } = require("discord.js");
const db = require("quick.db")
module.exports = {
  name:`avatar`,
  description: 'Displays server\'s avatar or your avatar or someone else\'s avatar.',
  type: 'CHAT_INPUT',
  options:[
    {
      type:"SUB_COMMAND",
      name:"server",
      description:"see server's avatar",
    },{

      name:"user",
      description:"Displays your avatar or someone else\'s avatar.",
      type:"SUB_COMMAND",
      options:[
        {
          name:"user",
          description: "The user to get avatar for.",
          type:"USER",
          required:false,
        }
      ]
    },
  ],
  cooldown:10,
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {


         let lang = db.get(`lang_${interaction.guild.id}.lang`)
         if(lang === "ar"){


          let sub = interaction.options._subcommand
          if(sub === "user"){
            let user = interaction.options.getUser("user");

            if(!user){
              let em = new MessageEmbed()
              .setTitle(`افتار ${interaction.user.username}`)
      .setImage(interaction.user.displayAvatarURL({size:1024}))
              interaction.followUp({embeds:[em]})
            }else {
              let em = new MessageEmbed()
              .setTitle(`افتار ${user.username}`)
      .setImage(user.displayAvatarURL({size:1024}))
      .setColor("RANDOM")   
                      interaction.followUp({embeds:[em]})
            }

          } else if(sub === "server"){
            let em = new MessageEmbed() 
            .setTitle(`صوره ${interaction.guild.name}`)
            .setColor("RANDOM")
            .setImage(interaction.guild.iconURL({dynamic:true}))
            interaction.followUp({embeds:[em]})
          }
          
        
      }else{
        let sub = interaction.options._subcommand
        let user = interaction.options.getUser("user");
        if(sub === "user"){
          if(!user){
            let em = new MessageEmbed()
            .setTitle(`avatar ${interaction.user.username}`)
    .setImage(interaction.user.displayAvatarURL({size:1024}))
            interaction.followUp({embeds:[em]})    
          } else {
            let em = new MessageEmbed()
            .setTitle(`avatar ${user.username}`)
    .setImage(user.displayAvatarURL({size:1024}))
            interaction.followUp({embeds:[em]})    
          }
        } else if(sub === "server"){
          let em = new MessageEmbed() 
          .setTitle(`photo ${interaction.guild.name}`)
          .setColor("RANDOM")
          .setImage(interaction.guild.iconURL({dynamic:true}))
          interaction.followUp({embeds:[em]})
        }
     
                      
    
   
  
      }
    },
};
