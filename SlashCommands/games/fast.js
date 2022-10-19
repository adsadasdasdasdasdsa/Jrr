const { time } = require("console");
const { Client, CommandInteraction,MessageEmbed, MessageButton, MessageActionRow,MessageAttachment } = require("discord.js");
const db = require("quick.db")
const { loadImage , registerFont } = require('canvas')
const { readFile } = require('fs')
const Canvas = require("canvas")
let Functions = require("../../Functions/utils.js")
let array = [
    "قصطنتينية",
    'فسيكفيكهم',
    "إطَّـلـخـم",
    "المستصغرون",
    "فاستضعفناهما",
    "فاستنسخناهما",
    'أفاستسقيناكموها',
    "السجسج",
    "الشنفرة",
    "الفرزدق",
    "الوخواخ",
    "الجعسوس",
    "مكفهر",
    "الصنديد",
    "الحصيف",
    "الأباخس",
    "الرفادة",
    "الزماورد",
    "الناطس"
]
let faster = array[Math.floor(Math.random() * array.length)]
module.exports = {
    name: "fast",
    description: "returns websocket ping",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      let lang = db.get(`lang_${interaction.guild.id}.lang`)
if(lang === "ar") {
    let qqq = `لديك 15 الثانية لكتابة كلمة`
    
    let text = await Functions.createFunCanvas(qqq,"15",faster)
let atta = new MessageAttachment(text,'ggs.png')
        const filter = m => m.content.includes(`${faster}`);
        interaction.followUp({files:[atta]}).then(() => {
    
                    interaction.channel.awaitMessages({ filter, max: 1, time: 15000, }).then(aa => {
                        let time =  Date.now() + 15000
                        time = (time - Date.now()) /1000
                    interaction.followUp(`**الفائز هو ${aa.first().author}  بكتابة الكلمة قبل انتهاء الوقت**  `)
                    }).catch(() => {
                        interaction.followUp('انتهى الوقت لم يفز احد');
        })
    
    })

} 
    },
};
