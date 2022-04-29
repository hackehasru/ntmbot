const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (bot, msg, args) => {
  const embed = new Discord.MessageEmbed()
  .setAuthor(`Genel Yardım|${ayarlar.isim}`)
    .setColor("#00ff00")
    .addField(
      `**__afk__**`,
      `💬 \`${prefix}afk <sebep>\` \n afk komutu.`,
      true
    )
    .addField(
      `**__avatar__**`,
      `💬 \`${prefix}avatar <kişi>\` \n Kişinin Avatarını Alır.`,
      true
    )
    .addField(
        `**__ip__**`,
        `💬 \`${prefix}ip\` \n Fivem Sunucumuzun TS3 ve Server İP Sini Verir.`,
        true
      )
      .addField(
        `**__kullanıcı-bilgi__**`,
        `💬 \`${prefix}kullanıcı-bilgi @Kullanıcı\` \n Kullanıcı hakkında bilgi verir.`,
        true
      )
      .addField(
        `**__ping__**`,
        `💬 \`${prefix}ping\` \n Discord Bot Gecikmesini Gösterir.`,
        true
      );
  msg.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["genel-help","genel-yardım"],
  permLevel: 0
};
exports.help = {
  name: "Genel-Yardım",
  description: "Genel Komutlarını Gösterir.",
  usage: "genel-yardım"
};