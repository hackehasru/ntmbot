const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
 exports.run = (client, message, args) => {
   message.delete();
   let question = args.join(' ');
   let user = message.author.username
   if (!question) return message.reply(
     new Discord.MessageEmbed()
     .setColor("BLUE")
     .setDescription(` Yazı yazman gerek.`)).then(m => m.delete(5000));
     message.reply(
       new Discord.MessageEmbed()
       .setColor("BLUE")
       .setTitle(`${ayarlar.isim}`)
       .setThumbnail(client.user.displayAvatarURL())
       .setTimestamp()
       .setFooter('', client.user.displayAvatarURL())
       .addField(`**Oylama:**`, `**${question}**`)).then(function(message) {
         message.react('✅');
         message.react('❌');
       });
     };
     exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases: ['anket'],
  permLevel: 3,
};
exports.help = {
  name: 'oylama',
  description: 'Oylama yapmanızı sağlar.',
  usage: 'oylama <oylamaismi>'
};
