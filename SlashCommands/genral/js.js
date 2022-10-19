const { Client, CommandInteraction,MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const e = require("express");
const db = require("quick.db");


module.exports = {
    name: "jb",
    description: "This Currency Bot",
    type: 'CHAT_INPUT',
    options:[
        {
            name:"user",
            description:"If You Will Know How much does he have? User Jb",
            required:false,
            type:"USER"
        },
        {
          name:"amount",
      description:"amount you trans",
      required:false,
      type:"NUMBER"
        }
    ],
    run: async (client, interaction, args) => {
      let lang = db.get(`lang_${interaction.guild.id}.lang`)
      let user = interaction.options.getUser(`user`);
      let amount = interaction.options.getNumber(`amount`)
      let member = db.get(`jb_${interaction.user.id}.jb`);
if(lang === "ar") {
  if(amount)  {
    if(user.id === interaction.user.id) {
      interaction.followUp(`❌ | **لا يمكنك تحويل لنفسك**`)
    } else if(user.bot) {
      interaction.followUp(`❌ | **الروبوتات لا تملك جب**`)
    } else {
      if(!user) {
        interaction.followUp(`❌ | **الرجاء منشن العضوا**`)
      } else {
  if(member < amount){
    interaction.followUp(`❌ | **انت لا تملك هاذا المبلغ**`)
  } else {
    db.add(`jb_${user.id}.jb`,amount)
    db.subtract(`jb_${interaction.user.id}.jb`,amount)
    interaction.followUp(`✅ | تم تحويل المبلغ الى ${user}`)
    user.send(`\`\`\`لقد استلمت ${amount} من المستخدم ${interaction.user.username}\`\`\``)
  }
      }
    }

  } else {
    if(!user) {
      let jb = db.get(`jb_${interaction.user.id}.jb`)
      if(!db.get(`jb_${interaction.user.id}.jb`)){
        db.set(`jb_${interaction.user.id}`,{jb:0})
  
        if(!db.get(`jb_${interaction.user.id}.jb`)){
          jb= "0";
        }
        interaction.followUp(`🏛 | ** يمتلك في حسابك ${jb}**`)
      }
      if(!db.get(`jb_${interaction.user.id}.jb`)) {
        jb = "0"
      }
        interaction.followUp(`🏛 | ** يمتلك في حسابك ${jb}**`)
      
    } else {
      let jb = db.get(`jb_${user.id}.jb`)
      if(!db.get(`jb_${user.id}.jb`)){
        db.set(`jb_${user.id}`,{jb:0})
  
        if(!db.get(`jb_${user.id}.jb`)){
          jb= "0";
        }
        interaction.followUp(`🏛 | **يمتلك في حسابه ${jb}**`)
      } else {
        if(!db.get(`jb_${user.id}.jb`)) {
          jb = "0"
        }
          interaction.followUp(`🏛 | **يمتلك في في حسابه ${jb}**`)
      }
  
      
    }
  
  }
} else if(lang === "en") {
  if(amount)  {
    if(user.id === interaction.user.id) {
      interaction.followUp(`❌ | **You Cant Transformation For YourSelf**`)
    } else if(user.bot) {
      interaction.followUp(`❌ | **The Bots Dont Have A jb**`)
    } else {
      if(!user) {
        interaction.followUp(`❌ | **Plase Mention Member**`)
      } else {
  if(member < amount){
    interaction.followUp(`❌ | **You Dont Have This Amount**`)
  } else {
    db.add(`jb_${user.id}.jb`,amount)
    db.subtract(`jb_${interaction.user.id}.jb`,amount)
    interaction.followUp(`✅ | Dont Transformation Amount To ${user}`)
    user.send(`\`\`\`You Receive ${amount} From ${user.username}\`\`\``)
  }
      }
    }

  } else {
    if(!user) {
      let jb = db.get(`jb_${interaction.user.id}.jb`)
      if(!db.get(`jb_${interaction.user.id}.jb`)){
        db.set(`jb_${interaction.user.id}`,{jb:0})
  
        if(!db.get(`jb_${interaction.user.id}.jb`)){
          jb= "0";
        }
        interaction.followUp(`🏛 | **${interaction.user} You Are Have In Account ${jb}**`)
      } else {
        if(!db.get(`jb_${interaction.user.id}.jb`)) {
          jb = "0"
        }
        interaction.followUp(`🏛 | **${interaction.user} You Are Have In Account ${jb}**`)
      }
    } else {
      let jb = db.get(`jb_${user.id}.jb`)
      if(!db.get(`jb_${user.id}.jb`)){
        db.set(`jb_${user.id}`,{jb:0})
  
        if(!db.get(`jb_${user.id}.jb`)){
          jb= "0";
        }
        interaction.followUp(`🏛 | **${user.username} Have In His Account ${jb}**`)
      } else {
        if(!db.get(`jb_${user.id}.jb`)) {
          jb = "0"
        }
        interaction.followUp(`🏛 | **${user.username} Have In His Account ${jb}**`)
      }
  
      
    }
  
  }
}
    },
};
