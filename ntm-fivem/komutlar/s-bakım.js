const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = (client, message, args, member) => {
const embed = new Discord.MessageEmbed()
  .setAuthor(`${ayarlar.isim}`, client.user.avatarURL())
  .setColor("RANDOM")
  .addField(`**Sunucumuz Bakımda Sakın Girmeyin Kafanıza Vururum Ha**`,`${ayarlar.isim} İyi Roller Diler`)
  message.channel.send('||@everyone@here||',{embed});
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["bakım"],
    permLevel: 0
}

exports.help = {
    name: "bakım",
    description: "",
    usage: ""
}