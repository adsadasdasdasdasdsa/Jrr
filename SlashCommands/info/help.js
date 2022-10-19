const { Client, CommandInteraction,MessageEmbed,MessageButton, MessageActionRow, MessageSelectMenu  } = require("discord.js");
const e = require("express");
const db = require("quick.db")

module.exports = {
    name: "help",
    description: "Show List Commands in Bot",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      let lang = db.get(`lang_${interaction.guild.id}.lang`)
if(lang === "ar"){
 let ur = "https://discord.com/api/oauth2/authorize?client_id=1010856702054240326&permissions=1099963574390&scope=bot%20applications.commands"
  let embeds = new MessageEmbed()
  .setTitle(`${client.user.username} اوامر`)
  .setDescription(`اضغط على الازرار حتى يضهر الاوامر`)
  .setColor("RANDOM")
  .setAuthor(client.user.username,client.user.displayAvatarURL())
  let buttons = new MessageActionRow()
  .addComponents(
new MessageSelectMenu()
.setCustomId(`sel`)
.setPlaceholder(`اختار حتى تضهر الاوامر`)
.addOptions([
  {
    label:"اوامر مشرف",
    description:"يمكنك رؤية جميع اوامر الاشراف هنا",
    value:"ac",
    emoji:"🛡"
  },{
    label:"اوامر عامة",
    description:"يمكنك رؤية جميع اوامر العامه هنا",
    value:"gc",
    emoji:'👨‍👦'
  },{
    label:"اوامر التذكره",
    description:"يمكنك رؤية جميع اوامر التذكره هنا",
    value:`tc`,
    emoji:"📟"
  },{
    label:"اوامر الالعاب",
    description:"يمكنك رؤية جميع اوامر الالعاب هنا",
    value:"ggc",
    emoji:"🎮"
  }
])
  )
let msg = await interaction.followUp({embeds:[embeds],
  components:[buttons],
   fetchReply: true})
const filter = (i) =>  i.user.id === interaction.user.id;
const collector = await msg.createMessageComponentCollector({
  filter,
  time: 300000
});
collector.on('collect', async(collected) => {
  collected.deferUpdate().catch(er => 0);
  if(collected.isSelectMenu()){
    let value = collected.values[0];
    let em = new MessageEmbed()
if(value === "ac"){
em.setDescription(`1-ban : حضر الاعضاء المخالفين او الهك.ر
2-kick : طرد الاعضاء المخالفين
3-protection : للحماية من السب او الروابط
4-log : لتحديد قنوات الوقات
5-set-lang : لتحديد لغة البوت`)
em.setColor(`RANDOM`)
em.setTitle(`اوامر ${client.user.username}`)
em.setAuthor(client.user.username,client.user.displayAvatarURL())
msg.edit({ embeds:[em], }).catch(err => {});
} else if(value === "gc"){
  em.setDescription(`1-avatar : لرؤية الصوره الشخصية لك ولاعضاء الخادم
  2-user : لرؤية معلومات المستخدم
  3-banner : لرؤية راية الاعضاء و الخادم
  4-daily : لاخذ راتم يومي
  `)
em.setColor(`RANDOM`)
em.setTitle(`اوامر ${client.user.username}`)
em.setAuthor(client.user.username,client.user.displayAvatarURL())
msg.edit({ embeds:[em], }).catch(err => {});
} else if(value === "tc"){
  em.setDescription(`1-set-staf : لتحديد مشرفين التذكره
  2-set-category : لتحديد الفئة التي ينشأ فيها القناة
  3-setup : لانشاء رساله انشاء التذكره
  4-add-user : لأضافه اشخاص الى التذكره`)
em.setColor(`RANDOM`)
em.setTitle(`اوامر ${client.user.username}`)
em.setAuthor(client.user.username,client.user.displayAvatarURL())
msg.edit({ embeds:[em], }).catch(err => {});
} else if(value === "ggc") {
  em.setDescription(`قادم ...`)
em.setColor(`RANDOM`)
em.setTitle(`اوامر ${client.user.username}`)
em.setAuthor(client.user.username,client.user.displayAvatarURL())
msg.edit({ embeds:[em], }).catch(err => {});
}
  }
})
}else if(lang === "en") {
  let embeds = new MessageEmbed()
  .setTitle(`${client.user.username} اوامر`)
  .setDescription(`اضغط على الازرار حتى يضهر الاوامر`)
  .setColor("RANDOM")
  .setAuthor(client.user.username,client.user.displayAvatarURL())
  let buttons = new MessageActionRow()
  .addComponents(
new MessageSelectMenu()
.setCustomId(`sel`)
.setPlaceholder(`select to show commands`)
.addOptions([
  {
    label:"Admin Commands",
    description:"See all supervision orders here",
    value:"ac",
    emoji:"🛡"
  },{
    label:"اوامر عامة",
    description:"يمكنك رؤية جميع اوامر العامه هنا",
    value:"gc",
    emoji:'👨‍👦'
  },{
    label:"اوامر التذكره",
    description:"يمكنك رؤية جميع اوامر التذكره هنا",
    value:`tc`,
    emoji:"📟"
  },{
    label:"اوامر الالعاب",
    description:"يمكنك رؤية جميع اوامر الالعاب هنا",
    value:"ggc",
    emoji:"🎮"
  }
])
  )
let msg = await interaction.followUp({embeds:[embeds],
  components:[buttons],
   fetchReply: true})
const filter = (i) =>  i.user.id === interaction.user.id;
const collector = await msg.createMessageComponentCollector({
  filter,
  time: 300000
});
collector.on('collect', async(collected) => {
  collected.deferUpdate().catch(er => 0);
  if(collected.isSelectMenu()){
    let value = collected.values[0];
    let em = new MessageEmbed()
if(value === "ac"){
em.setDescription(`1-ban : Attendance of offending members or ha.king
2-kick : Expulsion of violating members
3-protection : To protect against insults or links 
4-log : To select log channels
5-set-lang : Define the language of the bot`)
em.setColor(`RANDOM`)
em.setTitle(`commands ${client.user.username}`)
em.setAuthor(client.user.username,client.user.displayAvatarURL())
msg.edit({ embeds:[em], }).catch(err => {});
} else if(value === "gc"){
  em.setDescription(`1-avatar : To see your profile picture and server members
  2-user : To see user information`)
em.setColor(`RANDOM`)
em.setTitle(`commands ${client.user.username}`)
em.setAuthor(client.user.username,client.user.displayAvatarURL())
msg.edit({ embeds:[em], }).catch(err => {});
} else if(value === "tc"){
  em.setDescription(`1-set-staf : To select ticket admins
  2-set-category : Specifies the category in which the channel originates
  3-setup : To create a message Create a ticket
  4-add-user : To add people to the ticket`)
em.setColor(`RANDOM`)
em.setTitle(`commands ${client.user.username}`)
em.setAuthor(client.user.username,client.user.displayAvatarURL())
msg.edit({ embeds:[em], }).catch(err => {});
} else if(value === "ggc") {
  em.setDescription(`Soon ...`)
em.setColor(`RANDOM`)
em.setTitle(`commands ${client.user.username}`)
em.setAuthor(client.user.username,client.user.displayAvatarURL())
msg.edit({ embeds:[em], }).catch(err => {});
}
  }
})
}
    },
};
