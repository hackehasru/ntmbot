const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (bot, msg, args) => {
  const embed = new Discord.MessageEmbed()
    .setAuthor(`Sahip Yardım|${ayarlar.isim}`)
    .setColor("#00ff00")
    .addField(
      `**__sa-as__**`,
      `👑 \`${prefix}sa-as aç/kapat\` \n Bot SA ya AS Diye Cevap Verir..`,
      true
    )
    .addField(
        `**__kick-log__**`,
        `👑 \`${prefix}kick-log <kanal>\` \n Kick-log Kanal Ayarlar.`,
        true
      )
      .addField(
        `**__ban-log__**`,
        `👑 \`${prefix}ban-log <kanal>\` \n ban-log kanal Ayarlar.`,
        true
      )
      .addField(
        `**__ban-yetkili__**`,
        `👑 \`${prefix}ban-yetkili <@rol> \` \n ban-yetkili Ayarlar.`,
        true
      )
      .addField(
        `**__aktif__**`,
        `👑 \`${prefix}aktif \` \n Sunuvcu Aktif Yazısı Gönderir.`,
        true
      )
      .addField(
        `**__ip__**`,
        `👑 \`${prefix}aktif \` \n Sunuvcu ip gösterir.`,
        true
      )
      .addField(
        `**__bakım__**`,
        `👑 \`${prefix}bakım \` \n Sunucu bakımda Yazısı Gönderir.`,
        true
      )
      .addField(
        `**__Whitelist-yetkili__**`,
        `👑 \`${prefix}Whitelist-yetkili <@rol> \` \n Whitelist-yetkili Ayarlar.`,
        true
      )
      .addField(
        `**__Whitelist-log__**`,
        `👑 \`${prefix}Whitelist-log <kanal>\` \n Whitelist-log Ayarlar.`,
        true
      )
      .addField(
        `**__Whitelistrol__**`,
        `👑 \`${prefix}Whitelistrol <@rol>\` \n Whitelistrol Ayarlar.`,
        true
      );
  msg.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sahip-help","sahip-yardım"],
  permLevel: 3
};
exports.help = {
  name: "Sahip-Yardım",
  description: "Sahip Komutlarını Gösterir.",
  usage: "sahip-yardım"
};