const { Client, CommandInteraction,MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const db = require("quick.db")
const axios = require(`axios`);
module.exports = {
    name: "banner",
    description: "To Show Banner (Server , User)",
    type: 'CHAT_INPUT',
    options:[
        {
          type:"SUB_COMMAND",
          name:"server",
          description:"see server's banner",
        },{
    
          name:"user",
          description:"Displays your banner or someone else\'s banner.",
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
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        let sub = interaction.options._subcommand
      let lang = db.get(`lang_${interaction.guild.id}.lang`)

if(lang === "ar") {
    if(sub === "user"){
    let user = interaction.options.getUser(`user`)
    if(!user){
      try {
        const data = await axios.get(`https://discord.com/api/users/${interaction.user.id}`,{
          headers:{
            Authorization:`Bot ${client.token}`
          }
        }).then(d => d.data);
        if(data.banner){
          const a = data.banner.startsWith(`o_`) ?  ".gif?size=4096" : ".png?size=4096";
          const url =  `https//cdn.discordapp/banners/${interaction.user.id}${data.banner}${a}`;
          let emu = new MessageEmbed() .setTitle(`لاقتة ${interaction.user.username}`) .setImage(url) .setColor(`RANDOM`)
          interaction.followUp({embeds:[emu]})
        }else {
          interaction.followUp(`:x: **${interaction.user} انت لا تملك لافتة**`)
        }
      } catch (error) {
console.log(error)
      }
    } else {
      try {
        const data = await axios.get(`https://discord.com/api/users/${user.id}`,{
          headers:{
            Authorization:`Bot ${client.token}`
          }
        }).then(d => d.data);
        if(data.banner){
          const a = data.banner.startsWith(`O_`) ?  ".gif?size=4096" : ".png?size=4096";
          const url =  `https://cdn.discordapp.com/banners/${user.id}/${data.banner}${a}`;
          let em = new MessageEmbed() .setTitle(`لافتة ${user.username}`) .setImage(url) .setColor(`RANDOM`)
          interaction.followUp({embeds:[em]})
        }else {
          interaction.followUp(`:x: **${user} لا يملك لافته**`)
        }
      } catch (error) {
console.log(error)
      }
    }


    }
    if(sub === "server") {
let bannerg = interaction.guild.bannerURL();
if(bannerg === null){
  interaction.followUp(`:x: | **${interaction.guild.name} لا يملك لافتة** `)
} else {
  let embed = new MessageEmbed() .setTitle(`لافتة خادم ${interaction.guild.name}`) .setImage(interaction.guild.bannerURL({dynamic:true}))
  interaction.followUp({embeds:[embed]})
}
    }
} else if(lang === "en") {
  if(sub === "user"){
    let user = interaction.options.getUser(`user`)
    if(!user){
      try {
        const data = await axios.get(`https://discord.com/api/users/${interaction.user.id}`,{
          headers:{
            Authorization:`Bot ${client.token}`
          }
        }).then(d => d.data);
        if(data.banner){
          const a = data.banner.startsWith(`o_`) ?  ".gif?size=4096" : ".png?size=4096";
          const url =  `https//cdn.discordapp/banners/${interaction.user.id}${data.banner}${a}`;
          let emu = new MessageEmbed() .setTitle(`Banner ${user.username}`) .setImage(url) .setColor(`RANDOM`)
          interaction.followUp({embeds:[emu]})
        }else {
          interaction.followUp(`:x: **${interaction.user} You Dont Have Banner**`)
        }
      } catch (error) {
console.log(error)
      }
    } else {
      try {
        const data = await axios.get(`https://discord.com/api/users/${user.id}`,{
          headers:{
            Authorization:`Bot ${client.token}`
          }
        }).then(d => d.data);
        if(data.banner){
          const a = data.banner.startsWith(`O_`) ?  ".gif?size=4096" : ".png?size=4096";
          const url =  `https://cdn.discordapp.com/banners/${user.id}/${data.banner}${a}`;
          let em = new MessageEmbed() .setTitle(`Banner ${user.username}`) .setImage(url) .setColor(`RANDOM`)
          interaction.followUp({embeds:[em]})
        }else {
          interaction.followUp(`:x: **${user} he is dont have a banne**`)
        }
      } catch (error) {
console.log(error)
      }
    }


    }
    if(sub === "server") {
let bannerg = interaction.guild.bannerURL();
if(bannerg === null){
  interaction.followUp(`:x: | **${interaction.guild.name} he is dont have a banner** `)
} else {
  let embed = new MessageEmbed() .setTitle(`Banner Server ${interaction.guild.name}`) .setImage(interaction.guild.bannerURL({dynamic:true}))
  interaction.followUp({embeds:[embed]})
}
    }
} 
    },
};
