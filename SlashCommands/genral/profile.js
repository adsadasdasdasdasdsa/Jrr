/*const { Client, CommandInteraction,MessageEmbed, NessageButton, MessageActionRow, MessageAttachment, startTyping  } = require("discord.js");
const db = require("quick.db")
const Canvas = require('canvas');
const { readFile } = require('fs/promises');
const { request } = require('undici');
let Functions = require("../../Functions/utils.js")


module.exports = {
    name: "profile",
    description: "returns websocket ping",
    type: 'CHAT_INPUT',
options:[
    {
        name:"user",
        description:"user",
        require:false,
        type:"USER"
    }
],
    run: async (client, interaction, args) => {
      let me = db.get(`run_${interaction.user.id}.run`)
      let lvl =  db.get(`lvl_${interaction.user.id}.lvl`);
      if(lvl === null) lvl = "0"
    
      if(me === 150){
db.add(`lvl_${interaction.user.id}.lvl`,1)
      }
      if(me === 300){
        db.add(`lvl_${interaction.user.id}.lvl`,1)
              }
              if(me === 600){
                db.add(`lvl_${interaction.user.id}.lvl`,1)
                      }        
                      if(me === 1200){
                        db.add(`lvl_${interaction.user.id}.lvl`,1)
                              }
                              if(me === 2400){
                                db.add(`lvl_${interaction.user.id}.lvl`,1)
                                      }
                                      if(me === 4800){
                                        db.add(`lvl_${interaction.user.id}.lvl`,1)
                                              }
                                              if(me === 9600){
                                                db.add(`lvl_${interaction.user.id}.lvl`,1)
                                                      }
                                                      if(me === 19200){
                                                        db.add(`lvl_${interaction.user.id}.lvl`,1)
                                                              }
                                                              if(me === 38400){
                                                                db.add(`lvl_${interaction.user.id}.lvl`,1)
                                                                      }
        const inter = interaction;
      let lang = db.get(`lang_${interaction.guild.id}.lang`)
      let jb = db.get(`jb_${interaction.user.id}.jb`);
    
      let user = interaction.options.getUser(`user`);
      if(!user) {
        const canvas = Canvas.createCanvas(512, 512);
        const ctx = canvas.getContext('2d');
        const backgroundFile = await readFile('./SlashCommands/f.jpg');
        const background = new Canvas.Image();
        background.src = backgroundFile;
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
        ctx.textAlign = "left"
        ctx.strokeStyle = '#0099ff';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
        ctx.font = "25px ahmed"
        ctx.fillStyle = 'white';
        ctx.fillText(`${interaction.user.username} profile`, canvas.width / 2, canvas.height / 3);
        ctx.font = "25px ahmed"
        ctx.fillStyle = 'white';
        ctx.fillText(`jb: \n ${jb}`, canvas.width / 13, canvas.height / 2)
        ctx.font = "25px ahmed"
        ctx.fillStyle = 'white';
        ctx.fillText(`rank: \n ${me}`, canvas.width / 13, canvas.height /1.5)
        ctx.font = "27px ahmed"
        ctx.fillStyle = 'white';
        ctx.fillText(`lvl: \n ${db.get(`lvl_${interaction.user.id}.lvl`)}`, canvas.width / 13, canvas.height / 1.2  ) 
        ctx.strokeRect(0, 0, canvas.width, canvas.height);

        const { body } = await request(interaction.user.displayAvatarURL({ format: 'jpg' }));
        const avatar = new Canvas.Image();
        avatar.src = Buffer.from(await body.arrayBuffer());

        ctx.beginPath();
        ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip()
        ctx.drawImage(avatar, 25, 25, 200, 200);
        ctx.strokeRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(avatar, 25, 25, 200, 200)   
        let atta = new MessageAttachment(canvas.toBuffer('image/png'),"profile.png")
        interaction.followUp({files:[atta]})
      } else {
      let jbu = db.get(`jb_${user.id}.jb`)
        let ru = db.get(`run_${user.id}.run`)
        let lvl =  db.get(`lvl_${user.id}.lvl`);
        if(lvl === null)  {
          lvl = "0"
        }  
        
          if(ru === 150){
    db.add(`lvl_${interaction.user.id}.lvl`,1)
          }
          if(ru === 300){
            db.add(`lvl_${interaction.user.id}.lvl`,1)
                  }
                  if(ru === 600){
                    db.add(`lvl_${interaction.user.id}.lvl`,1)
                          }        
                          if(ru === 1200){
                            db.add(`lvl_${interaction.user.id}.lvl`,1)
                                  }
                                  if(ru === 2400){
                                    db.add(`lvl_${interaction.user.id}.lvl`,1)
                                          }
                                          if(ru === 4800){
                                            db.add(`lvl_${interaction.user.id}.lvl`,1)
                                                  }
                                                  if(ru === 9600){
                                                    db.add(`lvl_${interaction.user.id}.lvl`,1)
                                                          }
                                                          if(ru === 19200){
                                                            db.add(`lvl_${interaction.user.id}.lvl`,1)
                                                                  }
                                                                  if(ru === 38400){
                                                                    db.add(`lvl_${interaction.user.id}.lvl`,1)
                                                                          }
        const canvas = Canvas.createCanvas(512, 512);
        const ctx = canvas.getContext('2d');
        const backgroundFile = await readFile('./SlashCommands/f.jpg');
        const background = new Canvas.Image();
        background.src = backgroundFile;
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
        ctx.textAlign = "left"
        ctx.strokeStyle = '#0099ff';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
        ctx.font = "25px ahmed"
        ctx.fillStyle = 'white';
        ctx.fillText(`${user.username} profile`, canvas.width / 2, canvas.height / 3);
        ctx.font = "25px ahmed"
        ctx.fillStyle = 'white';
        ctx.fillText(`jb: \n ${jbu}`, canvas.width / 13, canvas.height / 2)
        ctx.font = "25px ahmed"
        ctx.fillStyle = 'white';
        ctx.fillText(`rank: \n ${ru}`, canvas.width / 13, canvas.height /1.5)
        ctx.font = "27px ahmed"
        ctx.fillStyle = 'white';
        ctx.fillText(`lvl: \n ${db.get(`lvl_${user.id}.lvl`)}`, canvas.width / 13, canvas.height / 1.2  ) 
        ctx.strokeRect(0, 0, canvas.width, canvas.height);

        const { body } = await request(user.displayAvatarURL({ format: 'jpg' }));
        const avatar = new Canvas.Image();
        avatar.src = Buffer.from(await body.arrayBuffer());

        ctx.beginPath();
        ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip()
        ctx.drawImage(avatar, 25, 25, 200, 200);
        ctx.strokeRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(avatar, 25, 25, 200, 200)   
        let atta = new MessageAttachment(canvas.toBuffer('image/png'),"profile.png")
        interaction.followUp({files:[atta]})
      }

      if(lang === "ar"){

      }
    },
};
*/