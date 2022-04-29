const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send({embed:ozelmesajuyari}); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.MessageEmbed()
      .setTitle("İşte Fivem Ve Team Speak Sunucularımızın Ip'leri")
      .setAuthor("Night Life Roleplay", "https://cdn.discordapp.com/attachments/964969233211605043/964969300924461156/unknown.png")
      .addField('Fivem','connect 213.142.150.5')
      .addField('TS3','ip')
      
      .setThumbnail("https://cdn.discordapp.com/attachments/964969233211605043/964969300924461156/unknown.png")

    return message.channel.send({ embed:sunucubilgi });
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ip',
  description: 'Ambulansı arar (ciddiye almayın)',
  usage: 'ara112'
};