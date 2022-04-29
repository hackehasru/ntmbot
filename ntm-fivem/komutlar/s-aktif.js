const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = (client, message, args, member) => {
const embed = new Discord.MessageEmbed()
  .setAuthor(`${ayarlar.isim} | Aktif`, client.user.avatarURL())
  .setColor("RANDOM")
  .addField(`**:tada: Sunucumuz Aktif :tada:\n :arrow_down: Sizde Hemen Aşağıdaki Bağlantılardan :arrow_down:  \n\n Sunucun ip: ${ayarlar.ip} \n TS3 ip: ${ayarlar.ts3ip} \n\n 🎮 Sunucumuza Katılabilirsiniz🎮**`,`${ayarlar.isim} İyi Roller Diler`)
  message.channel.send('||@everyone@here||',{embed});
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["aktif"],
    permLevel: 0
}

exports.help = {
    name: "aktif",
    description: "",
    usage: ""
}