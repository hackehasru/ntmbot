const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (bot, msg, args) => {
  const embed = new Discord.MessageEmbed()
  .setAuthor(`Yardım|${ayarlar.isim}`)
    .setColor("#00ff00")
    .addField(
      `**__Genel-Yardım__**`,
      `📙 \`${prefix}Genel-Yardım\` \n Genel Komutları Gösterir.`,
      true
    )
    .addField(
      `**__Admin-Yardım__**`,
      `📙 \`${prefix}Admin-Yardım\` \n Admin Komutları Gösterir.`,
      true
    )
    .addField(
        `**__Guard-Yardım__**`,
        `📙 \`${prefix}Guard-Yardım\` \n Guard Sistem Gösterir.`,
        true
      )
      .addField(
        `**__Sahip-Yardım__**`,
        `📙 \`${prefix}Sahip-Yardım \` \n Sahip Komutları Gösterir.`,
        true
      );
      
  msg.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["help","yardım"],
  permLevel: 0
};
exports.help = {
  name: "y",
  description: "yardım.",
  usage: "yardım"
};