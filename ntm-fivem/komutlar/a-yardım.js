const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (bot, msg, args) => {
  const embed = new Discord.MessageEmbed()
  .setAuthor(`Admin Yardım|${ayarlar.isim}`)
    .setColor("#00ff00")
    .addField(
      `**__ban__**`,
      `🔨 \`${prefix}ban <kişi> <sebep>\` \n ban komutu.`,
      true
    )
    .addField(
      `**__kick__**`,
      `🔨 \`${prefix}kick <kişi> <sebep>\` \n kick komutu.`,
      true
    )
    .addField(
        `**__oylama__**`,
        `🔨 \`${prefix}oylama <message>\` \n yazdığınız kanalda oylama başlatır.`,
        true
      )
      .addField(
        `**__sil__**`,
        `🔨 \`${prefix}sil <sayı>\` \n Belirtiğiniz Sayı Kadar Mesaj Siller.`,
        true
      )
      .addField(
        `**__Whitelist__**`,
        `🔨 \`${prefix}w <üye>\` \n Belirtiğiniz Kişiye Whitelist Rolü Verir.`,
        true
      );
  msg.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["admin-help","admin-yardım"],
  permLevel: 3
};
exports.help = {
  name: "Admin-Yardım",
  description: "Admin Komutlarını Gösterir.",
  usage: "admin-yardım"
};