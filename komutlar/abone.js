let Discord = require("discord.js")
let database = require("wio.db")

exports.run = async(client, message, args) => {
let aboneyetkilisi = "824528298268688421"// abone yetkilisi rol id
let abonelog = "830506939616198716"// abone log 
let abonerol = "836894531466952734" // abone rol 
  let abonekisi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
if(!abonerol) return message.channel.send(`**:x: Abone rolü ayarlanmamış!**`)
  if(!abonelog) return message.channel.send(`**:x: Abone log kanalı ayarlanmamış!**`)
  if(!aboneyetkilisi) return message.channel.send(`**:x:Abone yetkili rolü ayarlanmamış!**`)
  let user = message.mentions.users.first()
  if(!message.member.roles.cache.has(aboneyetkilisi)) return message.channel.send(`**Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.**`)
  
  if(!message.mentions.users.first()) return message.channel.send(`** :x: Lütfen Bir Üye Etiketle!**`)
  
  await(abonekisi.roles.add(abonerol))
  message.author.send(`**:white_check_mark: Kullanıcıya abone rolünü başarıyla verdin.**`)
  const embed = new Discord.MessageEmbed()
  .setTitle(`:wrench: Abone Rolü Verildi!`)
  .addField(`:white_check_mark: Abone Rolünü Veren Kişi:`,`Adı:${message.author.tag} \n\n İD:${message.author.id}`, true)
  .addField(`:pushpin: Abone Rolü Verilen Kişi`, `${user}`, true)
 .addField(`:scroll: Mesaj linki`,`[Tıkla](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id})`, true)
  .setColor(`BLUE`)
  .setFooter(`Archex & Ghost Abone Sistemi`)
  message.guild.channels.cache.get(abonelog).send(embed)
}

exports.config = {
    name: "abone",
    aliases: []
};